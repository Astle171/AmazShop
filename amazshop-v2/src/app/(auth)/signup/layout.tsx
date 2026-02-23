import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Account — AmazShop",
  description: "Join AmazShop and start shopping smarter.",
};

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
