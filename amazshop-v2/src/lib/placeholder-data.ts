import type {
  Product,
  Category,
  HeroBanner,
  FeaturedOffer,
  PromoCard,
} from "@/types";

export const heroBanner: HeroBanner = {
  tag: "Summer Collection 2024",
  titleLine1: "Next Gen",
  titleLine2: "Smart Tech.",
  description:
    "Upgrade your lifestyle with our curated selection of flagship devices designed for the modern creator.",
  ctaText: "SHOP NOW",
  ctaLink: "/products",
  secondaryText: "View Lookbook",
  secondaryLink: "/lookbook",
};

export const featuredOffer: FeaturedOffer = {
  badge: "Limited Offer",
  discount: "-25%",
  name: "Studio Pro Wireless",
  price: 299.0,
};

export const promoCard: PromoCard = {
  title: "New Arrivals",
  description: "Check out the latest smartwatch bands.",
  linkText: "Browse Collection",
  linkHref: "/collections/new-arrivals",
};

export const categories: Category[] = [
  { name: "Phones", slug: "phones", icon: "smartphone" },
  { name: "Tablets", slug: "tablets", icon: "tablet" },
  { name: "Laptops", slug: "laptops", icon: "laptop" },
  { name: "Watches", slug: "watches", icon: "watch" },
  { name: "Audio", slug: "audio", icon: "headphones" },
  { name: "Gaming", slug: "gaming", icon: "gamepad" },
];

export const trendingProducts: Product[] = [
  {
    _id: "1",
    brand: "Google",
    name: "Pixel Pro 7",
    description: "The most advanced Pixel camera ever with Google Tensor G2.",
    price: 899.0,
    badge: { text: "NEW", variant: "dark" },
    colors: [
      { name: "Obsidian", hex: "#000000" },
      { name: "Snow", hex: "#E5E7EB" },
    ],
    category: "phones",
    countInStock: 10,
    rating: 4.5,
    numReviews: 128,
  },
  {
    _id: "2",
    brand: "Sony",
    name: "WH-1000XM5",
    description: "Industry leading noise canceling with Auto NC Optimizer.",
    price: 348.0,
    originalPrice: 399.0,
    badge: { text: "-15%", variant: "accent" },
    colors: [],
    category: "audio",
    countInStock: 25,
    rating: 4.8,
    numReviews: 342,
  },
  {
    _id: "3",
    brand: "Samsung",
    name: "Galaxy Watch 6",
    description: "Start your wellness journey with classic style.",
    price: 299.0,
    colors: [
      { name: "Graphite", hex: "#1E293B" },
      { name: "Gold", hex: "#E5D0BA" },
    ],
    category: "watches",
    countInStock: 15,
    rating: 4.3,
    numReviews: 89,
  },
  {
    _id: "4",
    brand: "Apple",
    name: "MacBook Air M2",
    description: "Supercharged by M2. Don't take it lightly.",
    price: 1099.0,
    colors: [
      { name: "Midnight", hex: "#242A36" },
      { name: "Silver", hex: "#E5E7EB" },
      { name: "Starlight", hex: "#F0E5D3" },
    ],
    category: "laptops",
    countInStock: 8,
    rating: 4.9,
    numReviews: 567,
  },
];
