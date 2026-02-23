import { NextResponse, type NextRequest } from "next/server";
import { resolveCartOwner } from "@/lib/cart-owner";
import {
  updateCartItemQuantity,
  removeCartItem,
  getOrCreateCart,
} from "@/lib/cart-service";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const owner = await resolveCartOwner();
  if (!owner) {
    return NextResponse.json({ error: "No cart identity" }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json();
  const { quantity } = body as { quantity: number };

  if (typeof quantity !== "number") {
    return NextResponse.json({ error: "quantity required" }, { status: 400 });
  }

  const result = await updateCartItemQuantity(id, quantity);

  if (result.error) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  const cart = await getOrCreateCart(owner);
  return NextResponse.json({ items: cart.items });
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const owner = await resolveCartOwner();
  if (!owner) {
    return NextResponse.json({ error: "No cart identity" }, { status: 401 });
  }

  const { id } = await params;
  const result = await removeCartItem(id);

  if (result.error) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  const cart = await getOrCreateCart(owner);
  return NextResponse.json({ items: cart.items });
}
