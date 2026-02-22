import Link from "next/link";
import Image from "next/image";
import { HeartIcon } from "@/components/icons";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group bg-white rounded-3xl p-4 cursor-pointer hover-lift relative overflow-hidden h-full flex flex-col">
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
      <button className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur text-main flex items-center justify-center hover:bg-accent hover:text-white transition-colors opacity-0 group-hover:opacity-100">
        <HeartIcon size={16} />
      </button>

      {/* Product image area */}
      <Link href={`/product/${product._id}`}>
        <div className="h-64 rounded-2xl bg-bg-light mb-4 flex items-center justify-center relative overflow-hidden">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          ) : (
            <div className="w-24 h-24 bg-main/10 rounded-full" />
          )}

          {/* Add to Cart overlay */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center card-reveal-btn px-4">
            <button className="w-full py-3 bg-main text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-xl hover:bg-accent transition-colors flex items-center justify-center gap-2">
              <span>Add to Cart</span>
              <span>+</span>
            </button>
          </div>
        </div>
      </Link>

      {/* Product info */}
      <div className="flex-1 flex flex-col">
        <div className="mb-1 text-xs font-bold text-accent uppercase">
          {product.brand}
        </div>
        <Link href={`/product/${product._id}`}>
          <h3 className="font-bold text-lg mb-1 group-hover:text-accent transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-secondary mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-black text-lg">
              ${product.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through decoration-red-500">
                ${product.originalPrice.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </span>
            )}
          </div>
          {product.colors && product.colors.length > 0 && (
            <div className="flex gap-1">
              {product.colors.map((color) => (
                <div
                  key={color.name}
                  className="w-3 h-3 rounded-full border border-gray-200"
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
