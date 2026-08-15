import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { salon } from "../../config/salon";
import { scrollToId } from "../../lib/scroll";
import { useBooking } from "../../context/BookingContext";

const links = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Gallery", id: "gallery" },
  { label: "Reviews", id: "reviews" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openBooking } = useBooking();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e, id) => {
    e.preventDefault();
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header
      data-testid="main-navigation"
      className={`fixed inset-x-0 top-0 z-50 border-b bg-white/80 backdrop-blur-xl transition-shadow duration-300 ${
        scrolled ? "border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)]" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 lg:px-8">
        <a
          href="#home"
          onClick={(e) => go(e, "home")}
          data-testid="nav-logo"
          className="flex flex-col leading-none"
          aria-label={`${salon.brand.name} — home`}
        >
          <span className="font-serif text-2xl font-semibold tracking-tight text-ink">
            {salon.brand.name}
          </span>
          <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-brand">
            {salon.brand.suffix}
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => go(e, l.id)}
              data-testid={`nav-link-${l.id}`}
              className="text-sm font-medium text-ink/70 transition-colors duration-200 hover:text-brand"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${salon.contact.phoneLink}`}
            data-testid="nav-call-link"
            className="hidden items-center gap-2 text-sm font-medium text-ink/70 transition-colors hover:text-brand xl:flex"
          >
            <Phone size={15} strokeWidth={1.8} />
            {salon.contact.phoneDisplay}
          </a>
          <button
            onClick={() => openBooking()}
            data-testid="nav-book-button"
            className="hidden rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-cream transition-colors duration-200 hover:bg-brand-hover sm:block"
          >
            Book on WhatsApp
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            data-testid="nav-menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 text-ink lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-black/5 bg-white/95 backdrop-blur-xl lg:hidden"
            aria-label="Mobile"
          >
            <div className="space-y-1 px-5 py-5">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={(e) => go(e, l.id)}
                  data-testid={`mobile-nav-link-${l.id}`}
                  className="block rounded-md px-3 py-3 font-serif text-xl text-ink transition-colors hover:bg-warm hover:text-brand"
                >
                  {l.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setOpen(false);
                  openBooking();
                }}
                data-testid="mobile-nav-book-button"
                className="mt-3 w-full rounded-full bg-brand py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-brand-hover"
              >
                Book on WhatsApp
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
