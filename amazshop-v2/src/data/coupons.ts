export type CouponType = "shipping" | "subtotal";

export interface Coupon {
  code: string;
  label: string;
  description: string;
  successMessage: string;
  terms: string;
  type: CouponType;
  value: number;
}

export const COUPONS: Coupon[] = [
  {
    code: "FREESHIP",
    label: "Free Shipping",
    description: "100% off shipping",
    successMessage:
      "Free shipping applied! Your order ships free — no minimum required.",
    terms:
      "Valid for standard shipping within the continental US. Express and overnight shipping excluded.",
    type: "shipping",
    value: 1,
  },
  {
    code: "WELCOME",
    label: "Welcome Discount",
    description: "20% off all items",
    successMessage:
      "Welcome discount applied! Enjoy 20% off every item in your bag.",
    terms:
      "Valid on first purchase only. Cannot be combined with other subtotal discounts. Max discount $500.",
    type: "subtotal",
    value: 0.2,
  },
  {
    code: "STOCKUP",
    label: "Stock Up & Save",
    description: "15% off all items",
    successMessage:
      "Stock-up savings applied! You're getting 15% off your entire order.",
    terms:
      "Valid on orders $50+. Applies to all categories. Limited time offer.",
    type: "subtotal",
    value: 0.15,
  },
];

const DEFAULT_SHIPPING = 9.99;
const TAX_RATE = 0.08;

export function getCouponByCode(code: string): Coupon | null {
  const normalized = code.trim().toUpperCase();
  return COUPONS.find((c) => c.code === normalized) ?? null;
}

export function getSuggestedCoupons(excludeCode?: string, max = 2): Coupon[] {
  const exclude = excludeCode?.trim().toUpperCase();
  return COUPONS.filter((c) => c.code !== exclude).slice(0, max);
}

export function computeDiscount(
  coupon: Coupon,
  subtotal: number,
  shipping: number
): { discount: number; shippingAfter: number; subtotalAfter: number } {
  let discount = 0;
  let shippingAfter = shipping;
  let subtotalAfter = subtotal;

  if (coupon.type === "shipping") {
    discount = shipping * coupon.value;
    shippingAfter = Math.max(0, shipping - discount);
  } else {
    discount = subtotal * coupon.value;
    subtotalAfter = Math.max(0, subtotal - discount);
  }

  return { discount, shippingAfter, subtotalAfter };
}

export function computeOrderTotals(
  subtotal: number,
  appliedCoupon: Coupon | null = null
): {
  shipping: number;
  shippingDiscount: number;
  subtotalDiscount: number;
  subtotalAfterDiscount: number;
  shippingAfterDiscount: number;
  taxEstimate: number;
  total: number;
  savings: number;
} {
  const baseShipping = DEFAULT_SHIPPING;
  const shipping = baseShipping;
  let subtotalAfterDiscount = subtotal;
  let shippingAfterDiscount = shipping;
  let subtotalDiscount = 0;
  let shippingDiscount = 0;

  if (appliedCoupon) {
    const result = computeDiscount(appliedCoupon, subtotal, baseShipping);
    if (appliedCoupon.type === "shipping") {
      shippingDiscount = result.discount;
      shippingAfterDiscount = result.shippingAfter;
    } else {
      subtotalDiscount = result.discount;
      subtotalAfterDiscount = result.subtotalAfter;
    }
  }

  const taxEstimate =
    Math.round(subtotalAfterDiscount * TAX_RATE * 100) / 100;
  const total =
    Math.round(
      (subtotalAfterDiscount + shippingAfterDiscount + taxEstimate) * 100
    ) / 100;
  const savings = subtotalDiscount + shippingDiscount;

  return {
    shipping,
    shippingDiscount,
    subtotalDiscount,
    subtotalAfterDiscount,
    shippingAfterDiscount,
    taxEstimate,
    total,
    savings,
  };
}
