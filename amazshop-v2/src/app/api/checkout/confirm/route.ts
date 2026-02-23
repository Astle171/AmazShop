import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";
import { getProductById } from "@/lib/product-lookup";

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { paymentIntentId, shippingFirstName, shippingLastName, shippingAddress, shippingCity, shippingPostal } = body;

  if (!paymentIntentId) {
    return NextResponse.json({ error: "Missing paymentIntentId" }, { status: 400 });
  }

  const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

  if (paymentIntent.status !== "succeeded") {
    return NextResponse.json({ error: "Payment not completed" }, { status: 400 });
  }

  if (paymentIntent.metadata.userId !== session.user.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const existing = await prisma.order.findUnique({
    where: { stripePaymentId: paymentIntentId },
  });

  if (existing) {
    return NextResponse.json({ orderId: existing.id });
  }

  const meta = paymentIntent.metadata;

  // Read cart items from the DB (not from metadata)
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

  const order = await prisma.order.create({
    data: {
      userId: session.user.id,
      stripePaymentId: paymentIntentId,
      status: "PAID",
      subtotal: parseInt(meta.subtotal, 10),
      shipping: parseInt(meta.shipping, 10),
      tax: parseInt(meta.tax, 10),
      total: paymentIntent.amount,
      couponCode: meta.couponCode || null,
      shippingFirstName: shippingFirstName || meta.shippingFirstName || null,
      shippingLastName: shippingLastName || meta.shippingLastName || null,
      shippingAddress: shippingAddress || meta.shippingAddress || null,
      shippingCity: shippingCity || meta.shippingCity || null,
      shippingPostal: shippingPostal || meta.shippingPostal || null,
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

  return NextResponse.json({ orderId: order.id });
}
