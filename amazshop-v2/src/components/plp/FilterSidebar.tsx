"use client";

import type { PLPCategory } from "@/types";

interface FilterSidebarProps {
  categories: PLPCategory[];
  brands: string[];
  selectedBrands: string[];
  onBrandToggle: (brand: string) => void;
  priceRange: [number, number];
  onPriceChange: (range: [number, number]) => void;
  selectedRating: number | null;
  onRatingChange: (rating: number | null) => void;
  maxPrice?: number;
}

export default function FilterSidebar({
  categories,
  brands,
  selectedBrands,
  onBrandToggle,
  priceRange,
  onPriceChange,
  selectedRating,
  onRatingChange,
  maxPrice = 2000,
}: FilterSidebarProps) {
  const renderStars = (filled: number, total = 5) => {
    return Array.from({ length: total }, (_, i) =>
      i < filled ? "★" : "☆"
    ).join("");
  };

  return (
    <aside className="plp-sidebar">
      <div className="sticky top-28 space-y-8">
        {/* Categories */}
        <div>
          <h3 className="font-black text-sm uppercase tracking-widest mb-4">
            Categories
          </h3>
          <ul className="space-y-2 text-sm font-medium text-secondary">
            {categories.map((cat) => (
              <li
                key={cat.slug}
                className={`cursor-pointer transition-colors ${
                  cat.active
                    ? "text-accent flex items-center justify-between"
                    : "hover:text-main"
                }`}
              >
                <span>{cat.name}</span>
                {cat.active && cat.count > 0 && (
                  <span className="text-[10px] bg-accent/10 px-1.5 py-0.5 rounded">
                    {cat.count}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Brand */}
        <div>
          <h3 className="font-black text-sm uppercase tracking-widest mb-4">
            Brand
          </h3>
          <div className="space-y-3">
            {brands.map((brand) => (
              <label
                key={brand}
                className="flex items-center gap-3 text-sm font-medium cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => onBrandToggle(brand)}
                  className="w-4 h-4 rounded border-gray-300 accent-accent"
                />
                <span className="group-hover:text-accent">{brand}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h3 className="font-black text-sm uppercase tracking-widest mb-4">
            Price Range
          </h3>
          <div className="space-y-4">
            <input
              type="range"
              min={0}
              max={maxPrice}
              step={10}
              value={priceRange[1]}
              onChange={(e) =>
                onPriceChange([priceRange[0], parseInt(e.target.value)])
              }
              className="w-full accent-accent h-1 bg-main/10 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-white border border-main/10 rounded-lg p-2 text-xs font-bold">
                ${priceRange[0]}
              </div>
              <span className="text-secondary">-</span>
              <div className="flex-1 bg-white border border-main/10 rounded-lg p-2 text-xs font-bold">
                ${priceRange[1] >= maxPrice ? `${maxPrice}+` : priceRange[1]}
              </div>
            </div>
          </div>
        </div>

        {/* Ratings */}
        <div>
          <h3 className="font-black text-sm uppercase tracking-widest mb-4">
            Ratings
          </h3>
          <div className="space-y-2">
            {[4, 3].map((stars) => (
              <label
                key={stars}
                className="flex items-center gap-2 cursor-pointer hover:text-accent transition-colors"
              >
                <input
                  type="radio"
                  name="rating"
                  checked={selectedRating === stars}
                  onChange={() =>
                    onRatingChange(selectedRating === stars ? null : stars)
                  }
                  className="accent-accent"
                />
                <div className="flex text-accent">
                  {renderStars(stars)}
                  <span className="ml-2 text-xs text-secondary font-bold">
                    &amp; Up
                  </span>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
