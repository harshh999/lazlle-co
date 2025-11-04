import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Chatbot from "@/components/Chatbot";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Lazlle Studio - Full-Service 360° Digital Studio",
  description: "From idea to execution — we build what the future needs. Full-service digital studio delivering design, development, marketing, and consulting solutions.",
  keywords: ["Lazlle Studio", "digital studio", "web development", "design", "marketing", "consulting", "SaaS", "e-commerce"],
  authors: [{ name: "Lazlle Studio" }],
  openGraph: {
    title: "Lazlle Studio - Full-Service 360° Digital Studio",
    description: "From idea to execution — we build what the future needs.",
    url: "https://lazlle.com",
    siteName: "Lazlle Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lazlle Studio",
    description: "From idea to execution — we build what the future needs.",
  },
  icons: {
    icon: "logo.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${inter.variable} font-sans antialiased bg-[#0E0E0E] text-white`}
      >
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 scroll-smooth">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
          <Chatbot />
        </div>
        <Toaster />
        <SonnerToaster />
      </body>
    </html>
  );
}
