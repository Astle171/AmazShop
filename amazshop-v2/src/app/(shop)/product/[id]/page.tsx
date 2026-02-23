import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import SpecsSection from "@/components/product/SpecsSection";
import ReviewsSection from "@/components/product/ReviewsSection";
import PDPNewsletter from "@/components/product/PDPNewsletter";
import { getProduct } from "@/lib/api/products";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = await getProduct(id);
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} — AmazShop`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) notFound();

  const categoryName =
    product.category.charAt(0).toUpperCase() + product.category.slice(1);

  return (
    <div className="py-4">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: categoryName, href: `/search?category=${product.category}` },
          { label: product.name },
        ]}
      />

      <div className="pdp-layout">
        <div className="pdp-gallery space-y-6">
          <ProductGallery
            images={product.images}
            badgeText={product.badgeText}
          />
          <div className="hidden md:block">
            <SpecsSection specs={product.specs} />
          </div>
        </div>
        <div className="pdp-info">
          <ProductInfo product={product} />
        </div>
        <div className="md:hidden">
          <SpecsSection specs={product.specs} />
        </div>
      </div>

      <ReviewsSection reviews={product.reviews} />
      <PDPNewsletter />
    </div>
  );
}
