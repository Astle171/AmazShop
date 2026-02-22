import type { Product, PLPCategory } from "@/types";

export const plpCategories: PLPCategory[] = [
  { name: "Wireless Audio", slug: "wireless-audio", count: 142, active: true },
  { name: "Gaming Headsets", slug: "gaming-headsets", count: 0 },
  { name: "Studio Monitors", slug: "studio-monitors", count: 0 },
  { name: "Earbuds", slug: "earbuds", count: 0 },
];

export const plpBrands = ["Sony", "Bose", "Apple", "Sennheiser", "Beats"];

export const plpSortOptions = [
  "Recommended",
  "Price: Low to High",
  "Price: High to Low",
  "Newest Arrivals",
];

export const wirelessHeadphones: Product[] = [
  {
    _id: "plp-1",
    brand: "Sony",
    name: "WH-1000XM5 ANC",
    description:
      "Industry-leading noise cancellation with Auto NC Optimizer and crystal-clear hands-free calling.",
    price: 348.0,
    category: "audio",
    subcategory: "wireless-audio",
    tags: ["Over-ear", "Noise Canceling", "Bluetooth"],
    countInStock: 25,
    rating: 5,
    numReviews: 1204,
  },
  {
    _id: "plp-2",
    brand: "Apple",
    name: "AirPods Max - Silver",
    description:
      "High-fidelity audio with Active Noise Cancellation and spatial audio.",
    price: 549.0,
    badge: { text: "BEST SELLER", variant: "accent" },
    category: "audio",
    subcategory: "wireless-audio",
    tags: ["Over-ear", "Noise Canceling", "Bluetooth"],
    countInStock: 18,
    rating: 5,
    numReviews: 852,
  },
  {
    _id: "plp-3",
    brand: "Bose",
    name: "QuietComfort Ultra",
    description:
      "World-class noise cancellation, immersive spatial audio, and all-day comfort.",
    price: 429.0,
    category: "audio",
    subcategory: "wireless-audio",
    tags: ["Over-ear", "Noise Canceling", "Bluetooth"],
    countInStock: 12,
    rating: 4,
    numReviews: 641,
  },
  {
    _id: "plp-4",
    brand: "Sennheiser",
    name: "Momentum 4 Wireless",
    description:
      "Audiophile-grade sound with adaptive noise cancellation and 60-hour battery life.",
    price: 299.0,
    category: "audio",
    subcategory: "wireless-audio",
    tags: ["Over-ear", "Bluetooth"],
    countInStock: 20,
    rating: 4,
    numReviews: 290,
  },
  {
    _id: "plp-5",
    brand: "Sony",
    name: "WH-CH720N Noise Canceling",
    description:
      "Lightweight noise canceling headphones with multipoint Bluetooth connection.",
    price: 148.0,
    category: "audio",
    subcategory: "wireless-audio",
    tags: ["Over-ear", "Noise Canceling", "Bluetooth"],
    countInStock: 45,
    rating: 4,
    numReviews: 451,
  },
  {
    _id: "plp-6",
    brand: "Beats",
    name: "Studio Pro Wireless",
    description:
      "Premium studio-quality sound with personalized spatial audio and USB-C.",
    price: 249.0,
    category: "audio",
    subcategory: "wireless-audio",
    tags: ["Over-ear", "Bluetooth"],
    countInStock: 30,
    rating: 4,
    numReviews: 1102,
  },
];
