import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BannerNotice from "@/components/BannerNotice";

export const metadata: Metadata = {
  title: "Smart Food Donation and Distribution Platform | Share Good Food, Reduce Waste",
  description:
    "Connect surplus food from homes, restaurants, bakeries, and community kitchens with people and organizations that can use it. Simple, direct local food redistribution.",
  keywords: [
    "food donation platform",
    "smart food distribution",
    "food waste reduction",
    "community food sharing",
    "surplus food recovery",
    "local hunger relief",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[#fcfbf7] text-[#1f2d25] antialiased selection:bg-[#d8f3dc] selection:text-[#0f2e1f]"
      >
        <BannerNotice />
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
