"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { getProductById } from "@/lib/product-lookup";
import { computeOrderTotals, getCouponByCode } from "@/data/coupons";
import Link from "next/link";
import Image from "next/image";
import StripeProvider from "@/components/providers/StripeProvider";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function Spinner() {
  return (
    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

function Pulse({ className }: { className?: string }) {
  return <div className={`animate-pulse bg-main/[0.07] rounded-lg ${className ?? ""}`} />;
}

function PaymentSkeleton() {
  return (
    <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 border border-main/5 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <Pulse className="h-6 w-40" />
        <Pulse className="h-4 w-24" />
      </div>
      <div className="flex gap-2 mb-6">
        <Pulse className="h-12 flex-1" />
        <Pulse className="h-12 flex-1" />
        <Pulse className="h-12 flex-1" />
      </div>
      <Pulse className="h-3 w-24 mb-2" />
      <Pulse className="h-11 mb-4" />
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div><Pulse className="h-3 w-20 mb-2" /><Pulse className="h-11" /></div>
        <div><Pulse className="h-3 w-10 mb-2" /><Pulse className="h-11" /></div>
      </div>
      <Pulse className="h-3 w-28 mb-2" />
      <Pulse className="h-11" />
    </div>
  );
}

interface ShippingInfo {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postal: string;
}

interface CartItemSummary {
  id: string;
  productId: string;
  variant: string;
  quantity: number;
}

const inputCls =
  "w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border border-main/10 bg-white text-sm outline-none focus:border-[#635BFF] focus:ring-2 focus:ring-[#635BFF]/10 transition-all";
const labelCls =
  "block text-[10px] md:text-xs font-bold uppercase tracking-widest text-main mb-1.5 md:mb-2";

function ShippingForm({
  shipping,
  setShipping,
}: {
  shipping: ShippingInfo;
  setShipping: (s: ShippingInfo) => void;
}) {
  return (
    <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 border border-main/5 shadow-sm">
      <h2 className="text-lg md:text-xl font-black tracking-tight mb-5 md:mb-6">
        Shipping Address
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
        <div>
          <label className={labelCls}>First Name</label>
          <input
            type="text"
            required
            placeholder="John"
            value={shipping.firstName}
            onChange={(e) => setShipping({ ...shipping, firstName: e.target.value })}
            className={inputCls}
          />
        </div>
        <div>
          <label className={labelCls}>Last Name</label>
          <input
            type="text"
            required
            placeholder="Doe"
            value={shipping.lastName}
            onChange={(e) => setShipping({ ...shipping, lastName: e.target.value })}
            className={inputCls}
          />
        </div>
      </div>
      <div className="mb-3 md:mb-4">
        <label className={labelCls}>Street Address</label>
        <input
          type="text"
          required
          placeholder="123 Tech Lane"
          value={shipping.address}
          onChange={(e) => setShipping({ ...shipping, address: e.target.value })}
          className={inputCls}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
        <div>
          <label className={labelCls}>City</label>
          <input
            type="text"
            required
            placeholder="San Francisco"
            value={shipping.city}
            onChange={(e) => setShipping({ ...shipping, city: e.target.value })}
            className={inputCls}
          />
        </div>
        <div>
          <label className={labelCls}>Postal Code</label>
          <input
            type="text"
            required
            placeholder="94103"
            value={shipping.postal}
            onChange={(e) => setShipping({ ...shipping, postal: e.target.value })}
            className={inputCls}
          />
        </div>
      </div>
    </div>
  );
}

function PaymentForm({
  shipping,
  total,
  onStateChange,
}: {
  shipping: ShippingInfo;
  total: number;
  onStateChange: (ready: boolean, loading: boolean) => void;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const { clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    onStateChange(!!stripe, loading);
  }, [stripe, loading, onStateChange]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setError(null);

    const { error: submitError } = await elements.submit();
    if (submitError) {
      setError(submitError.message ?? "Validation error");
      setLoading(false);
      return;
    }

    const { error: confirmError, paymentIntent } =
      await stripe.confirmPayment({
        elements,
        redirect: "if_required",
        confirmParams: {
          return_url: `${window.location.origin}/checkout/confirmation`,
        },
      });

    if (confirmError) {
      setError(confirmError.message ?? "Payment failed");
      setLoading(false);
      return;
    }

    if (paymentIntent?.status === "succeeded") {
      try {
        const res = await fetch("/api/checkout/confirm", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            paymentIntentId: paymentIntent.id,
            shippingFirstName: shipping.firstName,
            shippingLastName: shipping.lastName,
            shippingAddress: shipping.address,
            shippingCity: shipping.city,
            shippingPostal: shipping.postal,
          }),
        });
        const data = await res.json();
        clearCart();
        localStorage.removeItem("amazshop-applied-coupon");
        router.push(`/checkout/confirmation?orderId=${data.orderId}`);
      } catch {
        clearCart();
        localStorage.removeItem("amazshop-applied-coupon");
        router.push("/checkout/confirmation");
      }
    }

    setLoading(false);
  };

  return (
    <form id="checkout-form" onSubmit={handleSubmit}>
      <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 border border-main/5 shadow-sm">
        <div className="flex items-center justify-between mb-5 md:mb-6">
          <h2 className="text-lg md:text-xl font-black tracking-tight">
            Payment Method
          </h2>
          <span className="flex items-center gap-1.5 text-xs font-semibold text-secondary">
            Secured by
            <span className="text-[#635BFF] font-black text-base">stripe</span>
          </span>
        </div>

        <PaymentElement options={{ layout: "tabs" }} />

        <div className="flex items-center gap-2 pt-4 text-secondary">
          <ShieldIcon className="w-4 h-4 text-green-500 shrink-0" />
          <span className="text-xs">
            Your payment is encrypted and processed securely via Stripe
          </span>
        </div>
      </div>

      {error && (
        <div className="p-4 mt-6 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600 font-medium">
          {error}
        </div>
      )}

      {/* Mobile-only pay button */}
      <PayButton
        form="checkout-form"
        ready={!!stripe}
        paying={loading}
        total={total}
        className="lg:hidden mt-6"
      />
    </form>
  );
}

function PayButton({
  form,
  ready,
  paying,
  total,
  className,
}: {
  form?: string;
  ready: boolean;
  paying: boolean;
  total: number;
  className?: string;
}) {
  const fmt = (n: number) =>
    n.toLocaleString("en-US", { minimumFractionDigits: 2 });
  return (
    <>
      <button
        type="submit"
        form={form}
        disabled={!ready || paying}
        className={`w-full h-14 bg-[#635BFF] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-[#4B45D1] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#635BFF]/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 ${className ?? ""}`}
      >
        {paying ? (
          <Spinner />
        ) : (
          <>
            <ShieldIcon className="w-5 h-5" />
            Pay ${fmt(total)} Securely
          </>
        )}
      </button>
      <div className={`flex items-center justify-center gap-1.5 mt-4 ${className ?? ""}`}>
        <ShieldIcon className="w-3 h-3 text-green-500" />
        <span className="text-[11px] text-secondary">
          256-bit SSL encryption · Powered by Stripe
        </span>
      </div>
    </>
  );
}

function OrderSummary({
  items,
  subtotal,
  taxEstimate,
  total,
}: {
  items: CartItemSummary[];
  subtotal: number;
  taxEstimate: number;
  total: number;
}) {
  const fmt = (n: number) =>
    n.toLocaleString("en-US", { minimumFractionDigits: 2 });

  return (
    <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 border border-main/5 shadow-sm">
      <h2 className="text-lg md:text-xl font-black tracking-tight mb-5 md:mb-6">
        Order Summary
      </h2>

      <div className="divide-y divide-main/5">
        {items.map((item) => {
          const product = getProductById(item.productId);
          if (!product) return null;
          return (
            <div
              key={item.id}
              className="grid grid-cols-[64px_1fr_auto] gap-4 py-4 first:pt-0"
            >
              <div className="w-16 h-16 bg-bg rounded-lg flex items-center justify-center">
                {product.images?.[0] || product.image ? (
                  <Image
                    src={product.images?.[0] || product.image!}
                    alt={product.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                ) : (
                  <svg
                    className="w-8 h-8 text-main/20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  </svg>
                )}
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-sm truncate">{product.name}</h3>
                <p className="text-xs text-secondary mt-0.5">
                  {item.variant}
                  {item.quantity > 1 && ` × ${item.quantity}`}
                </p>
              </div>
              <span className="font-bold text-accent text-sm whitespace-nowrap">
                ${fmt(product.price * item.quantity)}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-6 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-secondary">Subtotal</span>
          <span>${fmt(subtotal)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-secondary">Shipping</span>
          <span className="text-green-600 font-bold">FREE</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-secondary">Estimated Tax</span>
          <span>${fmt(taxEstimate)}</span>
        </div>
        <div className="flex justify-between items-end pt-3 border-t-2 border-bg font-black text-lg">
          <span>Total</span>
          <span className="text-accent">${fmt(total)}</span>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  const { items, subtotal } = useCart();
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [intentLoading, setIntentLoading] = useState(true);
  const [intentError, setIntentError] = useState<string | null>(null);
  const [paymentReady, setPaymentReady] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);

  const [shipping, setShipping] = useState<ShippingInfo>({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postal: "",
  });

  const storedCode =
    typeof window !== "undefined"
      ? localStorage.getItem("amazshop-applied-coupon")
      : null;
  const appliedCoupon = storedCode ? getCouponByCode(storedCode) : null;
  const totals = computeOrderTotals(subtotal, appliedCoupon);

  const handlePaymentState = useCallback((ready: boolean, loading: boolean) => {
    setPaymentReady(ready);
    setPaymentLoading(loading);
  }, []);

  const createPaymentIntent = useCallback(async () => {
    setIntentLoading(true);
    setIntentError(null);
    try {
      const couponCode =
        typeof window !== "undefined"
          ? localStorage.getItem("amazshop-applied-coupon") ?? undefined
          : undefined;
      const res = await fetch("/api/checkout/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ couponCode }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to create payment");
      setClientSecret(data.clientSecret);
    } catch (err) {
      setIntentError(
        err instanceof Error ? err.message : "Something went wrong"
      );
    } finally {
      setIntentLoading(false);
    }
  }, []);

  useEffect(() => {
    createPaymentIntent();
  }, [createPaymentIntent]);

  if (items.length === 0 && !clientSecret && !intentLoading) {
    return (
      <div className="py-16 text-center max-w-md mx-auto">
        <h1 className="text-3xl font-black tracking-tight mb-4">Checkout</h1>
        <p className="text-secondary mb-8">Your cart is empty.</p>
        <Link
          href="/search"
          className="inline-block bg-main text-white px-8 py-3 rounded-xl font-bold hover:bg-accent transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="py-2 md:py-4">
      <div className="flex items-center gap-3 mb-6 md:mb-8">
        <Link
          href="/cart"
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-main/10 flex items-center justify-center hover:bg-main/5 transition-colors shrink-0"
        >
          <svg className="w-5 h-5 text-main" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
        </Link>
        <h1 className="text-2xl md:text-4xl font-black tracking-tight">Checkout</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left — Shipping + Payment */}
        <div className="lg:col-span-7 space-y-6">
          <ShippingForm shipping={shipping} setShipping={setShipping} />

          {clientSecret ? (
            <StripeProvider clientSecret={clientSecret}>
              <PaymentForm
                shipping={shipping}
                total={totals.total}
                onStateChange={handlePaymentState}
              />
            </StripeProvider>
          ) : intentError ? (
            <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 border border-red-100 shadow-sm text-center">
              <p className="text-red-600 text-sm font-medium mb-4">{intentError}</p>
              <button
                onClick={createPaymentIntent}
                className="bg-main text-white px-8 py-3 rounded-xl font-bold hover:bg-accent transition-colors"
              >
                Try Again
              </button>
            </div>
          ) : (
            <PaymentSkeleton />
          )}
        </div>

        {/* Right — Order Summary + Pay Button */}
        <div className="lg:col-span-5 lg:self-start lg:sticky lg:top-28 space-y-6">
          {items.length > 0 ? (
            <OrderSummary
              items={items}
              subtotal={subtotal}
              taxEstimate={totals.taxEstimate}
              total={totals.total}
            />
          ) : (
            <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 border border-main/5 shadow-sm">
              <Pulse className="h-6 w-36 mb-6" />
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4 py-4">
                  <Pulse className="w-16 h-16 !rounded-lg shrink-0" />
                  <div className="flex-1"><Pulse className="h-4 w-28 mb-2" /><Pulse className="h-3 w-20" /></div>
                  <Pulse className="h-4 w-16" />
                </div>
              ))}
              <div className="mt-6 space-y-3">
                <div className="flex justify-between"><Pulse className="h-4 w-16" /><Pulse className="h-4 w-20" /></div>
                <div className="flex justify-between"><Pulse className="h-4 w-16" /><Pulse className="h-4 w-12" /></div>
                <div className="flex justify-between"><Pulse className="h-4 w-24" /><Pulse className="h-4 w-16" /></div>
                <div className="flex justify-between pt-3 border-t-2 border-bg">
                  <Pulse className="h-6 w-14" /><Pulse className="h-6 w-24" />
                </div>
              </div>
            </div>
          )}

          {/* Desktop pay button — submits the payment form via form attribute */}
          <PayButton
            form="checkout-form"
            ready={paymentReady}
            paying={paymentLoading}
            total={totals.total}
            className="hidden lg:flex"
          />
        </div>
      </div>
    </div>
  );
}
