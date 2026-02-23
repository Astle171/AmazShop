"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { getProductById } from "@/lib/product-lookup";

interface OrderItem {
  id: string;
  productId: string;
  productName: string;
  variant: string;
  quantity: number;
  unitPrice: number;
}

interface Order {
  id: string;
  status: string;
  total: number;
  stripePaymentId: string;
  createdAt: string;
  items: OrderItem[];
}

type ComputedStatus = "CONFIRMED" | "SHIPPED" | "DELIVERED";

function computeStatus(createdAt: string): ComputedStatus {
  const now = Date.now();
  const created = new Date(createdAt).getTime();
  const daysSince = (now - created) / (1000 * 60 * 60 * 24);
  if (daysSince >= 3) return "DELIVERED";
  if (daysSince >= 2) return "SHIPPED";
  return "CONFIRMED";
}


const STATUS_CONFIG = {
  CONFIRMED: {
    barColor: "bg-emerald-500",
    badgeBg: "bg-emerald-50",
    badgeText: "text-emerald-600",
    badgeBorder: "border-green-100",
    sublabel: "Processing your order",
  },
  SHIPPED: {
    barColor: "bg-blue-500",
    badgeBg: "bg-blue-50",
    badgeText: "text-blue-600",
    badgeBorder: "border-blue-100",
    sublabel: "",
  },
  DELIVERED: {
    barColor: "bg-gray-300",
    badgeBg: "bg-gray-50",
    badgeText: "text-gray-500",
    badgeBorder: "border-gray-200",
    sublabel: "Delivered successfully",
  },
} as const;

function OrderProgressBar({ status }: { status: ComputedStatus }) {
  if (status === "DELIVERED") return null;

  const pct = status === "CONFIRMED" ? "w-[30%]" : "w-[70%]";
  const color = status === "CONFIRMED" ? "bg-emerald-500" : "bg-blue-500";

  return (
    <div className="w-full max-w-xs bg-gray-100 rounded-full h-1.5 mt-2">
      <div className={`h-full rounded-full transition-all duration-500 ${color} ${pct}`} />
    </div>
  );
}

function ViewInvoiceLink({ orderId }: { orderId: string }) {
  const [loading, setLoading] = useState(false);

  const handleClick = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/orders/${orderId}?include=stripe`);
      const data = await res.json();
      if (data.receiptUrl) {
        window.open(data.receiptUrl, "_blank");
      }
    } catch {
      // silent
    } finally {
      setLoading(false);
    }
  }, [orderId, loading]);

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="text-xs font-bold text-accent hover:underline disabled:opacity-50"
    >
      {loading ? "Loading..." : "View Invoice"}
    </button>
  );
}

function ItemRow({ item, isLast }: { item: OrderItem; isLast: boolean }) {
  const product = getProductById(item.productId);
  const imgSrc = product?.images?.[0] || product?.image;
  const fmtCents = (c: number) =>
    (c / 100).toLocaleString("en-US", { minimumFractionDigits: 2 });

  return (
    <>
      <div className="flex gap-4 sm:gap-6 items-start">
        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#F5F5F5] rounded-xl flex items-center justify-center p-2 sm:p-4 border border-gray-100 shrink-0">
          {imgSrc ? (
            <Image src={imgSrc} alt={item.productName} width={64} height={64} className="w-full h-full object-contain" />
          ) : (
            <svg className="w-full h-full text-main/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
            </svg>
          )}
        </div>
        <div className="flex-grow min-w-0 pt-0.5">
          <h4 className="text-sm sm:text-base font-bold text-main leading-snug mb-0.5 sm:mb-1 truncate">{item.productName}</h4>
          {item.variant !== "Standard" && (
            <p className="text-xs sm:text-sm text-gray-500 mb-1.5 sm:mb-2">{item.variant}</p>
          )}
          <span className="inline-flex items-center px-2 py-0.5 bg-gray-50 rounded-md text-[11px] sm:text-xs font-bold text-gray-500 border border-gray-100">
            Qty: {item.quantity}
          </span>
        </div>
        <div className="text-right shrink-0 hidden sm:block pt-0.5">
          <p className="text-base sm:text-lg font-black text-main">${fmtCents(item.unitPrice * item.quantity)}</p>
        </div>
      </div>
      {!isLast && <div className="h-px bg-gray-100 w-full" />}
    </>
  );
}

function BuyAgainButton({ items }: { items: OrderItem[] }) {
  const router = useRouter();

  const handleBuyAgain = useCallback(() => {
    for (const item of items) {
      fetch("/api/cart/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: item.productId,
          variant: item.variant,
          quantity: item.quantity,
        }),
      });
    }
    router.push("/cart");
  }, [items, router]);

  return (
    <button
      onClick={handleBuyAgain}
      className="flex-grow lg:flex-grow-0 w-full bg-main hover:bg-accent text-white text-xs sm:text-sm font-bold py-2.5 sm:py-3 px-4 rounded-xl transition-all shadow-md hover:shadow-lg text-center"
    >
      Buy Again
    </button>
  );
}

function OrderCard({ order }: { order: Order }) {
  const status = computeStatus(order.createdAt);
  const cfg = STATUS_CONFIG[status];
  const fmtCents = (c: number) => (c / 100).toLocaleString("en-US", { minimumFractionDigits: 2 });
  const orderNum = `#AMZ-${order.id.slice(-9).toUpperCase()}`;

  const d = new Date(order.createdAt);
  const month = d.toLocaleDateString("en-US", { month: "short" }).toUpperCase();
  const day = d.getDate();

  const statusLabel = status === "CONFIRMED" ? "Confirmed" : status === "SHIPPED" ? "Shipped" : "Delivered";

  const sublabel = status === "SHIPPED"
    ? `Arriving ${new Date(d.getTime() + 3 * 86400000).toLocaleDateString("en-US", { weekday: "long" })}`
    : cfg.sublabel;

  return (
    <div className={`bg-white rounded-2xl border shadow-sm overflow-hidden relative transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
      status === "SHIPPED" ? "border-blue-100" : "border-main/5"
    } ${status === "DELIVERED" ? "opacity-90 hover:opacity-100" : ""}`}>
      {/* Left color bar */}
      <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${cfg.barColor}`} />

      <div className="p-4 sm:p-6 md:p-8 pl-6 sm:pl-8 md:pl-10 flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Date badge — hidden on mobile */}
        <div className={`hidden md:flex flex-col items-center justify-center w-20 h-20 ${cfg.badgeBg} ${cfg.badgeText} rounded-2xl shrink-0 border ${cfg.badgeBorder} self-start`}>
          <span className="text-xs font-bold uppercase tracking-wide">{month}</span>
          <span className="text-2xl font-black">{day}</span>
        </div>

        {/* Main content */}
        <div className="flex-grow space-y-5 min-w-0">
          {/* Status header + order number */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-1">
                <h3 className="text-base sm:text-lg font-black text-main">{statusLabel}</h3>
                {sublabel && (
                  <span className="text-xs sm:text-sm font-medium text-gray-500">• {sublabel}</span>
                )}
              </div>
              <OrderProgressBar status={status} />
            </div>
            <div className="text-left sm:text-right shrink-0">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Order {orderNum}</p>
              <ViewInvoiceLink orderId={order.id} />
            </div>
          </div>

          {/* Item rows */}
          <div className="space-y-4 sm:space-y-5">
            {order.items.map((item, idx) => (
              <ItemRow key={item.id} item={item} isLast={idx === order.items.length - 1} />
            ))}
          </div>
        </div>

        {/* Action buttons — top-aligned */}
        <div className="lg:w-44 shrink-0 flex flex-row lg:flex-col gap-2.5 lg:border-l lg:border-gray-100 lg:pl-8 lg:pt-0">
          {status === "SHIPPED" ? (
            <>
              <Link
                href={`/checkout/confirmation?orderId=${order.id}`}
                className="flex-grow lg:flex-grow-0 w-full bg-main hover:bg-blue-600 text-white text-xs sm:text-sm font-bold py-2.5 sm:py-3 px-4 rounded-xl transition-all shadow-md hover:shadow-lg text-center"
              >
                Track Package
              </Link>
              <Link
                href={`/checkout/confirmation?orderId=${order.id}`}
                className="flex-grow lg:flex-grow-0 w-full bg-white border border-main/10 text-main text-xs sm:text-sm font-bold py-2.5 sm:py-3 px-4 rounded-xl hover:bg-gray-50 transition-colors text-center"
              >
                Change Details
              </Link>
            </>
          ) : (
            <>
              <BuyAgainButton items={order.items} />
              <Link
                href={`/checkout/confirmation?orderId=${order.id}`}
                className="flex-grow lg:flex-grow-0 w-full bg-white border border-main/10 text-main text-xs sm:text-sm font-bold py-2.5 sm:py-3 px-4 rounded-xl hover:bg-gray-50 transition-colors text-center"
              >
                Order Details
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 px-4 sm:px-6 md:px-8 pl-6 sm:pl-8 md:pl-10 py-2.5 sm:py-3 border-t border-gray-100 flex items-center justify-between text-[11px] sm:text-xs">
        <span className="font-bold text-gray-400">Paid via Stripe</span>
        <span className="font-bold text-main">Total: ${fmtCents(order.total)}</span>
      </div>
    </div>
  );
}

function Bone({ className }: { className?: string }) {
  return <div className={`animate-pulse bg-main/[0.07] rounded-lg ${className ?? ""}`} />;
}

function OrdersSkeleton() {
  return (
    <div className="space-y-6">
      {[1, 2].map((i) => (
        <div key={i} className="bg-white rounded-2xl border border-main/5 shadow-sm overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-main/[0.07]" />
          <div className="p-4 sm:p-6 md:p-8 pl-6 sm:pl-8 md:pl-10 flex flex-col lg:flex-row gap-6 lg:gap-8">
            <Bone className="hidden md:block w-20 h-20 !rounded-2xl shrink-0" />
            <div className="flex-grow space-y-5">
              <div className="flex flex-col sm:flex-row justify-between gap-3">
                <div>
                  <Bone className="h-5 w-40 sm:w-52 mb-2" />
                  <Bone className="h-1.5 w-32 !rounded-full" />
                </div>
                <div className="sm:text-right">
                  <Bone className="h-3 w-28 mb-1.5" />
                  <Bone className="h-3 w-16" />
                </div>
              </div>
              <div className="flex gap-4 sm:gap-6 items-start">
                <Bone className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 !rounded-xl shrink-0" />
                <div className="flex-grow pt-0.5">
                  <Bone className="h-4 w-40 sm:w-52 mb-2" />
                  <Bone className="h-3 w-24 mb-2" />
                  <Bone className="h-5 w-12 !rounded-md" />
                </div>
                <Bone className="hidden sm:block h-5 w-20" />
              </div>
            </div>
            <div className="lg:w-44 shrink-0 flex flex-row lg:flex-col gap-2.5 lg:pt-0">
              <Bone className="h-10 sm:h-11 flex-grow lg:flex-grow-0 lg:w-full !rounded-xl" />
              <Bone className="h-10 sm:h-11 flex-grow lg:flex-grow-0 lg:w-full !rounded-xl" />
            </div>
          </div>
          <div className="bg-gray-50/50 px-4 sm:px-6 md:px-8 pl-6 sm:pl-8 md:pl-10 py-3 border-t border-gray-100 flex justify-between">
            <Bone className="h-3 w-24" />
            <Bone className="h-3 w-20" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function MyOrdersPage() {
  const { data: session, status: authStatus } = useSession();
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authStatus === "loading") return;
    if (!session?.user) {
      router.replace("/login?callbackUrl=/account/orders");
      return;
    }
    fetch("/api/orders")
      .then((r) => r.json())
      .then((data) => {
        if (data.orders) setOrders(data.orders);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [session, authStatus, router]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-4xl font-black text-main tracking-tight mb-2">
            Your Orders
          </h1>
          <p className="text-sm sm:text-base text-secondary">
            Manage and track your recent purchases from Amazshop.
          </p>
        </div>
      </div>

      {loading ? (
        <OrdersSkeleton />
      ) : orders.length === 0 ? (
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-12 text-center">
          <svg className="w-16 h-16 mx-auto text-main/20 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <h3 className="text-lg font-bold text-main mb-2">No orders yet</h3>
          <p className="text-secondary mb-6">Start shopping to see your orders here.</p>
          <Link
            href="/search"
            className="inline-block bg-main text-white px-8 py-3 rounded-xl font-bold hover:bg-accent transition-colors"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
}
