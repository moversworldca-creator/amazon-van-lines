import type { Metadata } from "next";
import Header from "@/components/Navbar";
import Hero from "@/components/Hero";
import HomeSections from "@/components/HomePage";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Amazon Van Lines | #1 Rated Movers in Canada",
  description: "Reliable and affordable moving services for residential and commercial relocations. We handle everything from packing to delivery with extreme care.",
};

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <HomeSections />
      <Footer />
    </div>
  );
}
