import "./globals.css";
import type { Metadata } from "next";
import { IconURL } from "next/dist/lib/metadata/types/metadata-types";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
import { Nunito } from "next/font/google";
import Head from "next/head";

const inter = Nunito({ subsets: ["vietnamese"] });

// Define your icon data conforming to the Icons type
const iconsData: IconURL =
  "https://bafybeievaspmliju6ree2vl2vlosy27bnw4kavlfbr5m5ezwyrxdz23dvy.ipfs.w3s.link/400log.png";

const openGraph: OpenGraph = {
  type: "website",
  url: "https://www.400brands.com/",
  title:
  "Empowering Businesses for a Digital Future | 400Brands",
  description:
    "400 Brands: Your Partner for Navigating the Digital Transition. We empower businesses to thrive in the digital era through cost-effective solutions, innovation, and expert guidance. Join us on this transformative journey today.",
  siteName: "400 Brands",
  images: [
    {
      url: "https://bafybeievaspmliju6ree2vl2vlosy27bnw4kavlfbr5m5ezwyrxdz23dvy.ipfs.w3s.link/400log.png",
    },
  ],
};

export const metadata: Metadata = {
  title:
    "Empowering Businesses for a Digital Future | 400Brands",
  description:
    "400 Brands: Your Partner for Navigating the Digital Transition. We empower businesses to thrive in the digital era through cost-effective solutions, innovation, and expert guidance. Join us on this transformative journey today.",
  icons: iconsData,
  openGraph: openGraph,
  alternates: {
    canonical: "https://www.400brands.com",
  },
  verification: {
    google: "google-site-verification=",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
