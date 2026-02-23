"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { SearchIcon, HeartIcon, ShoppingBagIcon } from "@/components/icons";

function UserAvatar({ name, image }: { name?: string | null; image?: string | null }) {
  if (image) {
    return (
      <Image
        src={image}
        alt={name || "User"}
        width={40}
        height={40}
        className="h-10 w-10 rounded-full object-cover"
      />
    );
  }

  const initials = (name || "U")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="h-10 w-10 rounded-full bg-accent text-white flex items-center justify-center text-xs font-black">
      {initials}
    </div>
  );
}

export default function Navbar() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
          {status === "loading" ? (
            <div className="h-10 w-20 rounded-full bg-main/5 animate-pulse hidden lg:block" />
          ) : session?.user ? (
            <div className="relative hidden lg:block" ref={menuRef}>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center gap-3 h-10 pl-1 pr-4 rounded-full hover:bg-main/5 transition-colors cursor-pointer"
              >
                <UserAvatar name={session.user.name} image={session.user.image} />
                <span className="text-sm font-bold max-w-[120px] truncate">
                  {session.user.name?.split(" ")[0] || "Account"}
                </span>
              </button>

              {menuOpen && (
                <div className="absolute right-0 top-14 w-56 bg-white rounded-2xl shadow-xl shadow-main/10 border border-main/5 p-2 z-50">
                  <div className="px-4 py-3 border-b border-main/5">
                    <p className="text-sm font-bold truncate">{session.user.name}</p>
                    <p className="text-xs text-secondary truncate">{session.user.email}</p>
                  </div>
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      signOut({ callbackUrl: "/" });
                    }}
                    className="w-full text-left px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50 rounded-xl transition-colors mt-1 cursor-pointer"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/login"
              className="h-10 px-4 rounded-full hover:bg-main/5 text-sm font-bold transition-colors hidden lg:flex items-center"
            >
              Sign In
            </Link>
          )}
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
