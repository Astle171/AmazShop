"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  getSuggestedCoupons,
  computeOrderTotals,
  type Coupon,
} from "@/data/coupons";

interface OrderSummaryProps {
  itemCount: number;
  subtotal: number;
  appliedCoupon: Coupon | null;
  onApplyCoupon: (code: string) => { success: boolean; error?: string };
  onRemoveCoupon: () => void;
}

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.15" />
      <path
        d="M9 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TagIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="7" cy="7" r="1.5" fill="currentColor" />
    </svg>
  );
}

function DetailsTooltip({ terms }: { terms: string }) {
  return (
    <span className="relative inline-block group/tip">
      <span className="text-xs font-bold text-main underline cursor-default group-hover/tip:text-accent transition-colors">
        Details
      </span>
      <span
        role="tooltip"
        className="pointer-events-none absolute left-0 bottom-full mb-2 w-56 rounded-xl bg-white text-secondary text-[11px] leading-relaxed p-3 shadow-2xl ring-1 ring-black/5 opacity-0 scale-95 group-hover/tip:opacity-100 group-hover/tip:scale-100 transition-all duration-150 origin-bottom-left z-[999]"
      >
        {terms}
        <span className="absolute left-4 top-full w-0 h-0 border-x-[6px] border-x-transparent border-t-[6px] border-t-white" />
      </span>
    </span>
  );
}

export default function OrderSummary({
  itemCount,
  subtotal,
  appliedCoupon,
  onApplyCoupon,
  onRemoveCoupon,
}: OrderSummaryProps) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);

  const totals = computeOrderTotals(subtotal, appliedCoupon);

  useEffect(() => {
    if (!appliedCoupon) {
      setInputValue("");
    }
  }, [appliedCoupon]);

  const suggestedCoupons = getSuggestedCoupons(appliedCoupon?.code, 2);

  const handleApply = () => {
    setError(null);
    const result = onApplyCoupon(inputValue);
    if (result.success) {
      setInputValue("");
    } else {
      setError(result.error ?? "Invalid promo code");
    }
  };

  const handleApplySuggested = (code: string) => {
    setError(null);
    onApplyCoupon(code);
  };

  const fmt = (n: number) =>
    n.toLocaleString("en-US", { minimumFractionDigits: 2 });

  return (
    <div className="bg-white rounded-[32px] p-6 md:p-8 shadow-sm">
      <h2 className="text-2xl font-black tracking-tight">Order Summary</h2>

      {/* Divider */}
      <div className="border-t border-main/5 my-6" />

      {/* Line items */}
      <div className="space-y-4 mb-6">
        <div className="flex justify-between font-medium">
          <span className="text-secondary">Subtotal ({itemCount} items)</span>
          <span className="font-bold text-main">${fmt(subtotal)}</span>
        </div>

        {appliedCoupon && totals.subtotalDiscount > 0 && (
          <div className="flex justify-between font-medium">
            <span className="text-green-600">
              Discount ({appliedCoupon.code})
            </span>
            <span className="text-green-600 font-bold">
              −${fmt(totals.subtotalDiscount)}
            </span>
          </div>
        )}

        <div className="flex justify-between font-medium">
          <span className="text-secondary">Shipping</span>
          {totals.shippingAfterDiscount === 0 ? (
            <span className="flex items-center gap-1.5">
              {totals.shippingDiscount > 0 && (
                <span className="text-xs text-secondary line-through">
                  ${fmt(totals.shipping)}
                </span>
              )}
              <span className="text-green-600 font-bold">FREE</span>
            </span>
          ) : (
            <span className="text-main font-bold">
              ${fmt(totals.shippingAfterDiscount)}
            </span>
          )}
        </div>

        <div className="flex justify-between font-medium">
          <span className="text-secondary">Tax estimate</span>
          <span className="text-main">${fmt(totals.taxEstimate)}</span>
        </div>
      </div>

      {/* Savings banner */}
      {totals.savings > 0 && (
        <div className="flex items-center gap-3 mb-6 py-3 px-4 bg-green-50 rounded-xl border border-green-100">
          <CheckCircleIcon className="w-6 h-6 text-green-600 shrink-0" />
          <p className="text-sm font-black text-green-600">
            You&apos;re saving ${fmt(totals.savings)}!
          </p>
        </div>
      )}

      {/* Promo Code Section */}
      <div className="mb-6">
        <p className="text-sm font-black text-main py-2">Promo Code</p>

        <div className="mt-3">
          {appliedCoupon ? (
            <div className="space-y-4">
              {/* Applied coupon card */}
              <div className="bg-bg rounded-2xl border border-main/5">
                <div className="p-4">
                  <div className="flex items-start gap-3">
                    <TagIcon className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <p className="font-black text-main text-sm tracking-wide">
                        {appliedCoupon.code}
                      </p>
                      <p className="text-xs text-secondary mt-1 leading-relaxed">
                        {appliedCoupon.successMessage}{" "}
                        <DetailsTooltip terms={appliedCoupon.terms} />
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-3 ml-8">
                    <svg
                      className="w-4 h-4 text-green-600 shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        fill="#16a34a"
                        opacity="0.15"
                      />
                      <path
                        d="M9 12l2 2 4-4"
                        stroke="#16a34a"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-xs font-black text-green-600">
                      Code Applied
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={onRemoveCoupon}
                className="text-sm font-bold text-main underline hover:text-accent transition-colors"
              >
                Change Promo Code
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Input */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value.toUpperCase());
                    setError(null);
                  }}
                  onKeyDown={(e) => e.key === "Enter" && handleApply()}
                  placeholder="Enter code"
                  className="flex-1 bg-bg border border-main/5 outline-none rounded-xl px-4 py-3 text-sm font-bold focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                />
                <button
                  type="button"
                  onClick={handleApply}
                  disabled={!inputValue.trim()}
                  className="bg-main text-white px-5 rounded-xl text-xs font-black hover:bg-accent transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  APPLY
                </button>
              </div>
              {error && (
                <p className="text-xs font-bold text-red-500">{error}</p>
              )}

              {/* Your Promo Codes — collapsible dropdown */}
              {suggestedCoupons.length > 0 && (
                <div>
                  <button
                    type="button"
                    onClick={() => setSuggestionsOpen(!suggestionsOpen)}
                    className="flex items-center gap-2 text-sm font-black text-main hover:text-accent transition-colors"
                  >
                    Your Promo Codes
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        suggestionsOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {suggestionsOpen && (
                    <div className="mt-3 bg-bg rounded-2xl border border-main/5 divide-y divide-main/5">
                      <p className="text-[11px] text-secondary px-4 py-2.5">
                        Only one promo code can be applied at a time.
                      </p>
                      {suggestedCoupons.map((coupon) => (
                        <div key={coupon.code} className="px-4 py-3">
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex items-start gap-2.5 min-w-0">
                              <TagIcon className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                              <div className="min-w-0">
                                <p className="font-black text-main text-sm">
                                  {coupon.code}
                                </p>
                                <p className="text-xs text-secondary mt-0.5">
                                  {coupon.description}
                                </p>
                                <div className="mt-1">
                                  <DetailsTooltip terms={coupon.terms} />
                                </div>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => handleApplySuggested(coupon.code)}
                              className="text-sm font-bold text-accent hover:text-main shrink-0 transition-colors"
                            >
                              Apply
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Total */}
      <div className="border-t border-main/5 pt-6 mb-8">
        <div className="flex justify-between items-end">
          <span className="font-bold text-secondary text-lg">Total</span>
          <span className="font-black text-3xl tracking-tight">
            ${fmt(totals.total)}
          </span>
        </div>
      </div>

      {/* CTAs */}
      <Link
        href="/checkout"
        className="w-full h-14 bg-main text-white rounded-full font-black text-base tracking-wide hover:bg-accent hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 shadow-xl shadow-main/10 mb-3"
      >
        Proceed to Checkout
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </Link>

      <button
        type="button"
        className="w-full h-14 bg-white text-main rounded-full font-bold text-sm border-2 border-main/10 hover:border-main/20 transition-all flex items-center justify-center gap-1.5 mb-5"
      >
        <span className="font-black text-[#003087] italic">Pay</span>
        <span className="font-black text-[#009CDE] italic">Pal</span>
        <span className="ml-1">Checkout</span>
      </button>

      <Link
        href="/search"
        className="block text-center text-sm font-bold text-main hover:text-accent transition-colors underline"
      >
        Continue Shopping
      </Link>

      <p className="text-[10px] text-secondary/60 mt-5">
        *Higher rates apply to shipments to Alaska, Hawaii, and US territories.
      </p>

      <div className="flex items-center justify-center gap-4 opacity-30 mt-5">
        <span className="text-[10px] font-bold tracking-widest uppercase">
          Secured by Stripe
        </span>
        <div className="w-px h-3 bg-main" />
        <span className="text-[10px] font-bold tracking-widest uppercase">
          SSL Encrypted
        </span>
      </div>
    </div>
  );
}
