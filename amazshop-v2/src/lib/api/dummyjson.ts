import type { Product, ProductDetail, Review, PLPCategory } from "@/types";

const BASE = "https://dummyjson.com";

// --- Field selection for performance (same benefit as GraphQL projections) ---

const PLP_FIELDS = [
  "id", "title", "price", "discountPercentage", "brand",
  "category", "rating", "stock", "tags", "thumbnail", "reviews",
].join(",");

const PDP_FIELDS = [
  "id", "title", "description", "price", "discountPercentage", "brand",
  "category", "rating", "stock", "tags", "thumbnail", "images", "reviews",
  "warrantyInformation", "shippingInformation", "dimensions", "weight",
  "sku", "returnPolicy", "availabilityStatus",
].join(",");

const TRENDING_FIELDS = [
  "id", "title", "price", "discountPercentage", "brand",
  "category", "rating", "stock", "tags", "thumbnail", "reviews",
].join(",");

// --- Category mapping: our store categories → DummyJSON slugs ---

export const CATEGORY_MAP: Record<string, string[]> = {
  phones: ["smartphones"],
  tablets: ["tablets"],
  laptops: ["laptops"],
  watches: ["mens-watches", "womens-watches"],
  audio: ["mobile-accessories"],
  gaming: ["sports-accessories"],
};

export const DUMMYJSON_TO_STORE: Record<string, string> = {};
for (const [store, djCats] of Object.entries(CATEGORY_MAP)) {
  for (const dj of djCats) {
    DUMMYJSON_TO_STORE[dj] = store;
  }
}

// --- Raw DummyJSON types ---

interface DJReview {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

interface DJProduct {
  id: number;
  title: string;
  description?: string;
  price: number;
  discountPercentage: number;
  brand: string;
  category: string;
  rating: number;
  stock: number;
  tags: string[];
  thumbnail: string;
  images?: string[];
  reviews?: DJReview[];
  warrantyInformation?: string;
  shippingInformation?: string;
  dimensions?: { width: number; height: number; depth: number };
  weight?: number;
  sku?: string;
  returnPolicy?: string;
  availabilityStatus?: string;
}

interface DJProductList {
  products: DJProduct[];
  total: number;
  skip: number;
  limit: number;
}

// --- Transform helpers ---

function toProduct(dj: DJProduct): Product {
  const hasDiscount = dj.discountPercentage > 0;
  const originalPrice = hasDiscount
    ? Math.round((dj.price / (1 - dj.discountPercentage / 100)) * 100) / 100
    : undefined;

  const discountPct = Math.round(dj.discountPercentage);

  return {
    _id: String(dj.id),
    brand: dj.brand || "Generic",
    name: dj.title,
    description: dj.description || "",
    price: dj.price,
    originalPrice,
    badge: discountPct >= 10
      ? { text: `-${discountPct}%`, variant: "accent" as const }
      : undefined,
    image: dj.thumbnail,
    category: DUMMYJSON_TO_STORE[dj.category] || dj.category,
    tags: dj.tags,
    countInStock: dj.stock,
    rating: Math.round(dj.rating * 10) / 10,
    numReviews: dj.reviews?.length ?? 0,
  };
}

function toProductDetail(dj: DJProduct): ProductDetail {
  const base = toProduct(dj);

  const specs = [];
  if (dj.warrantyInformation) specs.push({ label: "Warranty", value: dj.warrantyInformation });
  if (dj.shippingInformation) specs.push({ label: "Shipping", value: dj.shippingInformation });
  if (dj.returnPolicy) specs.push({ label: "Return Policy", value: dj.returnPolicy });
  if (dj.dimensions) {
    specs.push({
      label: "Dimensions",
      value: `${dj.dimensions.width} × ${dj.dimensions.height} × ${dj.dimensions.depth} cm`,
    });
  }
  if (dj.weight) specs.push({ label: "Weight", value: `${dj.weight} g` });
  if (dj.sku) specs.push({ label: "SKU", value: dj.sku });

  const reviews: Review[] = (dj.reviews ?? []).map((r, i) => {
    const nameParts = r.reviewerName.split(" ");
    const initials = nameParts.map((p) => p[0]).join("").slice(0, 2).toUpperCase();
    return {
      _id: `r-${dj.id}-${i}`,
      rating: r.rating,
      title: r.comment.length > 40 ? r.comment.slice(0, 40) + "…" : r.comment,
      comment: r.comment,
      userName: r.reviewerName,
      initials,
      verified: true,
    };
  });

  return {
    ...base,
    longDescription: dj.description || base.description,
    specs,
    variants: [{ name: "Standard", active: true }],
    finishes: [{ name: "Default", hex: "#2D241E", active: true }],
    reviews,
    badgeText: base.badge?.text,
    images: dj.images ?? [dj.thumbnail],
  };
}

// --- Fetch helpers ---

async function fetchJSON<T>(url: string): Promise<T> {
  const res = await fetch(url, { next: { revalidate: 300 } });
  if (!res.ok) throw new Error(`DummyJSON ${res.status}: ${url}`);
  return res.json();
}

// --- Public API ---

export interface SearchOptions {
  query?: string;
  category?: string;
  sortBy?: string;
  order?: "asc" | "desc";
  limit?: number;
  skip?: number;
}

export async function searchProducts(opts: SearchOptions = {}): Promise<{
  products: Product[];
  total: number;
}> {
  const { query, category, sortBy, order, limit = 0, skip = 0 } = opts;

  let url: string;

  if (category && CATEGORY_MAP[category]) {
    const djCategories = CATEGORY_MAP[category];
    const results = await Promise.all(
      djCategories.map((cat) =>
        fetchJSON<DJProductList>(
          `${BASE}/products/category/${cat}?select=${PLP_FIELDS}&limit=0`
        )
      )
    );
    const allProducts = results.flatMap((r) => r.products.map(toProduct));
    const total = allProducts.length;

    let sorted = allProducts;
    if (sortBy === "price") {
      sorted = [...allProducts].sort((a, b) =>
        order === "desc" ? b.price - a.price : a.price - b.price
      );
    } else if (sortBy === "rating") {
      sorted = [...allProducts].sort((a, b) =>
        order === "desc" ? b.rating - a.rating : a.rating - b.rating
      );
    }

    return {
      products: limit > 0 ? sorted.slice(skip, skip + limit) : sorted,
      total,
    };
  }

  if (query) {
    url = `${BASE}/products/search?q=${encodeURIComponent(query)}&select=${PLP_FIELDS}&limit=${limit || 50}&skip=${skip}`;
  } else {
    url = `${BASE}/products?select=${PLP_FIELDS}&limit=${limit || 50}&skip=${skip}`;
  }

  if (sortBy) url += `&sortBy=${sortBy}&order=${order || "asc"}`;

  const data = await fetchJSON<DJProductList>(url);
  return {
    products: data.products.map(toProduct),
    total: data.total,
  };
}

export async function getProduct(id: string): Promise<ProductDetail | null> {
  try {
    const dj = await fetchJSON<DJProduct>(
      `${BASE}/products/${id}?select=${PDP_FIELDS}`
    );
    return toProductDetail(dj);
  } catch {
    return null;
  }
}

export async function getTrendingProducts(limit = 8): Promise<Product[]> {
  const data = await fetchJSON<DJProductList>(
    `${BASE}/products?select=${TRENDING_FIELDS}&limit=${limit}&sortBy=rating&order=desc`
  );
  return data.products.map(toProduct);
}

export async function getProductsByCategory(
  category: string,
  limit = 12
): Promise<Product[]> {
  const djCategories = CATEGORY_MAP[category];
  if (!djCategories) return [];

  const results = await Promise.all(
    djCategories.map((cat) =>
      fetchJSON<DJProductList>(
        `${BASE}/products/category/${cat}?select=${PLP_FIELDS}&limit=${limit}`
      )
    )
  );

  return results.flatMap((r) => r.products.map(toProduct));
}

const HERO_FIELDS = [
  "id", "title", "price", "discountPercentage", "brand",
  "category", "rating", "stock", "tags", "thumbnail", "images", "description",
].join(",");

export interface HeroProducts {
  heroProduct: Product & { images: string[] };
  dealProduct: Product & { images: string[] };
  newArrivals: (Product & { images: string[] })[];
}

export async function getHeroProducts(): Promise<HeroProducts> {
  const [smartphones, laptops, watches] = await Promise.all([
    fetchJSON<DJProductList>(
      `${BASE}/products/category/smartphones?select=${HERO_FIELDS}&limit=5&sortBy=price&order=desc`
    ),
    fetchJSON<DJProductList>(
      `${BASE}/products/category/laptops?select=${HERO_FIELDS}&limit=3&sortBy=rating&order=desc`
    ),
    fetchJSON<DJProductList>(
      `${BASE}/products/category/mens-watches?select=${HERO_FIELDS}&limit=3&sortBy=rating&order=desc`
    ),
  ]);

  const heroRaw = smartphones.products[0] || laptops.products[0];
  const heroProduct = {
    ...toProduct(heroRaw),
    images: heroRaw.images ?? [heroRaw.thumbnail],
  };

  const allForDeal = [...smartphones.products, ...laptops.products];
  const dealRaw = allForDeal.sort((a, b) => b.discountPercentage - a.discountPercentage)[0];
  const dealProduct = {
    ...toProduct(dealRaw),
    images: dealRaw.images ?? [dealRaw.thumbnail],
  };

  const arrivalRaws = watches.products.slice(0, 3);
  const newArrivals = arrivalRaws.map((dj) => ({
    ...toProduct(dj),
    images: dj.images ?? [dj.thumbnail],
  }));

  return { heroProduct, dealProduct, newArrivals };
}

export async function getAllBrands(): Promise<string[]> {
  const data = await fetchJSON<DJProductList>(
    `${BASE}/products?select=brand&limit=0`
  );
  const brands = new Set<string>();
  data.products.forEach((p) => {
    if (p.brand) brands.add(p.brand);
  });
  return [...brands].sort();
}

export async function getCategories(): Promise<PLPCategory[]> {
  const cats = await fetchJSON<{ slug: string; name: string }[]>(
    `${BASE}/products/categories`
  );

  const relevant = cats.filter((c) => Object.values(DUMMYJSON_TO_STORE).length === 0 || c.slug in DUMMYJSON_TO_STORE);

  return relevant.map((c) => ({
    name: DUMMYJSON_TO_STORE[c.slug]
      ? c.name
      : c.name,
    slug: DUMMYJSON_TO_STORE[c.slug] || c.slug,
    count: 0,
  }));
}
