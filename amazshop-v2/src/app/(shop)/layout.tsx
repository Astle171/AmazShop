import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex-1 max-w-[1400px] w-full mx-auto px-4 md:px-6 py-4 md:py-8">
        {children}
      </main>
      <Footer />
    </>
  );
}
