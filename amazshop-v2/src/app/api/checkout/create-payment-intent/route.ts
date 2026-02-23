import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";
import { getProductById } from "@/lib/product-lookup";
import { computeOrderTotals, getCouponByCode } from "@/data/coupons";

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  const couponCode: string | undefined = body.couponCode;

  const cart = await prisma.cart.findUnique({
    where: { userId: session.user.id },
    include: { items: true },
  });

  if (!cart || cart.items.length === 0) {
    return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
  }

  let subtotal = 0;
  for (const item of cart.items) {
    const product = getProductById(item.productId);
    if (!product) continue;
    subtotal += product.price * item.quantity;
  }

  const coupon = couponCode ? getCouponByCode(couponCode) : null;
  const totals = computeOrderTotals(subtotal, coupon);
  const amountInCents = Math.round(totals.total * 100);

  if (amountInCents < 50) {
    return NextResponse.json(
      { error: "Order total must be at least $0.50" },
      { status: 400 }
    );
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: amountInCents,
    currency: "usd",
    automatic_payment_methods: { enabled: true },
    metadata: {
      userId: session.user.id,
      cartId: cart.id,
      couponCode: couponCode ?? "",
      subtotal: Math.round(subtotal * 100).toString(),
      shipping: Math.round(totals.shippingAfterDiscount * 100).toString(),
      tax: Math.round(totals.taxEstimate * 100).toString(),
    },
  });

  return NextResponse.json({ clientSecret: paymentIntent.client_secret });
}
