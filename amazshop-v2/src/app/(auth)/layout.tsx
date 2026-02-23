import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In — AmazShop",
  description: "Sign in to manage your orders and profile.",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
