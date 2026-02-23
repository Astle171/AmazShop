"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { clearPLPSession } from "@/lib/plp-session";

const LISTING_PAGES = ["/", "/search"];

/**
 * Clears listing session when user navigates away from product listing pages
 * (home/Trending, search/PLP). Ensures the quantity stepper only shows for
 * products added while on a listing page, not after returning from cart.
 */
export default function PLPSessionManager() {
  const pathname = usePathname();

  useEffect(() => {
    if (!LISTING_PAGES.includes(pathname)) {
      clearPLPSession();
    }
  }, [pathname]);

  return null;
}
