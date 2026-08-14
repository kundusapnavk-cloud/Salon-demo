import { Instagram, Facebook, Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { salon, whatsappLink } from "../../config/salon";
import { scrollToId } from "../../lib/scroll";

const quickLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Gallery", id: "gallery" },
  { label: "Reviews", id: "reviews" },
  { label: "Contact", id: "contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const go = (e, id) => {
    e.preventDefault();
    scrollToId(id);
  };
  return (
    <footer data-testid="site-footer" className="bg-ink text-cream/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="font-serif text-3xl font-semibold tracking-tight text-cream">
            {salon.brand.name}
          </p>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-brand">
            {salon.brand.suffix}
          </p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/50">
            {salon.brand.description}
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={salon.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-instagram-link"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-cream/15 text-cream/70 transition-colors duration-200 hover:border-brand hover:bg-brand hover:text-cream"
            >
              <Instagram size={16} />
            </a>
            <a
              href={salon.contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-facebook-link"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full border border-cream/15 text-cream/70 transition-colors duration-200 hover:border-brand hover:bg-brand hover:text-cream"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>

        <nav aria-label="Footer">
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-cream/40">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={(e) => go(e, l.id)}
                  data-testid={`footer-link-${l.id}`}
                  className="text-sm text-cream/65 transition-colors hover:text-brand"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-cream/40">
            Services
          </h3>
          <ul className="mt-5 space-y-3">
            {salon.categories.map((c) => (
              <li key={c.id}>
                <a
                  href="#services"
                  onClick={(e) => go(e, "services")}
                  data-testid={`footer-service-${c.id}`}
                  className="text-sm text-cream/65 transition-colors hover:text-brand"
                >
                  {c.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-cream/40">
            Contact
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-cream/65">
            <li className="flex items-center gap-3">
              <Phone size={14} className="shrink-0 text-brand" />
              <a href={`tel:${salon.contact.phoneLink}`} data-testid="footer-phone-link" className="transition-colors hover:text-brand">
                {salon.contact.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle size={14} className="shrink-0 text-brand" />
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" data-testid="footer-whatsapp-link" className="transition-colors hover:text-brand">
                WhatsApp Us
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={14} className="mt-0.5 shrink-0 text-brand" />
              <span>{salon.contact.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={14} className="mt-0.5 shrink-0 text-brand" />
              <span>
                {salon.hours.map((h) => (
                  <span key={h.days} className="block">
                    {h.days}: {h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-6 text-xs text-cream/40 lg:px-8">
          <p data-testid="footer-copyright">
            © {year} {salon.brand.name} {salon.brand.suffix}. All rights reserved.
          </p>
          <p className="font-serif italic text-cream/35">
            Crafted with care, worn with confidence.
          </p>
        </div>
      </div>
    </footer>
  );
}
