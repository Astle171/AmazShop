"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SearchIcon, HeartIcon, ShoppingBagIcon } from "@/components/icons";

export default function Navbar() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      router.push(`/search?q=${encodeURIComponent(trimmed)}`);
    } else {
      router.push("/search");
    }
  };

  return (
    <nav className="sticky top-0 z-50 nav-glass border-b border-main/5">
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between gap-8">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo-cropped.png"
            alt="AmazShop"
            width={200}
            height={61}
            className="h-14 w-auto object-contain"
            priority
          />
        </Link>

        <form
          onSubmit={handleSearch}
          className="hidden md:flex flex-1 max-w-xl relative group search-focus rounded-full transition-all duration-300"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for products, brands and more..."
            className="w-full h-12 pl-6 pr-14 rounded-full bg-white border border-main/10 outline-none text-sm font-medium transition-all group-hover:border-main/20 placeholder-secondary/50"
          />
          <button
            type="submit"
            className="absolute right-2 top-2 h-8 w-8 bg-accent text-white rounded-full flex items-center justify-center hover:bg-main transition-colors"
          >
            <SearchIcon />
          </button>
        </form>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="h-10 px-4 rounded-full hover:bg-main/5 text-sm font-bold transition-colors hidden lg:flex items-center"
          >
            Sign In
          </Link>
          <button className="h-12 w-12 rounded-full border border-main/10 flex items-center justify-center hover:border-accent hover:text-accent transition-all relative">
            <HeartIcon />
          </button>
          <Link
            href="/cart"
            className="h-12 w-12 rounded-full bg-main text-white flex items-center justify-center shadow-lg shadow-orange-900/10 hover:bg-accent hover:-translate-y-1 transition-all relative"
          >
            <ShoppingBagIcon />
            <span className="absolute -top-1 -right-1 h-5 w-5 bg-accent border-2 border-bg rounded-full text-[10px] font-bold flex items-center justify-center">
              2
            </span>
          </Link>
        </div>
      </div>

      <div className="md:hidden px-6 pb-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full h-10 px-4 rounded-lg bg-white border border-main/10 outline-none text-sm"
        />
      </div>
    </nav>
  );
}
