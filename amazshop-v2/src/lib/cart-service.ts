import { prisma } from "@/lib/prisma";
import { getProductById } from "@/lib/product-lookup";

export type CartOwner =
  | { userId: string; anonymousId?: undefined }
  | { userId?: undefined; anonymousId: string };

export async function getOrCreateCart(owner: CartOwner) {
  const where = owner.userId
    ? { userId: owner.userId }
    : { anonymousId: owner.anonymousId };

  let cart = await prisma.cart.findUnique({
    where,
    include: { items: true },
  });

  if (!cart) {
    cart = await prisma.cart.create({
      data: owner.userId
        ? { userId: owner.userId }
        : { anonymousId: owner.anonymousId },
      include: { items: true },
    });
  }

  return cart;
}

export async function getCart(owner: CartOwner) {
  const where = owner.userId
    ? { userId: owner.userId }
    : { anonymousId: owner.anonymousId };

  return prisma.cart.findUnique({
    where,
    include: { items: true },
  });
}

export async function addItemToCart(
  owner: CartOwner,
  productId: string,
  variant: string = "Standard",
  quantity: number = 1
) {
  const product = getProductById(productId);
  if (!product) return { error: "Product not found" };
  if (product.countInStock <= 0) return { error: "Out of stock" };

  const cart = await getOrCreateCart(owner);

  const existing = cart.items.find(
    (i) => i.productId === productId && i.variant === variant
  );
  const currentQty = existing?.quantity ?? 0;

  if (currentQty + quantity > product.countInStock) {
    return { error: `Only ${product.countInStock} available` };
  }

  if (existing) {
    const updated = await prisma.cartItem.update({
      where: { id: existing.id },
      data: { quantity: existing.quantity + quantity },
    });
    return { item: updated };
  }

  const created = await prisma.cartItem.create({
    data: {
      cartId: cart.id,
      productId,
      variant,
      quantity,
    },
  });
  return { item: created };
}

export async function updateCartItemQuantity(
  itemId: string,
  quantity: number
) {
  const item = await prisma.cartItem.findUnique({ where: { id: itemId } });
  if (!item) return { error: "Item not found" };

  const product = getProductById(item.productId);
  if (!product) return { error: "Product no longer available" };

  const clamped = Math.max(1, Math.min(quantity, product.countInStock));

  const updated = await prisma.cartItem.update({
    where: { id: itemId },
    data: { quantity: clamped },
  });
  return { item: updated };
}

export async function removeCartItem(itemId: string) {
  const item = await prisma.cartItem.findUnique({ where: { id: itemId } });
  if (!item) return { error: "Item not found" };

  await prisma.cartItem.delete({ where: { id: itemId } });
  return { success: true };
}

export async function mergeGuestCart(
  userId: string,
  anonymousId: string
) {
  const guestCart = await prisma.cart.findUnique({
    where: { anonymousId },
    include: { items: true },
  });

  if (!guestCart || guestCart.items.length === 0) {
    if (guestCart) {
      await prisma.cart.delete({ where: { id: guestCart.id } });
    }
    return;
  }

  let userCart = await prisma.cart.findUnique({
    where: { userId },
    include: { items: true },
  });

  if (!userCart) {
    // No user cart yet — reassign the guest cart
    await prisma.cart.update({
      where: { id: guestCart.id },
      data: { userId, anonymousId: null },
    });
    return;
  }

  // Merge items from guest into user cart
  for (const guestItem of guestCart.items) {
    const match = userCart.items.find(
      (i) => i.productId === guestItem.productId && i.variant === guestItem.variant
    );

    const product = getProductById(guestItem.productId);
    const maxStock = product?.countInStock ?? 99;

    if (match) {
      const merged = Math.min(match.quantity + guestItem.quantity, maxStock);
      await prisma.cartItem.update({
        where: { id: match.id },
        data: { quantity: merged },
      });
    } else {
      const qty = Math.min(guestItem.quantity, maxStock);
      await prisma.cartItem.create({
        data: {
          cartId: userCart.id,
          productId: guestItem.productId,
          variant: guestItem.variant,
          quantity: qty,
        },
      });
    }
  }

  // Delete the guest cart (cascade deletes its items)
  await prisma.cart.delete({ where: { id: guestCart.id } });
}
