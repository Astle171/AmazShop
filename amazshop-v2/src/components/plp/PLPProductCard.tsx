"use client";

import Link from "next/link";
import Image from "next/image";
import { HeartIcon } from "@/components/icons";
import { useCart } from "@/context/CartContext";
import { addToPLPSession, isInPLPSession } from "@/lib/plp-session";
import type { Product } from "@/types";

function StarDisplay({
  rating,
  numReviews,
}: {
  rating: number;
  numReviews: number;
}) {
  const stars = Array.from({ length: 5 }, (_, i) =>
    i < Math.round(rating) ? "★" : "☆"
  ).join("");

  return (
    <div className="flex items-center gap-1 mb-3 text-accent text-xs">
      {stars}{" "}
      <span className="text-secondary font-medium">
        ({numReviews.toLocaleString()})
      </span>
    </div>
  );
}

interface PLPProductCardProps {
  product: Product;
}

export default function PLPProductCard({ product }: PLPProductCardProps) {
  const { addItem, removeItem, updateQuantity, items } = useCart();

  const cartItem = items.find(
    (i) => i.productId === product._id && i.variant === "Standard"
  );
  const inCartQty = cartItem?.quantity ?? 0;
  const isInCart = inCartQty > 0;
  const canAddMore = inCartQty < product.countInStock;
  const showStepper = isInPLPSession(product._id) && isInCart;

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (product.countInStock <= 0) return;
    if (isInCart && cartItem) {
      updateQuantity(cartItem.id, inCartQty + 1);
    } else {
      addItem({ productId: product._id, variant: "Standard", quantity: 1 });
    }
    addToPLPSession(product._id);
  };

  const handleDecrement = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!cartItem) return;
    if (inCartQty <= 1) {
      removeItem(cartItem.id);
    } else {
      updateQuantity(cartItem.id, inCartQty - 1);
    }
  };

  return (
    <article className="group bg-white rounded-[24px] p-4 cursor-pointer hover-lift relative overflow-hidden flex flex-col">
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 left-4 z-10">
          <span
            className={`text-white text-[10px] font-bold px-2 py-1 rounded-full tracking-wide ${
              product.badge.variant === "dark" ? "bg-main" : "bg-accent"
            }`}
          >
            {product.badge.text}
          </span>
        </div>
      )}

      {/* Wishlist button */}
      <button className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur text-main flex items-center justify-center hover:bg-accent hover:text-white transition-colors opacity-100 md:opacity-0 md:group-hover:opacity-100">
        <HeartIcon size={16} />
      </button>

      {/* Product image area */}
      <Link href={`/product/${product._id}`}>
        <div className="h-56 rounded-2xl bg-bg-light mb-4 flex items-center justify-center relative overflow-hidden">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="w-24 h-24 bg-main/10 rounded-full" />
          )}
        </div>
      </Link>

      {/* Product info */}
      <div className="flex-1 flex flex-col">
        <div className="text-[10px] font-black tracking-widest text-accent uppercase mb-1">
          {product.brand}
        </div>
        <Link href={`/product/${product._id}`}>
          <h3 className="font-bold text-lg mb-1 group-hover:text-accent transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <StarDisplay rating={product.rating} numReviews={product.numReviews} />
        <div className="mt-auto space-y-3">
          <div className="flex items-baseline gap-2">
            <span className="font-black text-xl">
              ${product.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-secondary line-through">
                ${product.originalPrice.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </span>
            )}
          </div>
          <div className="flex items-center justify-end">
          {showStepper ? (
            <div
              className="flex items-center bg-bg rounded-full p-1 shrink-0"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={handleDecrement}
                className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white transition-colors stepper-btn text-main"
                aria-label="Decrease quantity"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>
              <span className="w-8 text-center font-bold text-sm text-main">
                {inCartQty}
              </span>
              <button
                type="button"
                onClick={handleAdd}
                disabled={!canAddMore}
                className="w-9 h-9 rounded-full bg-main text-white flex items-center justify-center shadow-md stepper-btn disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Increase quantity"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={handleAdd}
              disabled={product.countInStock <= 0}
              className="w-10 h-10 bg-main text-white rounded-full flex items-center justify-center hover:bg-accent transition-colors text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
              aria-label="Add to cart"
            >
              +
            </button>
          )}
          </div>
        </div>
      </div>
    </article>
  );
}
