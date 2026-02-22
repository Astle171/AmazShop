"use client";

export interface FilterTag {
  key: string;
  label: string;
  type: "brand" | "tag";
}

interface ActiveFiltersProps {
  filters: FilterTag[];
  onRemove: (filter: FilterTag) => void;
  onClearAll: () => void;
}

export default function ActiveFilters({
  filters,
  onRemove,
  onClearAll,
}: ActiveFiltersProps) {
  if (filters.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 mb-8">
      {filters.map((filter) => (
        <div
          key={filter.key}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold ${
            filter.type === "brand"
              ? "bg-main text-white"
              : "bg-white border border-main/10 text-main"
          }`}
        >
          {filter.label}
          <button
            onClick={() => onRemove(filter)}
            className={
              filter.type === "brand" ? "hover:text-accent" : "text-accent"
            }
          >
            ✕
          </button>
        </div>
      ))}
      <button
        onClick={onClearAll}
        className="text-xs font-bold text-accent hover:underline ml-2"
      >
        Clear All
      </button>
    </div>
  );
}
