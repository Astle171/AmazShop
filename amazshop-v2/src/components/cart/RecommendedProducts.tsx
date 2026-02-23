"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useCallback, useRef, useEffect } from "react";
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

function QuickAddButton({ productId }: { productId: string }) {
  const { addItem } = useCart();
  const [state, setState] = useState<"idle" | "adding" | "added">("idle");

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (state !== "idle") return;
      const product = getProductById(productId);
      if (!product || product.countInStock <= 0) return;

      setState("adding");
      addItem({ productId, variant: "Standard", quantity: 1 });

      setTimeout(() => setState("added"), 400);
      setTimeout(() => setState("idle"), 1800);
    },
    [productId, addItem, state]
  );

  const outOfStock = (getProductById(productId)?.countInStock ?? 0) <= 0;

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={outOfStock}
      className={`w-full mt-3 h-10 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all duration-300 touch-manipulation ${
        state === "added"
          ? "bg-emerald-500 text-white scale-[0.97]"
          : state === "adding"
          ? "bg-main text-white scale-95"
          : "bg-main/5 text-main hover:bg-main hover:text-white active:scale-95"
      } disabled:opacity-40 disabled:cursor-not-allowed`}
    >
      {state === "adding" ? (
        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      ) : state === "added" ? (
        <>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
          </svg>
          Added
        </>
      ) : (
        <>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          Add to Bag
        </>
      )}
    </button>
  );
}

interface RecommendedProductsProps {
  excludeProductIds?: string[];
}

export default function RecommendedProducts({
  excludeProductIds = [],
}: RecommendedProductsProps) {
  const { items } = useCart();
  const cartProductIds = items.map((i) => i.productId);
  const products = getRecommendedProducts(
    [...new Set([...excludeProductIds, ...cartProductIds])],
    10
  );

  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll, products.length]);

  const scroll = useCallback((dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const distance = card ? card.offsetWidth + 16 : 240;
    el.scrollBy({ left: dir === "left" ? -distance * 2 : distance * 2, behavior: "smooth" });
  }, []);

  if (products.length === 0) return null;

  return (
    <section className="mt-12 md:mt-20">
      <h2 className="text-xl md:text-2xl font-black mb-5 md:mb-6">Recommended for you</h2>

      <div className="relative">
        {canScrollLeft && (
          <>
            <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
            <button
              onClick={() => scroll("left")}
              className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-main/10 shadow-lg items-center justify-center hover:bg-main hover:text-white hover:border-main transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
          </>
        )}
        {canScrollRight && (
          <>
            <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />
            <button
              onClick={() => scroll("right")}
              className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-main/10 shadow-lg items-center justify-center hover:bg-main hover:text-white hover:border-main transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          </>
        )}

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0"
        >
          {products.map((product) => (
            <Link
              key={product._id}
              data-card
              href={`/product/${product._id}`}
              className="bg-white rounded-2xl md:rounded-3xl p-3 md:p-4 hover-lift cursor-pointer group block shrink-0 w-[45%] sm:w-[calc((100%-3*1rem)/4)] snap-start"
            >
              <div className="h-32 sm:h-40 bg-bg-light rounded-xl md:rounded-2xl mb-3 md:mb-4 flex items-center justify-center overflow-hidden">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={160}
                    height={160}
                    className="w-full h-full object-contain p-3 md:p-4"
                  />
                ) : (
                  <ProductIcon category={product.category} />
                )}
              </div>
              <h4 className="font-bold text-xs sm:text-sm truncate">{product.name}</h4>
              <p className="text-xs text-secondary">
                ${product.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </p>
              <QuickAddButton productId={product._id} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
