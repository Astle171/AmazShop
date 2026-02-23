import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";
import { getProductById } from "@/lib/product-lookup";
import type Stripe from "stripe";

export async function POST(request: Request) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature")!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("Webhook signature verification failed:", message);
    return NextResponse.json({ error: message }, { status: 400 });
  }

  if (event.type === "payment_intent.succeeded") {
    const paymentIntent = event.data.object as Stripe.PaymentIntent;
    await handlePaymentSuccess(paymentIntent);
  }

  return NextResponse.json({ received: true });
}

async function handlePaymentSuccess(paymentIntent: Stripe.PaymentIntent) {
  const meta = paymentIntent.metadata;

  const existing = await prisma.order.findUnique({
    where: { stripePaymentId: paymentIntent.id },
  });
  if (existing) return;

  const cart = meta.cartId
    ? await prisma.cart.findUnique({
        where: { id: meta.cartId },
        include: { items: true },
      })
    : null;

  const lineItems = (cart?.items ?? []).map((item) => {
    const product = getProductById(item.productId);
    return {
      productId: item.productId,
      productName: product?.name ?? item.productId,
      variant: item.variant,
      quantity: item.quantity,
      unitPrice: Math.round((product?.price ?? 0) * 100),
    };
  });

  await prisma.order.create({
    data: {
      userId: meta.userId,
      stripePaymentId: paymentIntent.id,
      status: "PAID",
      subtotal: parseInt(meta.subtotal, 10),
      shipping: parseInt(meta.shipping, 10),
      tax: parseInt(meta.tax, 10),
      total: paymentIntent.amount,
      couponCode: meta.couponCode || null,
      shippingFirstName: meta.shippingFirstName || null,
      shippingLastName: meta.shippingLastName || null,
      shippingAddress: meta.shippingAddress || null,
      shippingCity: meta.shippingCity || null,
      shippingPostal: meta.shippingPostal || null,
      items: {
        create: lineItems.map((item) => ({
          productId: item.productId,
          productName: item.productName,
          variant: item.variant,
          quantity: item.quantity,
          unitPrice: item.unitPrice,
        })),
      },
    },
  });

  if (meta.cartId) {
    await prisma.cart.delete({ where: { id: meta.cartId } }).catch(() => {});
  }
}
