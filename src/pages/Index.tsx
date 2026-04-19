import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Workshop from "@/components/Workshop";
import PortfolioSection from "@/components/PortfolioSection";
import GoogleReviews from "@/components/GoogleReviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Wesenberg Goldschmiede – Handgefertigter Schmuck & Skulpturen";
    const desc =
      "Atelier Wesenberg: Handgefertigter Schmuck, freie Goldobjekte und Skulpturen aus München. Tradition, Präzision und Unikate seit 1987.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Workshop />
      <PortfolioSection />
      <GoogleReviews />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
