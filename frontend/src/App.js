import { useEffect } from "react";
import Lenis from "lenis";
import { salon } from "@/config/salon";
import { BookingProvider } from "@/context/BookingContext";
import Navbar from "@/components/salon/Navbar";
import Hero from "@/components/salon/Hero";
import Marquee from "@/components/salon/Marquee";
import About from "@/components/salon/About";
import Featured from "@/components/salon/Featured";
import Services from "@/components/salon/Services";
import WhyUs from "@/components/salon/WhyUs";
import Gallery from "@/components/salon/Gallery";
import Reviews from "@/components/salon/Reviews";
import Instagram from "@/components/salon/Instagram";
import BookingCTA from "@/components/salon/BookingCTA";
import Contact from "@/components/salon/Contact";
import Footer from "@/components/salon/Footer";
import FloatingActions from "@/components/salon/FloatingActions";
import BookingModal from "@/components/salon/BookingModal";

export default function App() {
  useEffect(() => {
    const root = document.documentElement;
    const hexToRgb = (hex) => {
      const v = hex.replace("#", "");
      return [0, 2, 4].map((i) => parseInt(v.slice(i, i + 2), 16)).join(" ");
    };
    Object.entries(salon.brand.colors).forEach(([key, value]) => {
      root.style.setProperty(`--brand-${key}`, value);
      root.style.setProperty(`--brand-${key}-rgb`, hexToRgb(value));
    });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    window.__lenis = lenis;
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <BookingProvider>
      <div className="min-h-screen bg-cream font-sans text-ink antialiased">
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <About />
          <Featured />
          <Services />
          <WhyUs />
          <Gallery />
          <Reviews />
          <Instagram />
          <BookingCTA />
          <Contact />
        </main>
        <Footer />
        <div className="h-16 md:hidden" aria-hidden="true" />
        <FloatingActions />
        <BookingModal />
      </div>
    </BookingProvider>
  );
}
