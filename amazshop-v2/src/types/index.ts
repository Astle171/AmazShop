export interface Product {
  _id: string;
  brand: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  badge?: {
    text: string;
    variant: "dark" | "accent";
  };
  colors?: {
    name: string;
    hex: string;
  }[];
  image?: string;
  category: string;
  subcategory?: string;
  tags?: string[];
  countInStock: number;
  rating: number;
  numReviews: number;
}

export interface PLPCategory {
  name: string;
  slug: string;
  count: number;
  active?: boolean;
}

export interface Category {
  name: string;
  slug: string;
  icon: string;
}

export interface HeroBanner {
  tag: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  secondaryText: string;
  secondaryLink: string;
}

export interface FeaturedOffer {
  badge: string;
  discount: string;
  name: string;
  price: number;
  image?: string;
}

export interface PromoCard {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductVariant {
  name: string;
  active?: boolean;
}

export interface Review {
  _id: string;
  rating: number;
  title: string;
  comment: string;
  userName: string;
  initials: string;
  verified: boolean;
}

export interface ProductDetail extends Product {
  longDescription: string;
  specs: ProductSpec[];
  variants: ProductVariant[];
  finishes: { name: string; hex: string; active?: boolean }[];
  reviews: Review[];
  badgeText?: string;
  images?: string[];
}
