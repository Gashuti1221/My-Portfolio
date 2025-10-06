import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import SocialSidebar from "@/components/layout/SocialSidebar";
import Footer from "@/components/layout/Footer";
import { defaultMetadata } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <Navbar />
          <SocialSidebar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
