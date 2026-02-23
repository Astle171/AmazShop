import HeroBento from "@/components/home/HeroBento";
import CategorySection from "@/components/home/CategorySection";
import TrendingSection from "@/components/home/TrendingSection";
import Newsletter from "@/components/home/Newsletter";
import { categories } from "@/lib/placeholder-data";
import { getTrendingProducts, getHeroProducts } from "@/lib/api/products";

export default async function HomePage() {
  const [heroData, trendingProducts] = await Promise.all([
    getHeroProducts(),
    getTrendingProducts(8),
  ]);

  return (
    <>
      <HeroBento
        heroProduct={heroData.heroProduct}
        dealProduct={heroData.dealProduct}
        newArrivals={heroData.newArrivals}
      />
      <CategorySection categories={categories} />
      <TrendingSection products={trendingProducts} />
      <Newsletter />
    </>
  );
}
