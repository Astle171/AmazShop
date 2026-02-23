import Image from "next/image";
import Link from "next/link";

function GridPattern() {
  return (
    <div className="absolute inset-0 opacity-5">
      <svg width="100%" height="100%">
        <pattern
          id="grid"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="white"
            strokeWidth="1"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

export default function BrandPanel() {
  return (
    <div className="brand-side hidden lg:flex flex-col justify-between p-16 w-1/2 bg-main relative overflow-hidden">
      <div className="relative z-20">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo-cropped.png"
            alt="AmazShop"
            width={200}
            height={61}
            className="h-14 w-auto object-contain brightness-0 invert"
            priority
          />
        </Link>
      </div>

      <div className="relative z-20 max-w-md">
        <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-bold tracking-widest uppercase rounded-full mb-6">
          Since 2024
        </span>
        <h1 className="text-6xl font-black text-white leading-[0.95] mb-8 tracking-tighter">
          Elevate your <br />
          <span className="text-accent">Digital Life.</span>
        </h1>
        <p className="text-white/60 text-lg leading-relaxed mb-10">
          Discover handpicked innovation for modern living.
        </p>

        <div className="auth-glass-card rounded-2xl p-6 flex items-center gap-4">
          <div className="flex -space-x-3">
            <div className="w-10 h-10 rounded-full border-2 border-main bg-gray-300" />
            <div className="w-10 h-10 rounded-full border-2 border-main bg-gray-400" />
            <div className="w-10 h-10 rounded-full border-2 border-main bg-accent flex items-center justify-center text-[10px] font-bold text-white">
              12k+
            </div>
          </div>
          <p className="text-white/80 text-sm font-medium">
            Join 12,000+ members already shopping smarter.
          </p>
        </div>
      </div>

      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent rounded-full blur-[120px] opacity-20" />
      <div className="absolute top-1/4 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-[80px]" />
      <GridPattern />

      <div className="relative z-20" />
    </div>
  );
}
