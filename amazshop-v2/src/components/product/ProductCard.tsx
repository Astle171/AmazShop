"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback } from "react";
import { HeartIcon } from "@/components/icons";
import { useCart } from "@/context/CartContext";
import { addToPLPSession, isInPLPSession } from "@/lib/plp-session";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem, removeItem, updateQuantity, items } = useCart();

  const cartItem = items.find(
    (i) => i.productId === product._id && i.variant === "Standard"
  );
  const inCartQty = cartItem?.quantity ?? 0;
  const isInCart = inCartQty > 0;
  const canAddMore = inCartQty < product.countInStock;
  const showStepper = isInPLPSession(product._id) && isInCart;

  const handleAdd = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (product.countInStock <= 0) return;
      addItem({ productId: product._id, variant: "Standard", quantity: 1 });
      addToPLPSession(product._id);
    },
    [product, addItem]
  );

  const handleDecrement = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (!cartItem) return;
      if (inCartQty <= 1) {
        removeItem(cartItem.id);
      } else {
        updateQuantity(cartItem.id, inCartQty - 1);
      }
    },
    [cartItem, inCartQty, removeItem, updateQuantity]
  );

  return (
    <article className="group bg-white rounded-3xl p-4 cursor-pointer hover-lift relative overflow-hidden h-full flex flex-col">
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

      <button className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur text-main flex items-center justify-center hover:bg-accent hover:text-white transition-colors opacity-100 md:opacity-0 md:group-hover:opacity-100">
        <HeartIcon size={16} />
      </button>

      <Link href={`/product/${product._id}`}>
        <div className="h-64 rounded-2xl bg-bg-light mb-4 flex items-center justify-center relative overflow-hidden">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          ) : (
            <div className="w-24 h-24 bg-main/10 rounded-full" />
          )}
        </div>
      </Link>

      <div className="flex-1 flex flex-col">
        <div className="mb-1 text-xs font-bold text-accent uppercase">
          {product.brand}
        </div>
        <Link href={`/product/${product._id}`}>
          <h3 className="font-bold text-lg mb-1 group-hover:text-accent transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-secondary mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="mt-auto space-y-3">
          <div className="flex items-baseline gap-2">
            <span className="font-black text-lg">
              ${product.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-secondary line-through">
                ${product.originalPrice.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </span>
            )}
          </div>
          <div className="flex items-center justify-between gap-3">
            {product.colors && product.colors.length > 0 && (
              <div className="flex gap-1 shrink-0">
                {product.colors.map((color) => (
                  <div
                    key={color.name}
                    className="w-4 h-4 rounded-full border border-gray-200"
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            )}
            <div className="ml-auto shrink-0 relative h-10 w-[120px]">
              <div
                onClick={(e) => e.stopPropagation()}
                style={{
                  width: showStepper ? 120 : 40,
                  transition:
                    "width 0.4s cubic-bezier(0.32, 0.72, 0, 1), background-color 0.3s ease",
                }}
                className={`absolute right-0 top-0 h-10 rounded-full overflow-hidden ${
                  showStepper ? "bg-bg" : "bg-main"
                }`}
              >
                {showStepper ? (
                  <div className="flex items-center h-full p-1">
                    <button
                      type="button"
                      onClick={handleDecrement}
                      className="w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-main hover:bg-white transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </button>
                    <span className="flex-1 text-center font-bold text-sm text-main tabular-nums">
                      {inCartQty}
                    </span>
                    <button
                      type="button"
                      onClick={handleAdd}
                      disabled={!canAddMore}
                      className="w-8 h-8 shrink-0 rounded-full bg-main text-white flex items-center justify-center shadow-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Increase quantity"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
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
                    className="w-10 h-10 flex items-center justify-center text-white cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                    aria-label="Add to cart"
                  >
                    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
