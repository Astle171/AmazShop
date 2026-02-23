import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";

interface InvoiceLineItem {
  productName: string;
  variant: string;
  quantity: number;
  unitPrice: number; // in cents
}

/**
 * Get or create a Stripe Customer for a user.
 * Stores the Stripe customer ID on the user record for reuse.
 */
export async function getOrCreateStripeCustomer(
  userId: string
): Promise<string> {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw new Error("User not found");

  if (user.stripeCustomerId) return user.stripeCustomerId;

  const customer = await stripe.customers.create({
    email: user.email ?? undefined,
    name: user.name ?? undefined,
    metadata: { userId },
  });

  await prisma.user.update({
    where: { id: userId },
    data: { stripeCustomerId: customer.id },
  });

  return customer.id;
}

/**
 * Create a finalized, paid Stripe invoice for a completed order.
 * Returns the invoice PDF URL.
 */
export async function createOrderInvoice(params: {
  orderId: string;
  userId: string;
  stripePaymentId: string;
  items: InvoiceLineItem[];
  shipping: number;
  tax: number;
  couponCode?: string | null;
  shippingName?: string;
  shippingAddress?: string;
  shippingCity?: string;
  shippingPostal?: string;
}): Promise<string | null> {
  try {
    const customerId = await getOrCreateStripeCustomer(params.userId);

    const invoice = await stripe.invoices.create({
      customer: customerId,
      collection_method: "charge_automatically",
      auto_advance: false,
      metadata: {
        orderId: params.orderId,
        stripePaymentId: params.stripePaymentId,
      },
      custom_fields: [
        { name: "Order ID", value: `AMZ-${params.orderId.slice(-9).toUpperCase()}` },
      ],
      shipping_details: params.shippingName
        ? {
            name: params.shippingName,
            address: {
              line1: params.shippingAddress ?? "",
              city: params.shippingCity ?? "",
              postal_code: params.shippingPostal ?? "",
              country: "US",
            },
          }
        : undefined,
    });

    const itemPromises = params.items.map((item) => {
      const description = item.variant !== "Standard"
        ? `${item.productName} — ${item.variant}`
        : item.productName;

      return stripe.invoiceItems.create({
        customer: customerId,
        invoice: invoice.id,
        description,
        quantity: item.quantity,
        unit_amount_decimal: String(item.unitPrice),
        currency: "usd",
      });
    });

    if (params.tax > 0) {
      itemPromises.push(
        stripe.invoiceItems.create({
          customer: customerId,
          invoice: invoice.id,
          description: "Sales Tax",
          quantity: 1,
          unit_amount_decimal: String(params.tax),
          currency: "usd",
        })
      );
    }

    await Promise.all(itemPromises);

    const finalized = await stripe.invoices.finalizeInvoice(invoice.id);

    await stripe.invoices.pay(invoice.id, {
      paid_out_of_band: true,
    });

    await prisma.order.update({
      where: { id: params.orderId },
      data: { stripeInvoiceId: invoice.id },
    });

    return finalized.invoice_pdf ?? null;
  } catch (err) {
    console.error("Failed to create Stripe invoice:", err);
    return null;
  }
}
