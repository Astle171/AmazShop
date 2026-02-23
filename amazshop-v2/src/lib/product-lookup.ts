import type { ProductDetail } from "@/types";
import { allProducts } from "@/data/products";

/** Sync lookup for product by ID (for cart, client components) */
export function getProductById(id: string): ProductDetail | null {
  const found = allProducts.find((p) => p._id === id);
  return found ?? null;
}
