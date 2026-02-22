import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "AmazShop — Next Gen Smart Tech",
  description:
    "Upgrade your lifestyle with our curated selection of flagship devices designed for the modern creator.",
  icons: {
    icon: "/favicon-logo.png",
    apple: "/favicon-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1 max-w-[1400px] w-full mx-auto px-6 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
