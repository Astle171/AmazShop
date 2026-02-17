import { Inter, Fira_Code, Dancing_Script } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-signature",
  weight: ["700"],
});

export const metadata = {
  title: "Astle Machado | Senior Software Engineer",
  description:
    "Portfolio of Astle Machado — Senior Software Engineer specializing in React, Node.js, AWS, and performance optimization. 5+ years building scalable web applications.",
  keywords: [
    "Astle Machado",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Node.js",
    "Portfolio",
  ],
  openGraph: {
    title: "Astle Machado | Senior Software Engineer",
    description:
      "Building With Purpose, Coding With Precision. 5+ years of experience in full-stack development.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${firaCode.variable} ${dancingScript.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
