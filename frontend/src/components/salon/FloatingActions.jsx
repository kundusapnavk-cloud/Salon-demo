import { CalendarCheck, MessageCircle, Phone } from "lucide-react";
import { salon, whatsappLink } from "../../config/salon";
import { useBooking } from "../../context/BookingContext";

export default function FloatingActions() {
  const { openBooking } = useBooking();
  return (
    <>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="floating-whatsapp-button"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-24 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#1FA855] text-white shadow-[0_10px_30px_rgba(31,168,85,0.35)] transition-transform duration-200 hover:scale-105 md:bottom-6 md:right-6"
      >
        <MessageCircle size={24} strokeWidth={1.8} />
      </a>

      <nav
        data-testid="mobile-booking-bar"
        aria-label="Quick actions"
        className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-black/5 bg-white/90 backdrop-blur-xl md:hidden"
      >
        <a
          href={`tel:${salon.contact.phoneLink}`}
          data-testid="mobile-bar-call"
          className="flex flex-col items-center gap-1 py-3 text-[11px] font-semibold uppercase tracking-widest text-ink/70 transition-colors hover:text-brand"
        >
          <Phone size={18} strokeWidth={1.8} />
          Call
        </a>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="mobile-bar-whatsapp"
          className="flex flex-col items-center gap-1 border-x border-black/5 py-3 text-[11px] font-semibold uppercase tracking-widest text-ink/70 transition-colors hover:text-brand"
        >
          <MessageCircle size={18} strokeWidth={1.8} />
          WhatsApp
        </a>
        <button
          onClick={() => openBooking()}
          data-testid="mobile-bar-book"
          className="flex flex-col items-center gap-1 bg-brand py-3 text-[11px] font-semibold uppercase tracking-widest text-cream transition-colors hover:bg-brand-hover"
        >
          <CalendarCheck size={18} strokeWidth={1.8} />
          Book
        </button>
      </nav>
    </>
  );
}
