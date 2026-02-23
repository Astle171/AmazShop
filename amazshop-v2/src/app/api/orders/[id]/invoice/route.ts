import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { createOrderInvoice } from "@/lib/stripe-invoice";

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  const order = await prisma.order.findUnique({
    where: { id },
    include: { items: true },
  });

  if (!order || order.userId !== session.user.id) {
    return NextResponse.json({ error: "Order not found" }, { status: 404 });
  }

  if (order.stripeInvoiceId) {
    const invoice = await stripe.invoices.retrieve(order.stripeInvoiceId);
    if (invoice.invoice_pdf) {
      return NextResponse.json({ invoicePdfUrl: invoice.invoice_pdf });
    }
  }

  const pdfUrl = await createOrderInvoice({
    orderId: order.id,
    userId: session.user.id,
    stripePaymentId: order.stripePaymentId,
    items: order.items.map((item) => ({
      productName: item.productName,
      variant: item.variant,
      quantity: item.quantity,
      unitPrice: item.unitPrice,
    })),
    shipping: order.shipping,
    tax: order.tax,
    couponCode: order.couponCode,
    shippingName: [order.shippingFirstName, order.shippingLastName].filter(Boolean).join(" "),
    shippingAddress: order.shippingAddress ?? undefined,
    shippingCity: order.shippingCity ?? undefined,
    shippingPostal: order.shippingPostal ?? undefined,
  });

  if (!pdfUrl) {
    return NextResponse.json({ error: "Failed to generate invoice" }, { status: 500 });
  }

  return NextResponse.json({ invoicePdfUrl: pdfUrl });
}
