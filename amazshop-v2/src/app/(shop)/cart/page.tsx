"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import CartItemCard from "@/components/cart/CartItemCard";
import OrderSummary from "@/components/cart/OrderSummary";
import RecommendedProducts from "@/components/cart/RecommendedProducts";
import { getCouponByCode, type Coupon } from "@/data/coupons";

const COUPON_STORAGE_KEY = "amazshop-applied-coupon";

function getDeliveryDate() {
  const d = new Date();
  d.setDate(d.getDate() + 5);
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
}

export default function CartPage() {
  const { items, itemCount, subtotal, removeItem, updateQuantity, saveForLater } =
    useCart();

  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem(COUPON_STORAGE_KEY);
    if (stored) {
      const coupon = getCouponByCode(stored);
      if (coupon) setAppliedCoupon(coupon);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (appliedCoupon) {
      localStorage.setItem(COUPON_STORAGE_KEY, appliedCoupon.code);
    } else {
      localStorage.removeItem(COUPON_STORAGE_KEY);
    }
  }, [appliedCoupon]);

  const handleApplyCoupon = useCallback(
    (code: string): { success: boolean; error?: string } => {
      const coupon = getCouponByCode(code);
      if (!coupon) {
        return { success: false, error: "Invalid promo code" };
      }
      setAppliedCoupon(coupon);
      return { success: true };
    },
    []
  );

  const handleRemoveCoupon = useCallback(() => {
    setAppliedCoupon(null);
  }, []);

  return (
    <div className="py-8 md:py-12">
      <header className="mb-10">
        <h1 className="text-4xl font-black tracking-tight mb-2">
          Your Bag <span className="text-accent">({itemCount})</span>
        </h1>
        <p className="text-secondary">Items are reserved for 60 minutes</p>
      </header>

      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-12 lg:col-span-8 space-y-6">
          {items.length === 0 ? (
            <div className="bg-white rounded-[32px] p-12 text-center">
              <p className="text-secondary font-medium mb-4">
                Your bag is empty
              </p>
              <Link
                href="/search"
                className="inline-block bg-main text-white px-8 py-3 rounded-xl font-bold hover:bg-accent transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <>
              {items.map((item) => (
                <CartItemCard
                  key={item.id}
                  item={item}
                  onRemove={() => removeItem(item.id)}
                  onSaveForLater={() => saveForLater(item.id)}
                  onQuantityChange={(qty) =>
                    updateQuantity(item.id, qty)
                  }
                />
              ))}

              <div className="flex items-center gap-3 pt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-accent shrink-0"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <p className="text-sm font-medium">
                  Fast Delivery: Get it by{" "}
                  <span className="font-bold">{getDeliveryDate()}</span>
                </p>
              </div>
            </>
          )}
        </div>

        <div className="col-span-12 lg:col-span-4 lg:self-start lg:sticky lg:top-28">
          {items.length > 0 && (
            <>
              <OrderSummary
                itemCount={itemCount}
                subtotal={subtotal}
                appliedCoupon={appliedCoupon}
                onApplyCoupon={handleApplyCoupon}
                onRemoveCoupon={handleRemoveCoupon}
              />

              <div className="mt-8 p-6 bg-accent/5 rounded-[32px] border border-accent/10">
                <h4 className="font-bold text-sm mb-2">Need help?</h4>
                <p className="text-xs text-secondary leading-relaxed mb-4">
                  Our concierge team is available 24/7 to help with your order.
                </p>
                <a
                  href="#"
                  className="text-accent text-xs font-black border-b border-accent"
                >
                  Contact Support
                </a>
              </div>
            </>
          )}
        </div>
      </div>

      {items.length > 0 && (
        <RecommendedProducts excludeProductIds={items.map((i) => i.productId)} />
      )}
    </div>
  );
}
