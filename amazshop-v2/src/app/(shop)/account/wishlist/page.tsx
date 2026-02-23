"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function WishlistPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    if (!session?.user) {
      router.replace("/login?callbackUrl=/account/wishlist");
    }
  }, [session, status, router]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-4xl font-black text-main tracking-tight mb-2">
          Wishlist
        </h1>
        <p className="text-sm sm:text-base text-secondary">
          Save products you love and come back to them later.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-12 text-center">
        <svg className="w-16 h-16 mx-auto text-main/15 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        <h3 className="text-lg font-bold text-main mb-2">Your wishlist is empty</h3>
        <p className="text-secondary mb-6 max-w-sm mx-auto">
          You don&apos;t have anything in your wishlist yet. Browse our products and tap the heart icon to save your favorites.
        </p>
        <Link
          href="/search"
          className="inline-block bg-main text-white px-8 py-3 rounded-xl font-bold hover:bg-accent transition-colors"
        >
          Browse Products
        </Link>
      </div>
    </div>
  );
}
