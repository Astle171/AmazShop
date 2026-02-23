import type { ProductDetail } from "@/types";
import { allProducts } from "./products";

export interface CartItem {
  id: string;
  productId: string;
  variant: string;
  quantity: number;
}

/** Build variant string from finish and variant names */
export function buildVariantString(
  finish?: string,
  variant?: string
): string {
  const parts = [finish, variant].filter(Boolean);
  return parts.length > 0 ? parts.join(" / ") : "Standard";
}

/** Default: empty cart - user adds real products */
export const defaultCartItems: CartItem[] = [];

/** Recommended products - similar category (watches, accessories) from real data */
export function getRecommendedProducts(
  excludeProductIds: string[] = [],
  limit = 4
): ProductDetail[] {
  const watches = allProducts.filter((p) => p.category === "watches");
  const accessories = allProducts.filter((p) =>
    ["audio", "gaming"].includes(p.category)
  );
  const candidates = [...watches, ...accessories].filter(
    (p) => !excludeProductIds.includes(p._id)
  );
  const seen = new Set<string>();
  const result: ProductDetail[] = [];
  for (const p of candidates) {
    if (result.length >= limit) break;
    if (seen.has(p._id)) continue;
    seen.add(p._id);
    result.push(p);
  }
  return result;
}
