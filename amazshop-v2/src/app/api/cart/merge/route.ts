import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { auth } from "@/lib/auth";
import { mergeGuestCart, getOrCreateCart } from "@/lib/cart-service";

const ANON_COOKIE = "amazshop-anon-id";

export async function POST() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const jar = await cookies();
  const anonId = jar.get(ANON_COOKIE)?.value;

  if (anonId) {
    await mergeGuestCart(session.user.id, anonId);
  }

  const cart = await getOrCreateCart({ userId: session.user.id });
  return NextResponse.json({ items: cart.items });
}
