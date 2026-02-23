"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Profile Details", href: "/account", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
  { label: "My Orders", href: "/account/orders", icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" },
  { label: "Wishlist", href: "/account/wishlist", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
];

export default function AccountSidebar() {
  const pathname = usePathname();

  return (
    <aside className="lg:w-64 shrink-0">
      <h2 className="hidden lg:block text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 px-4">
        Account Settings
      </h2>
      <nav className="flex lg:flex-col gap-2 lg:gap-1 overflow-x-auto pb-2 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 scrollbar-hide">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.label}
              href={link.href}
              className={`flex items-center gap-2 lg:gap-3 px-4 py-2.5 lg:py-3 text-sm font-bold rounded-xl transition-colors whitespace-nowrap shrink-0 ${
                active
                  ? "bg-white text-main shadow-sm"
                  : "text-secondary hover:text-main"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={link.icon} />
              </svg>
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
