import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search Products | AmazShop",
  description: "Browse and search our full product catalog.",
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
