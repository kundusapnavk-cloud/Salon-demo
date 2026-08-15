import { MessageCircle, Phone } from "lucide-react";
import { salon, whatsappLink } from "../../config/salon";
import { useBooking } from "../../context/BookingContext";
import { Reveal } from "./Reveal";

export default function BookingCTA() {
  const { openBooking } = useBooking();
  return (
    <section
      data-testid="booking-cta-section"
      className="grain relative overflow-hidden bg-ink py-28 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 h-96 w-96 rounded-full border border-brand/20"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-16 h-72 w-72 rounded-full border border-cream/10"
      />
      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cream/50">
            Plan Your Visit
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 font-serif text-3xl tracking-tight text-cream sm:text-4xl lg:text-5xl">
            Ready for Your <em className="text-brand">Next Look?</em>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream/60 md:text-lg">
            Tell the studio which hair, skin, nail or makeup service you are interested in and ask about a suitable appointment time.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openBooking()}
              data-testid="cta-book-button"
              className="rounded-full bg-brand px-8 py-4 text-sm font-semibold text-cream transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-hover"
            >
              Book on WhatsApp
            </button>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="cta-whatsapp-button"
              className="flex items-center gap-2 rounded-full border border-cream/25 px-8 py-4 text-sm font-semibold text-cream transition-colors duration-200 hover:border-cream/60 hover:bg-cream/10"
            >
              <MessageCircle size={16} />
              Book via WhatsApp
            </a>
            <a
              href={`tel:${salon.contact.phoneLink}`}
              data-testid="cta-call-button"
              className="flex items-center gap-2 rounded-full border border-cream/25 px-8 py-4 text-sm font-semibold text-cream transition-colors duration-200 hover:border-cream/60 hover:bg-cream/10"
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
