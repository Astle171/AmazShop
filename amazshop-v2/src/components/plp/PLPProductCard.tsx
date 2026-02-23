import Link from "next/link";
import Image from "next/image";
import { HeartIcon } from "@/components/icons";
import type { Product } from "@/types";

function StarDisplay({
  rating,
  numReviews,
}: {
  rating: number;
  numReviews: number;
}) {
  const stars = Array.from({ length: 5 }, (_, i) =>
    i < Math.round(rating) ? "★" : "☆"
  ).join("");

  return (
    <div className="flex items-center gap-1 mb-3 text-accent text-xs">
      {stars}{" "}
      <span className="text-secondary font-medium">
        ({numReviews.toLocaleString()})
      </span>
    </div>
  );
}

interface PLPProductCardProps {
  product: Product;
}

export default function PLPProductCard({ product }: PLPProductCardProps) {
  return (
    <article className="group bg-white rounded-[24px] p-4 cursor-pointer hover-lift relative overflow-hidden flex flex-col">
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 left-4 z-10">
          <span
            className={`text-white text-[10px] font-bold px-2 py-1 rounded-full tracking-wide ${
              product.badge.variant === "dark" ? "bg-main" : "bg-accent"
            }`}
          >
            {product.badge.text}
          </span>
        </div>
      )}

      {/* Wishlist button */}
      <button className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur text-main flex items-center justify-center hover:bg-accent hover:text-white transition-colors opacity-100 md:opacity-0 md:group-hover:opacity-100">
        <HeartIcon size={16} />
      </button>

      {/* Product image area */}
      <Link href={`/product/${product._id}`}>
        <div className="h-56 rounded-2xl bg-bg-light mb-4 flex items-center justify-center relative overflow-hidden">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="w-24 h-24 bg-main/10 rounded-full" />
          )}
        </div>
      </Link>

      {/* Product info */}
      <div className="flex-1 flex flex-col">
        <div className="text-[10px] font-black tracking-widest text-accent uppercase mb-1">
          {product.brand}
        </div>
        <Link href={`/product/${product._id}`}>
          <h3 className="font-bold text-lg mb-1 group-hover:text-accent transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <StarDisplay rating={product.rating} numReviews={product.numReviews} />
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-black text-xl">
              ${product.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through decoration-red-500">
                ${product.originalPrice.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </span>
            )}
          </div>
          <button className="w-10 h-10 bg-main text-white rounded-full flex items-center justify-center hover:bg-accent transition-colors text-lg font-bold">
            +
          </button>
        </div>
      </div>
    </article>
  );
}
