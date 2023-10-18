"use client"

import Clients from "@/components/Clients";
import DetailSection from "@/components/DetailSection";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Section from "@/components/Section";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";


export default function Home() {
  useEffect(() => {
      Aos.init({
        disable: false
      });
  }, [])

  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    name: "About Us Page",
    description:
      "Information about 400brands, its mission and vision",
    url: "https://www.400brands.online/",
    mainEntityOfPage: {
      "@type": "AboutPage",
      name: "About 400brands",
      description: "Learn about 400brands, its mission and vision",
    },
    author: {
      "@type": "Organization",
      name: "400brands",
      description: "Your Partner for Navigating the Digital Transition. We empower businesses to thrive in the digital era through cost-effective solutions, innovation, and expert guidance.",
      url: "https://www.400brands.online/",
      logo: "https://bafybeievaspmliju6ree2vl2vlosy27bnw4kavlfbr5m5ezwyrxdz23dvy.ipfs.w3s.link/400log.png",
    },
  };

  return (
    <main className="bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Section />
      <Clients />
      <DetailSection />
      <Testimonial />
      <Footer />
    </main>
  );
}
