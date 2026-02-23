"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const getVisiblePages = (): (number | "ellipsis")[] => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: (number | "ellipsis")[] = [1];

    if (currentPage > 3) {
      pages.push("ellipsis");
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push("ellipsis");
    }

    pages.push(totalPages);
    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="mt-8 md:mt-12 flex justify-center items-center gap-2 overflow-x-auto max-w-full py-2">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="w-10 h-10 rounded-full border border-main/10 flex items-center justify-center hover:bg-main hover:text-white transition-colors disabled:opacity-30 disabled:pointer-events-none"
      >
        <ChevronLeftIcon />
      </button>

      {visiblePages.map((page, i) =>
        page === "ellipsis" ? (
          <span key={`ellipsis-${i}`} className="px-2 text-secondary">
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 rounded-full text-sm font-bold transition-colors ${
              page === currentPage
                ? "bg-accent text-white"
                : "hover:bg-white"
            }`}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="w-10 h-10 rounded-full border border-main/10 flex items-center justify-center hover:bg-main hover:text-white transition-colors disabled:opacity-30 disabled:pointer-events-none"
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
}
