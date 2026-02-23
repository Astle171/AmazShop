/**
 * Tracks which products were added to cart from the PLP in the current visit.
 * Cleared when user navigates away from PLP - so stepper UI only shows
 * for products added while staying on the PLP, not after returning from cart.
 */
const plpSessionProductIds = new Set<string>();

export function addToPLPSession(productId: string) {
  plpSessionProductIds.add(productId);
}

export function isInPLPSession(productId: string): boolean {
  return plpSessionProductIds.has(productId);
}

export function clearPLPSession() {
  plpSessionProductIds.clear();
}
