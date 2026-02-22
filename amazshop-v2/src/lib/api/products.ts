import type { Product, ProductDetail } from "@/types";
import { allProducts } from "@/data/products";

export interface HeroProducts {
  heroProduct: Product & { images: string[] };
  dealProduct: Product & { images: string[] };
  newArrivals: (Product & { images: string[] })[];
}

export interface SearchOptions {
  query?: string;
  category?: string;
  sortBy?: string;
  order?: "asc" | "desc";
  limit?: number;
  skip?: number;
}

/** Strip ProductDetail to base Product (exclude heavy fields) */
function toProduct(p: ProductDetail): Product {
  return {
    _id: p._id,
    brand: p.brand,
    name: p.name,
    description: p.description,
    price: p.price,
    originalPrice: p.originalPrice,
    badge: p.badge,
    colors: p.colors,
    image: p.image,
    category: p.category,
    subcategory: p.subcategory,
    tags: p.tags,
    countInStock: p.countInStock,
    rating: p.rating,
    numReviews: p.numReviews,
  };
}

function matchesQuery(p: ProductDetail, q: string): boolean {
  const searchable = [
    p.name,
    p.brand,
    p.description,
    ...(p.tags ?? []),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  const words = q.toLowerCase().split(/\s+/).filter(Boolean);
  return words.every((word) => searchable.includes(word));
}

export async function searchProducts(
  opts: SearchOptions = {}
): Promise<{ products: Product[]; total: number }> {
  const { query, category, sortBy, order = "asc", limit = 0, skip = 0 } = opts;

  let filtered = [...allProducts];

  if (query?.trim()) {
    const q = query.trim();
    filtered = filtered.filter((p) => matchesQuery(p, q));
  }

  if (category) {
    filtered = filtered.filter((p) => p.category === category);
  }

  const total = filtered.length;

  if (sortBy === "price") {
    filtered.sort((a, b) =>
      order === "desc" ? b.price - a.price : a.price - b.price
    );
  } else if (sortBy === "rating") {
    filtered.sort((a, b) =>
      order === "desc" ? b.rating - a.rating : a.rating - b.rating
    );
  }

  const sliced =
    limit > 0 ? filtered.slice(skip, skip + limit) : filtered.slice(skip);

  return {
    products: sliced.map(toProduct),
    total,
  };
}

export async function getProduct(id: string): Promise<ProductDetail | null> {
  const found = allProducts.find((p) => p._id === id);
  return found ?? null;
}

export async function getTrendingProducts(
  limit = 8
): Promise<Product[]> {
  const sorted = [...allProducts].sort((a, b) => b.rating - a.rating);
  return sorted.slice(0, limit).map(toProduct);
}

export async function getHeroProducts(): Promise<HeroProducts> {
  if (allProducts.length === 0) {
    const empty = {
      _id: "",
      brand: "",
      name: "",
      description: "",
      price: 0,
      image: "",
      category: "",
      countInStock: 0,
      rating: 0,
      numReviews: 0,
      images: [] as string[],
    };
    return {
      heroProduct: empty,
      dealProduct: empty,
      newArrivals: [],
    };
  }

  const phones = allProducts.filter((p) => p.category === "phones");
  const watches = allProducts.filter((p) => p.category === "watches");

  const heroProductRaw =
    phones.length > 0
      ? phones.reduce((a, b) => (a.price >= b.price ? a : b))
      : allProducts.reduce((a, b) => (a.price >= b.price ? a : b));
  const heroProduct = {
    ...toProduct(heroProductRaw),
    images: heroProductRaw.images ?? [heroProductRaw.image ?? ""].filter(Boolean),
  };

  const withDiscount = allProducts.filter(
    (p) => p.originalPrice != null && p.originalPrice > p.price
  );
  const dealProductRaw =
    withDiscount.length > 0
      ? withDiscount.reduce((a, b) => {
          const discountA =
            a.originalPrice != null
              ? ((a.originalPrice - a.price) / a.originalPrice) * 100
              : 0;
          const discountB =
            b.originalPrice != null
              ? ((b.originalPrice - b.price) / b.originalPrice) * 100
              : 0;
          return discountA >= discountB ? a : b;
        })
      : heroProductRaw;
  const dealProduct = {
    ...toProduct(dealProductRaw),
    images:
      dealProductRaw.images ??
      [dealProductRaw.image ?? ""].filter(Boolean),
  };

  const newArrivalsRaw = [...watches]
    .sort((a, b) => b.numReviews - a.numReviews)
    .slice(0, 3);
  const newArrivals = newArrivalsRaw.map((p) => ({
    ...toProduct(p),
    images: p.images ?? [p.image ?? ""].filter(Boolean),
  }));

  return { heroProduct, dealProduct, newArrivals };
}

export async function getProductsByCategory(
  category: string,
  limit = 12
): Promise<Product[]> {
  const filtered = allProducts.filter((p) => p.category === category);
  return filtered.slice(0, limit).map(toProduct);
}

export async function getAllBrands(): Promise<string[]> {
  const brands = new Set<string>();
  allProducts.forEach((p) => {
    if (p.brand) brands.add(p.brand);
  });
  return [...brands].sort();
}
