"use client";

import { Suspense, useState, useMemo, useCallback, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import FilterSidebar from "@/components/plp/FilterSidebar";
import ActiveFilters, { type FilterTag } from "@/components/plp/ActiveFilters";
import PLPProductCard from "@/components/plp/PLPProductCard";
import Pagination from "@/components/plp/Pagination";
import { searchProducts } from "@/lib/api/products";
import type { Product, PLPCategory } from "@/types";

const ITEMS_PER_PAGE = 12;

const SORT_OPTIONS = [
  "Recommended",
  "Price: Low to High",
  "Price: High to Low",
  "Top Rated",
];

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="flex gap-8">
          <div className="w-[260px] shrink-0 hidden lg:block" />
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-[24px] p-4 animate-pulse">
                <div className="h-56 rounded-2xl bg-gray-100 mb-4" />
                <div className="h-3 w-16 bg-gray-100 rounded mb-2" />
                <div className="h-5 w-3/4 bg-gray-100 rounded mb-3" />
                <div className="h-6 w-20 bg-gray-100 rounded" />
              </div>
            ))}
          </div>
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const categoryParam = searchParams.get("category") || "";

  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [brands, setBrands] = useState<string[]>([]);
  const [categories, setCategories] = useState<PLPCategory[]>([]);

  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState(SORT_OPTIONS[0]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    async function load() {
      try {
        const { products } = await searchProducts({
          query: query || undefined,
          category: categoryParam || undefined,
        });
        if (cancelled) return;

        setAllProducts(products);

        const uniqueBrands = [...new Set(products.map((p) => p.brand).filter(Boolean))].sort();
        setBrands(uniqueBrands);

        const catCounts = new Map<string, number>();
        products.forEach((p) => {
          catCounts.set(p.category, (catCounts.get(p.category) || 0) + 1);
        });
        setCategories(
          [...catCounts.entries()].map(([slug, count]) => ({
            name: slug.charAt(0).toUpperCase() + slug.slice(1),
            slug,
            count,
            active: slug === categoryParam || !categoryParam,
          }))
        );

        const maxPrice = Math.max(...products.map((p) => p.price), 500);
        setPriceRange([0, Math.ceil(maxPrice / 100) * 100]);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => { cancelled = true; };
  }, [query, categoryParam]);

  const maxPriceSlider = useMemo(() => {
    if (allProducts.length === 0) return 2000;
    return Math.ceil(Math.max(...allProducts.map((p) => p.price)) / 100) * 100;
  }, [allProducts]);

  const filteredProducts = useMemo(() => {
    let products = [...allProducts];

    if (selectedBrands.length > 0) {
      products = products.filter((p) => selectedBrands.includes(p.brand));
    }

    if (activeTags.length > 0) {
      products = products.filter((p) =>
        activeTags.every((tag) => p.tags?.includes(tag))
      );
    }

    if (selectedRating !== null) {
      products = products.filter((p) => p.rating >= selectedRating);
    }

    products = products.filter((p) => {
      if (p.price < priceRange[0]) return false;
      if (priceRange[1] < maxPriceSlider && p.price > priceRange[1]) return false;
      return true;
    });

    if (sortBy === "Price: Low to High") {
      products.sort((a, b) => a.price - b.price);
    } else if (sortBy === "Price: High to Low") {
      products.sort((a, b) => b.price - a.price);
    } else if (sortBy === "Top Rated") {
      products.sort((a, b) => b.rating - a.rating);
    }

    return products;
  }, [allProducts, selectedBrands, activeTags, selectedRating, priceRange, sortBy, maxPriceSlider]);

  const totalResults = filteredProducts.length;
  const totalPages = Math.max(1, Math.ceil(totalResults / ITEMS_PER_PAGE));

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedBrands, activeTags, selectedRating, priceRange, sortBy]);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const showingStart = totalResults === 0 ? 0 : (currentPage - 1) * ITEMS_PER_PAGE + 1;
  const showingEnd = Math.min(currentPage * ITEMS_PER_PAGE, totalResults);

  const filterTags: FilterTag[] = useMemo(() => {
    const tags: FilterTag[] = [];
    selectedBrands.forEach((brand) =>
      tags.push({ key: `brand-${brand}`, label: brand, type: "brand" })
    );
    activeTags.forEach((tag) =>
      tags.push({ key: `tag-${tag}`, label: tag, type: "tag" })
    );
    return tags;
  }, [selectedBrands, activeTags]);

  const handleBrandToggle = useCallback((brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  }, []);

  const handleRemoveFilter = useCallback((filter: FilterTag) => {
    if (filter.type === "brand") {
      setSelectedBrands((prev) => prev.filter((b) => b !== filter.label));
    } else {
      setActiveTags((prev) => prev.filter((t) => t !== filter.label));
    }
  }, []);

  const handleClearAll = useCallback(() => {
    setSelectedBrands([]);
    setActiveTags([]);
    setSelectedRating(null);
    setPriceRange([0, maxPriceSlider]);
  }, [maxPriceSlider]);

  const title = query
    ? `Results for "${query}"`
    : categoryParam
      ? categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1)
      : "All Products";

  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="flex gap-4 lg:gap-8">
      <FilterSidebar
        categories={categories}
        brands={brands}
        selectedBrands={selectedBrands}
        onBrandToggle={handleBrandToggle}
        priceRange={priceRange}
        onPriceChange={setPriceRange}
        selectedRating={selectedRating}
        onRatingChange={setSelectedRating}
        maxPrice={maxPriceSlider}
        isOpen={filterOpen}
        onClose={() => setFilterOpen(false)}
      />

      <section className="flex-1 min-w-0">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-black tracking-tight mb-1">{title}</h1>
            <p className="text-sm text-secondary">
              {loading
                ? "Loading products…"
                : totalResults === 0
                  ? "No results found"
                  : `Showing ${showingStart}–${showingEnd} of ${totalResults} results`}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 h-10 px-4 bg-white border border-main/10 rounded-xl text-sm font-bold hover:border-accent transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>
              Filters
            </button>
          <div className="flex items-center gap-3 bg-white border border-main/5 p-1 rounded-xl">
            <span className="text-xs font-bold text-secondary pl-3">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-sm font-bold outline-none pr-4 py-2 cursor-pointer"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </div>
          </div>
        </div>

        {/* Active Filters */}
        <ActiveFilters
          filters={filterTags}
          onRemove={handleRemoveFilter}
          onClearAll={handleClearAll}
        />

        {/* Loading skeleton */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-[24px] p-4 animate-pulse">
                <div className="h-56 rounded-2xl bg-bg-light mb-4" />
                <div className="h-3 w-16 bg-bg-light rounded mb-2" />
                <div className="h-5 w-3/4 bg-bg-light rounded mb-3" />
                <div className="h-3 w-24 bg-bg-light rounded mb-4" />
                <div className="flex justify-between">
                  <div className="h-6 w-20 bg-bg-light rounded" />
                  <div className="h-10 w-10 bg-bg-light rounded-full" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Product Grid */}
        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedProducts.map((product) => (
              <PLPProductCard key={product._id} product={product} />
            ))}
          </div>
        )}

        {!loading && totalResults === 0 && (
          <div className="text-center py-20">
            <p className="text-secondary text-lg font-medium">
              No products match your filters.
            </p>
            <button
              onClick={handleClearAll}
              className="mt-4 text-accent font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {!loading && totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </section>
    </div>
  );
}
