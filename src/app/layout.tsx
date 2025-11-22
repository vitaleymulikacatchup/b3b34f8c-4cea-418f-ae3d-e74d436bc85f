import type { Metadata } from "next";
import { Inter_Tight, Inter } from "next/font/google";
import "./globals.css";
import { PostHogWrapper } from "@/components/PostHogWrapper";
import Tag from "@/tag/Tag";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Medical Workshop | Professional Healthcare Training",
  description: "Expert-led medical workshops offering hands-on clinical training, CE credits, and professional development for healthcare professionals.",
  keywords: "medical workshop, healthcare training, clinical education, CE credits, professional development",
  metadataBase: new URL("https://medicalworkshop.com"),
  alternates: {
    canonical: "https://medicalworkshop.com"
  },
  openGraph: {
    title: "Medical Workshop | Professional Healthcare Training",
    description: "Transform your medical practice with our comprehensive workshops designed for healthcare professionals.",
    siteName: "Medical Workshop",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Medical Workshop | Professional Healthcare Training",
    description: "Expert-led medical workshops offering hands-on clinical training and CE credits."
  }
};