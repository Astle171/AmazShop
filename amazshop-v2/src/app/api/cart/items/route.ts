import { NextResponse, type NextRequest } from "next/server";
import { resolveCartOwner } from "@/lib/cart-owner";
import { addItemToCart, getOrCreateCart } from "@/lib/cart-service";

export async function POST(request: NextRequest) {
  const owner = await resolveCartOwner();
  if (!owner) {
    return NextResponse.json({ error: "No cart identity" }, { status: 401 });
  }

  const body = await request.json();
  const { productId, variant, quantity } = body as {
    productId: string;
    variant?: string;
    quantity?: number;
  };

  if (!productId) {
    return NextResponse.json({ error: "productId required" }, { status: 400 });
  }

  const result = await addItemToCart(owner, productId, variant, quantity);

  if (result.error) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  const cart = await getOrCreateCart(owner);
  return NextResponse.json({ items: cart.items }, { status: 201 });
}
