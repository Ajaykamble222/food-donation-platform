import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BannerNotice from "@/components/BannerNotice";

export const metadata: Metadata = {
  title: "Smart Food Donation and Distribution Platform | Student CEP Project",
  description:
    "A college academic Community Engagement Project (CEP) connecting surplus food donors (restaurants, canteens, events) with local NGOs, shelters, and volunteers to reduce food waste and alleviate hunger.",
  keywords: [
    "food donation platform",
    "smart food distribution",
    "food waste reduction",
    "CEP college project",
    "surplus food recovery",
    "zero hunger SDG",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-[#fcfbf7] text-[#1f2d25] antialiased selection:bg-[#d8f3dc] selection:text-[#0f2e1f]">
        <BannerNotice />
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
