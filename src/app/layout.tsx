import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.turkishapples.com"),
  title: {
    default: "Turkish Apples — Varieties, quality, export, price & suppliers",
    template: "%s | Turkish Apples",
  },
  description:
    "An informational guide to Turkish apples as an export category — varieties (Red, Gala, Fuji, Golden, Granny Smith), quality standards, export system, price factors and suppliers.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Turkish Apples",
    title: "Turkish Apples — Varieties, quality, export, price & suppliers",
    description:
      "A story of an export category grown in Anatolia. Varieties, quality, export, price and suppliers of Turkish apples.",
    url: "https://www.turkishapples.com",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-cream text-bark antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
