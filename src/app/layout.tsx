import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lazlle & Co. - Your Growth Engine | AI-Powered Business Automation",
  description: "Transform your business with Lazlle & Co.'s AI-powered automation solutions. We help restaurants, agencies, gyms, and corporates streamline operations, boost efficiency, and scale smarter. Experience the future of business automation today.",
  keywords: ["Lazlle & Co", "AI automation", "business automation", "restaurant automation", "workflow automation", "AI solutions", "digital transformation", "business efficiency", "scalable automation"],
  authors: [{ name: "Lazlle & Co. Team" }],
  openGraph: {
    title: "Lazlle & Co. - Your Growth Engine",
    description: "AI-powered automation solutions for modern businesses",
    url: "https://lazlle.studio",
    siteName: "Lazlle & Co.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lazlle & Co. - Your Growth Engine",
    description: "AI-powered automation solutions for modern businesses",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
