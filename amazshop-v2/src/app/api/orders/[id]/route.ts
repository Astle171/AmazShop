import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const { searchParams } = new URL(request.url);
  const includeStripe = searchParams.get("include") === "stripe";

  const order = await prisma.order.findUnique({
    where: { id },
    include: { items: true },
  });

  if (!order || order.userId !== session.user.id) {
    return NextResponse.json({ error: "Order not found" }, { status: 404 });
  }

  const orderPayload = {
    id: order.id,
    status: order.status,
    subtotal: order.subtotal,
    shipping: order.shipping,
    tax: order.tax,
    total: order.total,
    couponCode: order.couponCode,
    shippingFirstName: order.shippingFirstName,
    shippingLastName: order.shippingLastName,
    shippingAddress: order.shippingAddress,
    shippingCity: order.shippingCity,
    shippingPostal: order.shippingPostal,
    createdAt: order.createdAt,
    items: order.items.map((item) => ({
      id: item.id,
      productId: item.productId,
      productName: item.productName,
      variant: item.variant,
      quantity: item.quantity,
      unitPrice: item.unitPrice,
    })),
  };

  if (!includeStripe) {
    return NextResponse.json({ order: orderPayload, receiptUrl: null });
  }

  let receiptUrl: string | null = null;

  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(
      order.stripePaymentId,
      { expand: ["latest_charge"] }
    );
    const charge = paymentIntent.latest_charge;
    if (charge && typeof charge !== "string" && charge.receipt_url) {
      receiptUrl = charge.receipt_url;
    }
  } catch {
    // receipt URL is optional
  }

  return NextResponse.json({ order: orderPayload, receiptUrl });
}
