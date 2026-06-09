import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MobileBottomNav from "@/components/layout/MobileBottomNav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DR MOBILES — Premium iPhone, Android & Mobile Service Store",
  description: "Shop premium iPhones, Android phones, accessories, wearables, and book trusted mobile service at DR MOBILES.",
  openGraph: {
    title: "DR MOBILES — Premium iPhone, Android & Mobile Service Store",
    description: "Shop premium iPhones, Android phones, accessories, wearables, and book trusted mobile service at DR MOBILES.",
    type: "website",
    locale: "en_US",
    siteName: "DR MOBILES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-brand-text-primary bg-brand-bg">
        {children}
        <MobileBottomNav />
      </body>
    </html>
  );
}
