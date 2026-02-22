"use client";

import { useState } from "react";
import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";
import type { Product } from "@/types";

interface TrendingSectionProps {
  products: Product[];
}

const FILTERS = ["All", "New", "Sale"] as const;

export default function TrendingSection({ products }: TrendingSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredProducts =
    activeFilter === "All"
      ? products
      : activeFilter === "New"
        ? products.filter((p) => p.badge?.text === "NEW")
        : products.filter((p) => p.originalPrice !== undefined);

  const displayProducts = filteredProducts.length > 0 ? filteredProducts : products;

  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-6">
          <h2 className="text-2xl font-bold">Trending Now</h2>
          <div className="hidden md:flex bg-white rounded-full p-1 border border-main/10">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${
                  activeFilter === filter
                    ? "bg-main text-white shadow-md"
                    : "text-secondary hover:text-main"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <Link
          href="/search"
          className="text-sm font-bold text-accent hover:text-main transition-colors"
        >
          View All Products →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {displayProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
}
