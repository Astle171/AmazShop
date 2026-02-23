import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const orders = await prisma.order.findMany({
    where: { userId: session.user.id },
    include: { items: true },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({
    orders: orders.map((o) => ({
      id: o.id,
      status: o.status,
      subtotal: o.subtotal,
      shipping: o.shipping,
      tax: o.tax,
      total: o.total,
      couponCode: o.couponCode,
      stripePaymentId: o.stripePaymentId,
      shippingFirstName: o.shippingFirstName,
      shippingLastName: o.shippingLastName,
      createdAt: o.createdAt,
      items: o.items.map((item) => ({
        id: item.id,
        productId: item.productId,
        productName: item.productName,
        variant: item.variant,
        quantity: item.quantity,
        unitPrice: item.unitPrice,
      })),
    })),
  });
}
