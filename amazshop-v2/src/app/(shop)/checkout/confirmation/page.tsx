"use client";

import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { Suspense, useEffect, useState } from "react";
import { getProductById } from "@/lib/product-lookup";

interface OrderData {
  id: string;
  status: string;
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  couponCode: string | null;
  shippingFirstName: string | null;
  shippingLastName: string | null;
  shippingAddress: string | null;
  shippingCity: string | null;
  shippingPostal: string | null;
  createdAt: string;
  items: {
    id: string;
    productId: string;
    productName: string;
    variant: string;
    quantity: number;
    unitPrice: number;
  }[];
}

function CheckIcon() {
  return (
    <svg
      className="w-12 h-12 text-green-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
        style={{
          strokeDasharray: 100,
          strokeDashoffset: 0,
          animation: "drawCheck 0.8s 0.4s forwards ease-out",
        }}
      />
    </svg>
  );
}

function Bone({ className }: { className?: string }) {
  return <div className={`animate-pulse bg-main/[0.07] rounded-lg ${className ?? ""}`} />;
}

function ConfirmationSkeleton() {
  return (
    <div className="flex-grow flex items-center justify-center px-3 py-6 md:p-8 md:pb-16">
      <div className="w-full max-w-6xl bg-white rounded-2xl md:rounded-[32px] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        {/* Left — Thank You skeleton */}
        <div className="lg:w-5/12 p-6 md:p-12 flex flex-col justify-center items-center">
          <Bone className="w-20 h-20 md:w-24 md:h-24 !rounded-full mb-6 md:mb-8" />
          <Bone className="h-8 md:h-10 w-56 mb-3" />
          <Bone className="h-4 w-72 mb-2" />
          <Bone className="h-4 w-48 mb-8" />
          <Bone className="h-8 w-56 !rounded-full mb-8 md:mb-10" />
          <div className="w-full max-w-xs space-y-4">
            <Bone className="h-14 !rounded-2xl" />
            <Bone className="h-14 !rounded-2xl" />
          </div>
          <Bone className="h-4 w-36 mt-8 md:mt-12" />
        </div>

        {/* Right — Receipt skeleton */}
        <div className="lg:w-7/12 bg-[#FAFAFA] border-t lg:border-t-0 lg:border-l border-gray-100 p-5 md:p-12">
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <Bone className="h-6 w-36" />
            <Bone className="h-4 w-24" />
          </div>

          {/* Info cards skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-start gap-3">
                  <Bone className="w-9 h-9 !rounded-lg shrink-0" />
                  <div className="flex-1">
                    <Bone className="h-3 w-28 mb-2" />
                    <Bone className="h-5 w-36 mb-1" />
                    <Bone className="h-3 w-20" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Items skeleton */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden mb-6">
            <div className="p-4 md:p-6 space-y-5 md:space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-3 md:gap-4">
                  <Bone className="w-14 h-14 md:w-16 md:h-16 !rounded-lg shrink-0" />
                  <div className="flex-1">
                    <Bone className="h-4 w-32 mb-2" />
                    <Bone className="h-3 w-20" />
                  </div>
                  <div className="text-right">
                    <Bone className="h-4 w-16 mb-1 ml-auto" />
                    <Bone className="h-3 w-10 ml-auto" />
                  </div>
                </div>
              ))}
            </div>

            <div className="relative border-b-2 border-dashed border-gray-200" />

            {/* Totals skeleton */}
            <div className="p-4 md:p-6 bg-gray-50/50 space-y-3">
              {["w-16", "w-8", "w-16"].map((w, i) => (
                <div key={i} className="flex justify-between">
                  <Bone className={`h-4 ${w}`} />
                  <Bone className="h-4 w-16" />
                </div>
              ))}
              <div className="flex justify-between pt-3 mt-3 border-t border-gray-200">
                <Bone className="h-6 w-20" />
                <Bone className="h-8 w-28" />
              </div>
            </div>
          </div>

          <Bone className="h-3 w-64 mx-auto mt-6" />
        </div>
      </div>
    </div>
  );
}

function ConfirmationContent() {
  const params = useSearchParams();
  const orderId = params.get("orderId");
  const { data: session } = useSession();
  const [order, setOrder] = useState<OrderData | null>(null);
  const [loading, setLoading] = useState(true);
  const [invoicePdfUrl, setInvoicePdfUrl] = useState<string | null>(null);
  const [invoiceLoading, setInvoiceLoading] = useState(false);

  const firstName =
    order?.shippingFirstName ||
    session?.user?.name?.split(" ")[0] ||
    "there";

  useEffect(() => {
    if (!orderId) {
      setLoading(false);
      return;
    }

    fetch(`/api/orders/${orderId}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.order) setOrder(data.order);
        setLoading(false);
      })
      .catch(() => setLoading(false));

    setInvoiceLoading(true);
    fetch(`/api/orders/${orderId}/invoice`, { method: "POST" })
      .then((r) => r.json())
      .then((data) => {
        if (data.invoicePdfUrl) setInvoicePdfUrl(data.invoicePdfUrl);
      })
      .catch(() => {})
      .finally(() => setInvoiceLoading(false));
  }, [orderId]);

  const handleDownloadInvoice = async () => {
    if (invoicePdfUrl) {
      window.open(invoicePdfUrl, "_blank");
      return;
    }
    if (!orderId || invoiceLoading) return;
    setInvoiceLoading(true);
    try {
      const res = await fetch(`/api/orders/${orderId}/invoice`, { method: "POST" });
      const data = await res.json();
      if (data.invoicePdfUrl) {
        setInvoicePdfUrl(data.invoicePdfUrl);
        window.open(data.invoicePdfUrl, "_blank");
      }
    } catch {
      // silent fail
    } finally {
      setInvoiceLoading(false);
    }
  };

  const fmtCents = (cents: number) =>
    (cents / 100).toLocaleString("en-US", { minimumFractionDigits: 2 });

  const estimatedDelivery = () => {
    const d = new Date(order?.createdAt ?? Date.now());
    d.setDate(d.getDate() + 5);
    return d.toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
    });
  };

  if (loading) {
    return <ConfirmationSkeleton />;
  }

  return (
    <div className="flex-grow flex items-center justify-center px-3 py-6 md:p-8 md:pb-16">
      <div className="w-full max-w-6xl bg-white rounded-2xl md:rounded-[32px] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        {/* Left — Thank You */}
        <div className="lg:w-5/12 p-6 md:p-12 flex flex-col justify-center items-center text-center">
          <div
            className="w-20 h-20 md:w-24 md:h-24 bg-green-50 rounded-full flex items-center justify-center mb-6 md:mb-8 shadow-sm"
            style={{ animation: "scaleIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)" }}
          >
            <CheckIcon />
          </div>

          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-main mb-2 md:mb-3">
            Thank you, {firstName}!
          </h1>

          <p className="text-secondary text-base md:text-lg mb-6 md:mb-8 leading-relaxed max-w-sm">
            Your order{" "}
            <span className="font-semibold text-main">
              #{orderId ? `AMZ-${orderId.slice(-9).toUpperCase()}` : "---"}
            </span>{" "}
            has been confirmed and will be shipped soon.
          </p>

          <div className="bg-[#F8F9FE] border border-[#635BFF]/10 rounded-full py-2 px-3 md:px-4 flex items-center gap-2 mb-8 md:mb-10">
            <div className="w-2 h-2 rounded-full bg-[#635BFF] animate-pulse" />
            <span className="text-xs font-bold text-[#635BFF] uppercase tracking-wide">
              Payment Verified via Stripe
            </span>
          </div>

          <div className="w-full max-w-xs space-y-4">
            <Link
              href="/account/orders"
              className="w-full bg-main hover:bg-accent text-bg font-bold py-4 px-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              Track Order Status
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>

            <Link
              href="/search"
              className="w-full bg-white hover:bg-gray-50 text-main font-bold py-4 px-6 rounded-2xl border-2 border-bg transition-colors duration-200 flex items-center justify-center"
            >
              Continue Shopping
            </Link>
          </div>

          <div className="mt-8 md:mt-12 opacity-50 hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-2 justify-center">
              <span className="text-[#635BFF] font-black text-lg">stripe</span>
              <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
                Secure Payment
              </span>
            </div>
          </div>
        </div>

        {/* Right — Order Receipt */}
        <div className="lg:w-7/12 bg-[#FAFAFA] border-t lg:border-t-0 lg:border-l border-gray-100 p-5 md:p-12">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <h2 className="text-xl font-bold text-main">Order Receipt</h2>
            {invoicePdfUrl ? (
              <a
                href={invoicePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-accent hover:text-[#B08230] flex items-center gap-1 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Invoice
              </a>
            ) : (
              <button
                onClick={handleDownloadInvoice}
                disabled={invoiceLoading}
                className="text-sm font-semibold text-accent hover:text-[#B08230] flex items-center gap-1 transition-colors disabled:opacity-50"
              >
                {invoiceLoading ? (
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                )}
                {invoiceLoading ? "Preparing..." : "Download Invoice"}
              </button>
            )}
          </div>

          {/* Info cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                    Estimated Delivery
                  </p>
                  <p className="text-main font-bold text-base md:text-lg">
                    {estimatedDelivery()}
                  </p>
                  <p className="text-xs text-green-500 font-semibold mt-1">
                    On Schedule
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                    Shipping To
                  </p>
                  <p className="text-main font-semibold">
                    {order?.shippingFirstName} {order?.shippingLastName}
                  </p>
                  <p className="text-sm text-gray-500">
                    {[
                      order?.shippingAddress,
                      order?.shippingCity,
                      order?.shippingPostal,
                    ]
                      .filter(Boolean)
                      .join(", ")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Items card */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden mb-6">
            <div className="p-4 md:p-6 space-y-5 md:space-y-6">
              {order?.items.map((item) => {
                const product = getProductById(item.productId);
                const imgSrc = product?.images?.[0] || product?.image;
                return (
                  <div key={item.id} className="flex items-center gap-3 md:gap-4">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-[#F5F5F5] rounded-lg shrink-0 flex items-center justify-center p-1.5 md:p-2">
                      {imgSrc ? (
                        <Image
                          src={imgSrc}
                          alt={item.productName}
                          width={48}
                          height={48}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <svg
                          className="w-8 h-8 text-main/30"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <rect
                            x="5"
                            y="2"
                            width="14"
                            height="20"
                            rx="2"
                            ry="2"
                          />
                        </svg>
                      )}
                    </div>
                    <div className="flex-grow min-w-0">
                      <h3 className="font-bold text-sm md:text-base text-main truncate">
                        {item.productName}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-500">{item.variant}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-bold text-main">
                        ${fmtCents(item.unitPrice * item.quantity)}
                      </p>
                      <p className="text-xs text-gray-400">
                        Qty: {item.quantity}
                      </p>
                    </div>
                  </div>
                );
              })}

              {!order && (
                <p className="text-sm text-gray-400 text-center py-4">
                  Order details unavailable
                </p>
              )}
            </div>

            {/* Receipt divider */}
            <div className="relative border-b-2 border-dashed border-gray-200">
              <div className="absolute -bottom-[10px] -left-[10px] w-5 h-5 bg-[#FAFAFA] rounded-full hidden lg:block" />
              <div className="absolute -bottom-[10px] -right-[10px] w-5 h-5 bg-[#FAFAFA] rounded-full hidden lg:block" />
            </div>

            {/* Totals */}
            <div className="p-4 md:p-6 bg-gray-50/50 space-y-3">
              {order && (
                <>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-medium">
                      ${fmtCents(order.subtotal)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Tax</span>
                    <span className="font-medium">
                      ${fmtCents(order.tax)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Shipping</span>
                    <span className="font-medium">
                      {order.shipping === 0 ? "Free" : `$${fmtCents(order.shipping)}`}
                    </span>
                  </div>
                  <div className="pt-3 mt-3 border-t border-gray-200 flex justify-between items-end">
                    <span className="font-bold text-main">Total Paid</span>
                    <div className="text-right">
                      <span className="block text-xs text-gray-400 mb-1">
                        USD
                      </span>
                      <span className="text-2xl font-black text-accent">
                        ${fmtCents(order.total)}
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Footer help */}
          <p className="text-xs text-center text-gray-400 mt-6">
            Need help?{" "}
            <Link href="/" className="underline hover:text-main">
              Contact Support
            </Link>{" "}
            or view our{" "}
            <Link href="/" className="underline hover:text-main">
              Return Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={<ConfirmationSkeleton />}>
      <ConfirmationContent />
    </Suspense>
  );
}
