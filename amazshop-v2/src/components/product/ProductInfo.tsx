"use client";

import { useState } from "react";
import StarRating from "@/components/common/StarRating";
import { ShoppingBagIcon } from "@/components/icons";
import type { ProductDetail } from "@/types";

interface ProductInfoProps {
  product: ProductDetail;
}

function ShippingIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
      <rect x="1" y="3" width="15" height="13" />
      <path d="M16 8l4 4-4 4" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [selectedFinish, setSelectedFinish] = useState(
    product.finishes.findIndex((f) => f.active) ?? 0
  );
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants.findIndex((v) => v.active) ?? 0
  );

  return (
    <div className="pdp-info-inner">
      {/* Rating */}
      <div className="mb-2 flex items-center gap-2">
        <StarRating rating={product.rating} />
        <span className="text-xs font-bold text-secondary">
          {product.rating} ({product.numReviews} reviews)
        </span>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-black mb-4 leading-none tracking-tight">
        {product.name}
      </h1>
      <p className="text-secondary text-lg mb-8">{product.description}</p>

      {/* Price */}
      <div className="flex items-baseline gap-4 mb-10">
        <span className="text-4xl font-black">
          ${product.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
        </span>
        {product.originalPrice && (
          <span className="text-lg text-secondary/50 line-through font-bold">
            ${product.originalPrice.toLocaleString("en-US", { minimumFractionDigits: 2 })}
          </span>
        )}
      </div>

      {/* Variants */}
      <div className="space-y-8 mb-10">
        {/* Finish selector */}
        {product.finishes.length > 0 && (
          <div>
            <span className="block text-[10px] font-black uppercase text-secondary tracking-widest mb-4">
              Select Finish
            </span>
            <div className="flex gap-3">
              {product.finishes.map((finish, i) => (
                <button
                  key={finish.name}
                  onClick={() => setSelectedFinish(i)}
                  className={`w-12 h-12 rounded-full border-4 border-white shadow-md transition-transform hover:scale-110 ${
                    selectedFinish === i
                      ? "ring-2 ring-accent shadow-lg shadow-black/10"
                      : ""
                  }`}
                  style={{ backgroundColor: finish.hex }}
                  title={finish.name}
                />
              ))}
            </div>
          </div>
        )}

        {/* Edition selector */}
        {product.variants.length > 0 && (
          <div>
            <span className="block text-[10px] font-black uppercase text-secondary tracking-widest mb-4">
              Edition
            </span>
            <div className="flex flex-wrap gap-3">
              {product.variants.map((variant, i) => (
                <button
                  key={variant.name}
                  onClick={() => setSelectedVariant(i)}
                  className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all ${
                    selectedVariant === i
                      ? "bg-main text-white shadow-xl"
                      : "bg-white text-main border border-main/10 hover:border-accent"
                  }`}
                >
                  {variant.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col gap-4">
        <button className="w-full bg-main text-white h-16 rounded-2xl font-black text-lg tracking-wide hover:bg-accent shadow-xl shadow-black/10 transition-all flex items-center justify-center gap-3">
          ADD TO CART
          <ShoppingBagIcon />
        </button>
        <button className="w-full bg-white border border-main/10 text-main h-16 rounded-2xl font-black text-sm tracking-widest uppercase hover:border-accent transition-all">
          Buy it now
        </button>
      </div>

      {/* Trust badges */}
      <div className="mt-8 flex items-center justify-center gap-8 py-6 border-t border-main/5">
        <div className="flex items-center gap-2 text-xs font-bold text-secondary">
          <ShippingIcon className="text-accent" />
          Free Shipping
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-secondary">
          <ShieldIcon className="text-accent" />
          2 Year Warranty
        </div>
      </div>
    </div>
  );
}
