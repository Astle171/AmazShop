import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, PlusIcon } from "@/components/icons";
import type { Product } from "@/types";

interface HeroBentoProps {
  heroProduct: Product & { images: string[] };
  dealProduct: Product & { images: string[] };
  newArrivals: (Product & { images: string[] })[];
}

export default function HeroBento({
  heroProduct,
  dealProduct,
  newArrivals,
}: HeroBentoProps) {
  const discountPct = dealProduct.originalPrice
    ? Math.round(
        ((dealProduct.originalPrice - dealProduct.price) /
          dealProduct.originalPrice) *
          100
      )
    : 0;

  return (
    <section className="bento-grid mb-16">
      {/* Main Hero — flagship product */}
      <div className="col-span-12 lg:col-span-8 row-span-2 bg-white rounded-2xl md:rounded-[32px] p-5 md:p-8 lg:p-12 relative overflow-hidden flex flex-col justify-center shadow-sm hover-lift group">
        <div className="relative z-10 max-w-lg">
          <span className="inline-block px-3 py-1 bg-orange-100 text-accent text-xs font-bold tracking-widest uppercase rounded-full mb-4 md:mb-6">
            Flagship Collection
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] mb-4 md:mb-6 tracking-tight">
            {heroProduct.brand}
            <br />
            <span className="text-accent">{heroProduct.name.replace(heroProduct.brand, "").trim() || heroProduct.name}</span>
          </h1>
          <p className="text-base md:text-lg text-secondary mb-4 leading-relaxed max-w-sm">
            {heroProduct.description || "Premium quality. Stunning design. Built for the future."}
          </p>

          {/* Mobile product image */}
          <div className="md:hidden w-full h-48 relative my-4">
            <Image
              src={heroProduct.images[0]}
              alt={heroProduct.name}
              fill
              className="object-contain drop-shadow-2xl"
              sizes="(max-width: 768px) 100vw, 300px"
              priority
            />
          </div>

          <div className="flex items-baseline gap-3 mb-6 md:mb-8">
            <span className="text-2xl md:text-3xl font-black">
              ${heroProduct.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </span>
            {heroProduct.originalPrice && (
              <span className="text-base md:text-lg text-secondary/50 line-through">
                ${heroProduct.originalPrice.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </span>
            )}
          </div>
          <div className="flex items-center gap-4">
            <Link
              href={`/product/${heroProduct._id}`}
              className="bg-main text-white h-12 px-6 md:px-8 rounded-full font-bold text-sm tracking-wide hover:bg-accent hover:shadow-lg hover:shadow-orange-500/20 transition-all flex items-center gap-2"
            >
              SHOP NOW
              <ArrowRightIcon />
            </Link>
            <Link
              href="/search"
              className="text-main font-bold text-sm border-b-2 border-transparent hover:border-main transition-all hidden sm:inline"
            >
              View All Products
            </Link>
          </div>
        </div>

        {/* Desktop product image */}
        <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none hidden md:block">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-bg rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
          <div className="absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 w-[300px] h-[350px] transition-transform duration-700 ease-out group-hover:scale-105 group-hover:rotate-1">
            <Image
              src={heroProduct.images[0]}
              alt={heroProduct.name}
              fill
              className="object-contain drop-shadow-2xl"
              sizes="300px"
              priority
            />
          </div>
        </div>
      </div>

      {/* Featured Deal (dark card) */}
      <Link
        href={`/product/${dealProduct._id}`}
        className="col-span-12 md:col-span-6 lg:col-span-4 bg-main rounded-2xl md:rounded-[32px] p-5 md:p-8 text-white relative overflow-hidden flex flex-col justify-between min-h-[240px] md:min-h-[280px] hover-lift group"
      >
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-4">
            <span className="text-xs font-bold text-white/60 tracking-widest uppercase border border-white/20 px-2 py-1 rounded">
              Limited Offer
            </span>
            {discountPct > 0 && (
              <div className="bg-accent text-white text-xs font-bold px-2 py-1 rounded">
                -{discountPct}%
              </div>
            )}
          </div>
          <h3 className="text-3xl font-bold mb-2 leading-tight">
            {dealProduct.name}
          </h3>
          <p className="text-white/60 text-sm">
            ${dealProduct.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
          </p>
        </div>

        <div className="relative z-10 mt-4">
          <div className="w-10 h-10 rounded-full bg-white text-main flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
            <PlusIcon />
          </div>
        </div>

        {/* Real product image */}
        <div className="absolute -right-2 bottom-0 w-28 h-28 md:w-40 md:h-40 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-5deg]">
          <Image
            src={dealProduct.images[0]}
            alt={dealProduct.name}
            fill
            className="object-contain opacity-80 drop-shadow-lg"
            sizes="160px"
          />
        </div>
      </Link>

      {/* New Arrivals card */}
      <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-white border border-main/5 rounded-2xl md:rounded-[32px] p-5 md:p-8 relative overflow-hidden flex flex-col justify-between min-h-[200px] hover-lift group">
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-1">New Arrivals</h3>
          <p className="text-secondary text-sm mb-5">
            Just landed — explore our latest collection.
          </p>
        </div>

        {/* Product thumbnails row */}
        <div className="flex gap-3 mb-4">
          {newArrivals.map((product) => (
            <Link
              key={product._id}
              href={`/product/${product._id}`}
              className="flex-1 aspect-square rounded-2xl bg-bg-light relative overflow-hidden hover:ring-2 hover:ring-accent/30 transition-all"
            >
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-contain p-2"
                sizes="100px"
              />
            </Link>
          ))}
        </div>

        <Link
          href="/search"
          className="inline-flex items-center gap-2 text-accent font-bold text-sm group-hover:gap-3 transition-all"
        >
          Browse Collection
          <ArrowRightIcon />
        </Link>
      </div>
    </section>
  );
}
