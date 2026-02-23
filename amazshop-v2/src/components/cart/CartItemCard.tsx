"use client";

import Image from "next/image";
import Link from "next/link";
import type { CartItem } from "@/data/cart-data";
import { getProductById } from "@/lib/product-lookup";

function ProductIcon({ category }: { category: string }) {
  if (category === "audio") {
    return (
      <svg
        className="w-24 h-24 text-main opacity-80"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    );
  }
  if (category === "watches") {
    return (
      <svg
        className="w-24 h-24 text-main opacity-80"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <circle cx="12" cy="12" r="7" />
        <polyline points="12 9 12 12 13.5 13.5" />
      </svg>
    );
  }
  return (
    <svg
      className="w-24 h-24 text-main opacity-80"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12" y2="18" />
    </svg>
  );
}

interface CartItemCardProps {
  item: CartItem;
  onRemove: () => void;
  onSaveForLater: () => void;
  onQuantityChange: (quantity: number) => void;
}

export default function CartItemCard({
  item,
  onRemove,
  onSaveForLater,
  onQuantityChange,
}: CartItemCardProps) {
  const product = getProductById(item.productId);

  if (!product) {
    return (
      <div className="bg-white rounded-[32px] p-6 flex items-center justify-between">
        <p className="text-secondary">Product no longer available</p>
        <button
          type="button"
          onClick={onRemove}
          className="text-sm font-bold text-red-500 hover:underline"
        >
          Remove
        </button>
      </div>
    );
  }

  const maxQty = product.countInStock;
  const canIncrease = item.quantity < maxQty;

  return (
    <div className="bg-white rounded-[32px] p-6 flex flex-col md:flex-row gap-8 hover-lift">
      <Link
        href={`/product/${product._id}`}
        className="w-full md:w-48 h-48 bg-bg-light rounded-2xl flex items-center justify-center relative group shrink-0 overflow-hidden"
      >
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            width={192}
            height={192}
            className="w-full h-full object-contain p-4"
          />
        ) : (
          <ProductIcon category={product.category} />
        )}
      </Link>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-2">
            <Link href={`/product/${product._id}`}>
              <h3 className="text-xl font-bold hover:text-accent transition-colors">
                {product.name}
              </h3>
            </Link>
            <span className="font-black text-xl">
              ${product.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </span>
          </div>
          <p className="text-sm text-accent font-bold mb-4">{item.variant}</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-bg rounded-full p-1">
              <button
                type="button"
                onClick={() => onQuantityChange(item.quantity - 1)}
                disabled={item.quantity <= 1}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white transition-all stepper-btn disabled:opacity-50 disabled:cursor-not-allowed"
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
              <span className="w-10 text-center font-bold text-sm">
                {item.quantity}
              </span>
              <button
                type="button"
                onClick={() => canIncrease && onQuantityChange(item.quantity + 1)}
                disabled={!canIncrease}
                className="w-8 h-8 rounded-full bg-main text-white flex items-center justify-center shadow-md stepper-btn disabled:opacity-50 disabled:cursor-not-allowed"
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
            <span className="text-xs text-secondary font-medium">
              {maxQty > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-6 mt-6 md:mt-0">
          <button
            type="button"
            onClick={onRemove}
            className="text-sm font-bold text-secondary hover:text-red-500 transition-colors flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
            Remove
          </button>
          <button
            type="button"
            onClick={onSaveForLater}
            className="text-sm font-bold text-secondary hover:text-accent transition-colors flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            Save for later
          </button>
        </div>
      </div>
    </div>
  );
}
