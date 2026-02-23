"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import CartItemCard from "@/components/cart/CartItemCard";
import OrderSummary from "@/components/cart/OrderSummary";
import RecommendedProducts from "@/components/cart/RecommendedProducts";
import { getCouponByCode, type Coupon } from "@/data/coupons";

const COUPON_STORAGE_KEY = "amazshop-applied-coupon";

const springTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: springTransition },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

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

  const isEmpty = items.length === 0;

  return (
    <motion.div
      className="py-2 md:py-4"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Header — staggers in first */}
      <motion.header variants={fadeInUp} className="mb-6 md:mb-10">
        <h1 className="text-2xl md:text-4xl font-black tracking-tight mb-2">
          Shopping Bag <span className="text-accent">({itemCount})</span>
        </h1>
        {!isEmpty && (
          <p className="text-sm md:text-base text-secondary">
            Items are reserved for 60 minutes
          </p>
        )}
      </motion.header>

      {/* Main content — staggers in second */}
      <motion.div variants={fadeInUp}>
        <AnimatePresence mode="wait">
          {isEmpty ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="flex flex-col items-center text-center py-4 md:py-8"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center mb-4 md:mb-5">
                <svg
                  className="w-10 h-10 md:w-12 md:h-12 text-main/20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 01-8 0" />
                </svg>
              </div>
              <h2 className="text-lg md:text-xl font-bold text-main mb-1.5">
                Your bag is empty
              </h2>
              <p className="text-sm text-secondary max-w-xs mb-5">
                Explore our collection and find something you love.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/search"
                  className="bg-main text-white px-7 py-3 rounded-xl font-bold hover:bg-accent transition-colors text-sm"
                >
                  Start Shopping
                </Link>
                <Link
                  href="/"
                  className="bg-white text-main px-7 py-3 rounded-xl font-bold border border-main/10 hover:border-main/20 transition-colors text-sm"
                >
                  Back to Home
                </Link>
              </div>

              <div className="flex items-center gap-6 sm:gap-10 mt-6 md:mt-8 text-secondary">
                <div className="flex flex-col items-center gap-1.5">
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                    />
                  </svg>
                  <span className="text-[10px] sm:text-xs font-medium">
                    Free Shipping
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                  <span className="text-[10px] sm:text-xs font-medium">
                    Secure Checkout
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M2.985 19.644l3.181-3.182"
                    />
                  </svg>
                  <span className="text-[10px] sm:text-xs font-medium">
                    Easy Returns
                  </span>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="cart"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10"
            >
              {/* Cart items column */}
              <div className="lg:col-span-8">
                <AnimatePresence initial={false}>
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{
                        opacity: 0,
                        height: 0,
                        marginBottom: 0,
                        transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                      }}
                      transition={{
                        opacity: { duration: 0.3 },
                        height: { duration: 0.3 },
                      }}
                      className="overflow-hidden mb-4 md:mb-6"
                    >
                      <CartItemCard
                        item={item}
                        onRemove={() => removeItem(item.id)}
                        onSaveForLater={() => saveForLater(item.id)}
                        onQuantityChange={(qty) => updateQuantity(item.id, qty)}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>

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
              </div>

              {/* Order summary column */}
              <div className="lg:col-span-4 lg:self-start lg:sticky lg:top-28">
                <OrderSummary
                  itemCount={itemCount}
                  subtotal={subtotal}
                  appliedCoupon={appliedCoupon}
                  onApplyCoupon={handleApplyCoupon}
                  onRemoveCoupon={handleRemoveCoupon}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Recommendations — staggers in third */}
      <motion.div variants={fadeInUp}>
        <RecommendedProducts excludeProductIds={items.map((i) => i.productId)} />
      </motion.div>
    </motion.div>
  );
}
