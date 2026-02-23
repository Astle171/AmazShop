"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { getRecommendedProducts } from "@/data/cart-data";
import { getProductById } from "@/lib/product-lookup";

function ProductIcon({ category }: { category: string }) {
  if (category === "watches") {
    return (
      <svg
        className="w-12 h-12 text-main opacity-20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="7" />
        <polyline points="12 9 12 12 13.5 13.5" />
      </svg>
    );
  }
  return (
    <svg
      className="w-12 h-12 text-main opacity-20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
}

interface RecommendedProductsProps {
  excludeProductIds?: string[];
}

export default function RecommendedProducts({
  excludeProductIds = [],
}: RecommendedProductsProps) {
  const { addItem, items } = useCart();
  const cartProductIds = items.map((i) => i.productId);
  const products = getRecommendedProducts(
    [...new Set([...excludeProductIds, ...cartProductIds])],
    4
  );

  const handleQuickAdd = (e: React.MouseEvent, productId: string) => {
    e.preventDefault();
    e.stopPropagation();
    const product = getProductById(productId);
    if (!product || product.countInStock <= 0) return;
    addItem({ productId, variant: "Standard", quantity: 1 });
  };

  if (products.length === 0) return null;

  return (
    <section className="mt-20">
      <h2 className="text-2xl font-black mb-8">People also bought</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            key={product._id}
            href={`/product/${product._id}`}
            className="bg-white rounded-3xl p-4 hover-lift cursor-pointer group block"
          >
            <div className="h-40 bg-bg-light rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  width={160}
                  height={160}
                  className="w-full h-full object-contain p-4"
                />
              ) : (
                <ProductIcon category={product.category} />
              )}
            </div>
            <h4 className="font-bold text-sm">{product.name}</h4>
            <p className="text-xs text-secondary mb-2">
              ${product.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </p>
            <button
              type="button"
              onClick={(e) => handleQuickAdd(e, product._id)}
              disabled={product.countInStock <= 0}
              className="text-xs font-black text-accent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity disabled:opacity-50 min-h-[44px] touch-manipulation"
            >
              + QUICK ADD
            </button>
          </Link>
        ))}
      </div>
    </section>
  );
}
