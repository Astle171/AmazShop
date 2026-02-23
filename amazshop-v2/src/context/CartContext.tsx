"use client";

import {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
  useRef,
  type ReactNode,
} from "react";
import { useSession } from "next-auth/react";
import type { CartItem } from "@/data/cart-data";
import { getProductById } from "@/lib/product-lookup";

export type AddItemInput = {
  productId: string;
  variant?: string;
  quantity?: number;
};

export type AddItemResult =
  | { success: true }
  | { success: false; reason: "not_found" | "out_of_stock" | "exceeds_stock" };

interface CartContextValue {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  addItem: (input: AddItemInput) => AddItemResult;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => boolean;
  saveForLater: (id: string) => void;
}

const CartContext = createContext<CartContextValue | null>(null);

async function fetchCartItems(): Promise<CartItem[]> {
  try {
    const res = await fetch("/api/cart");
    if (!res.ok) return [];
    const data = await res.json();
    return data.items ?? [];
  } catch {
    return [];
  }
}

async function apiAddItem(
  productId: string,
  variant: string,
  quantity: number
): Promise<CartItem[] | null> {
  try {
    const res = await fetch("/api/cart/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId, variant, quantity }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.items ?? null;
  } catch {
    return null;
  }
}

async function apiUpdateQuantity(
  itemId: string,
  quantity: number
): Promise<CartItem[] | null> {
  try {
    const res = await fetch(`/api/cart/items/${itemId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.items ?? null;
  } catch {
    return null;
  }
}

async function apiRemoveItem(itemId: string): Promise<CartItem[] | null> {
  try {
    const res = await fetch(`/api/cart/items/${itemId}`, { method: "DELETE" });
    if (!res.ok) return null;
    const data = await res.json();
    return data.items ?? null;
  } catch {
    return null;
  }
}

async function apiMergeCart(): Promise<CartItem[] | null> {
  try {
    const res = await fetch("/api/cart/merge", { method: "POST" });
    if (!res.ok) return null;
    const data = await res.json();
    return data.items ?? null;
  } catch {
    return null;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession();
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const itemsRef = useRef<CartItem[]>([]);
  itemsRef.current = items;

  const prevSessionUserId = useRef<string | undefined>(undefined);

  // Initial hydration from API
  useEffect(() => {
    if (status === "loading") return;
    fetchCartItems().then((serverItems) => {
      setItems(serverItems);
      setHydrated(true);
    });
  }, [status]);

  // On login (session user appears), merge guest cart and refetch
  useEffect(() => {
    const currentUserId = session?.user?.id;
    const prevUserId = prevSessionUserId.current;
    prevSessionUserId.current = currentUserId;

    if (currentUserId && !prevUserId && hydrated) {
      apiMergeCart().then((merged) => {
        if (merged) setItems(merged);
      });
    }
  }, [session?.user?.id, hydrated]);

  const addItem = useCallback((input: AddItemInput): AddItemResult => {
    const { productId, variant = "Standard", quantity = 1 } = input;
    const product = getProductById(productId);
    if (!product) return { success: false, reason: "not_found" };
    if (product.countInStock <= 0)
      return { success: false, reason: "out_of_stock" };

    const prev = itemsRef.current;
    const existing = prev.find(
      (i) => i.productId === productId && i.variant === variant
    );
    const existingQty = existing?.quantity ?? 0;
    if (existingQty + quantity > product.countInStock) {
      return { success: false, reason: "exceeds_stock" };
    }

    // Optimistic update
    const tempId = `temp-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    setItems((current) => {
      const ex = current.find(
        (i) => i.productId === productId && i.variant === variant
      );
      if (ex) {
        return current.map((i) =>
          i.id === ex.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [
        ...current,
        { id: tempId, productId, variant, quantity },
      ];
    });

    // Persist to server, then reconcile with server state
    apiAddItem(productId, variant, quantity).then((serverItems) => {
      if (serverItems) setItems(serverItems);
    });

    return { success: true };
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
    apiRemoveItem(id).then((serverItems) => {
      if (serverItems) setItems(serverItems);
    });
  }, []);

  const updateQuantity = useCallback(
    (id: string, quantity: number): boolean => {
      const item = itemsRef.current.find((i) => i.id === id);
      if (!item) return false;
      const product = getProductById(item.productId);
      if (!product) return false;
      const maxQty = product.countInStock;
      const newQty = Math.max(1, Math.min(quantity, maxQty));

      // Optimistic
      setItems((prev) =>
        prev.map((i) => (i.id === id ? { ...i, quantity: newQty } : i))
      );

      apiUpdateQuantity(id, newQty).then((serverItems) => {
        if (serverItems) setItems(serverItems);
      });

      return true;
    },
    []
  );

  const saveForLater = useCallback(
    (id: string) => {
      removeItem(id);
    },
    [removeItem]
  );

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => {
    const product = getProductById(i.productId);
    return sum + (product?.price ?? 0) * i.quantity;
  }, 0);

  const value: CartContextValue = {
    items,
    itemCount,
    subtotal,
    addItem,
    removeItem,
    updateQuantity,
    saveForLater,
  };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
