import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon, getCategoryIcon } from "@/components/icons";
import type { Category } from "@/types";

interface CategorySectionProps {
  categories: Category[];
}

export default function CategorySection({ categories }: CategorySectionProps) {
  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Shop by Category</h2>
        <div className="flex gap-2">
          <button className="w-8 h-8 rounded-full border border-main/10 flex items-center justify-center hover:bg-main hover:text-white transition-colors">
            <ChevronLeftIcon />
          </button>
          <button className="w-8 h-8 rounded-full border border-main/10 flex items-center justify-center hover:bg-main hover:text-white transition-colors">
            <ChevronRightIcon />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => {
          const Icon = getCategoryIcon(category.icon);
          return (
            <Link
              key={category.slug}
              href={`/search?category=${category.slug}`}
              className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white border border-transparent hover:border-accent/30 hover:shadow-lg hover:shadow-orange-500/5 transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-bg flex items-center justify-center text-main group-hover:bg-accent group-hover:text-white transition-colors">
                <Icon />
              </div>
              <span className="font-bold text-sm">{category.name}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
