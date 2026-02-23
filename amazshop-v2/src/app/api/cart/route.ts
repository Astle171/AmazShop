import { NextResponse } from "next/server";
import { resolveCartOwner } from "@/lib/cart-owner";
import { getCart } from "@/lib/cart-service";

export async function GET() {
  const owner = await resolveCartOwner();
  if (!owner) {
    return NextResponse.json({ items: [] });
  }

  const cart = await getCart(owner);
  return NextResponse.json({ items: cart?.items ?? [] });
}
