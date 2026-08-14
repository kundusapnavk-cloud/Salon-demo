import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Star } from "lucide-react";
import { salon } from "../../config/salon";
import { scrollToId } from "../../lib/scroll";
import { useBooking } from "../../context/BookingContext";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const ref = useRef(null);
  const { openBooking } = useBooking();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      data-testid="hero-section"
      className="grain relative flex min-h-screen items-end overflow-hidden bg-ink"
    >
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0">
        <img
          src={salon.hero.image}
          alt={salon.hero.imageAlt}
          className="h-full w-full object-cover brightness-[0.6] sepia-[0.3]"
          fetchpriority="high"
        />
      </motion.div>
      <div className="absolute inset-0 bg-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-ink/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/55 via-ink/20 to-transparent" />

      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-24 pt-40 [text-shadow:0_2px_24px_rgba(0,0,0,0.5)] md:pb-32 lg:px-8"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease }}
          className="text-xs font-semibold uppercase tracking-[0.3em] text-cream/70"
        >
          {salon.hero.overline}
        </motion.p>

        <h1 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-cream sm:text-5xl lg:text-6xl">
          {salon.hero.lines.map((line, i) => (
            <span key={line.text} className="block overflow-hidden pb-1">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.3 + i * 0.14, ease }}
                className={`block ${line.accent ? "italic text-brand" : ""}`}
              >
                {line.text}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85, ease }}
          className="mt-6 max-w-xl text-base leading-relaxed text-cream/75 md:text-lg"
        >
          {salon.hero.subheading}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1, ease }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => openBooking()}
            data-testid="hero-book-button"
            className="rounded-full bg-brand px-8 py-4 text-sm font-semibold text-cream transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-hover"
          >
            Book Appointment
          </button>
          <button
            onClick={() => scrollToId("services")}
            data-testid="hero-explore-button"
            className="rounded-full border border-cream/30 px-8 py-4 text-sm font-semibold text-cream transition-colors duration-200 hover:border-cream/60 hover:bg-cream/10"
          >
            Explore Services
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.15, ease }}
          data-testid="hero-rating"
          className="mt-10 flex items-center gap-3"
        >
          <span className="flex gap-1 text-[#D9A441]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
            ))}
          </span>
          <span className="text-sm font-semibold text-cream">
            {salon.rating.value}/5
          </span>
          <span className="h-1 w-1 rounded-full bg-cream/40" />
          <span className="text-sm text-cream/65">
            {salon.rating.label} · {salon.rating.count}+ reviews
          </span>
        </motion.div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        onClick={() => scrollToId("about")}
        data-testid="hero-scroll-indicator"
        aria-label="Scroll to about section"
        className="absolute bottom-6 right-6 z-10 hidden h-12 w-12 place-items-center rounded-full border border-cream/25 text-cream/70 transition-colors hover:border-cream/60 hover:text-cream md:grid"
      >
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.button>
    </section>
  );
}
