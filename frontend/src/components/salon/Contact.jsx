import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { salon, whatsappLink } from "../../config/salon";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const rowCls =
  "flex items-start gap-5 border-b border-ink/8 py-6 transition-colors duration-200";

export default function Contact() {
  const { contact, hours } = salon;
  return (
    <section id="contact" data-testid="contact-section" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          number="08"
          overline="Contact"
          title={
            <>
              Find Your Way <em className="text-brand">to the Chair</em>
            </>
          }
        />

        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <div className={rowCls}>
                <span className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-brand/30 text-brand">
                  <Phone size={17} strokeWidth={1.7} />
                </span>
                <div className="flex flex-1 flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/45">Phone</p>
                    <p className="mt-1 font-serif text-xl text-ink">{contact.phoneDisplay}</p>
                  </div>
                  <a
                    href={`tel:${contact.phoneLink}`}
                    data-testid="contact-call-button"
                    className="rounded-full bg-brand px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-cream transition-colors hover:bg-brand-hover"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className={rowCls}>
                <span className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-brand/30 text-brand">
                  <MessageCircle size={17} strokeWidth={1.7} />
                </span>
                <div className="flex flex-1 flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/45">WhatsApp</p>
                    <p className="mt-1 font-serif text-xl text-ink">{contact.phoneDisplay}</p>
                  </div>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="contact-whatsapp-button"
                    className="rounded-full border border-brand px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-brand transition-colors hover:bg-brand hover:text-cream"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className={rowCls}>
                <span className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-brand/30 text-brand">
                  <MapPin size={17} strokeWidth={1.7} />
                </span>
                <div className="flex flex-1 flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/45">Address</p>
                    <p className="mt-1 max-w-xs font-serif text-xl leading-snug text-ink">
                      {contact.address}
                    </p>
                  </div>
                  <a
                    href={contact.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="contact-directions-button"
                    className="rounded-full border border-ink/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-ink transition-colors hover:border-brand hover:bg-brand hover:text-cream"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className={rowCls}>
                <span className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-brand/30 text-brand">
                  <Clock size={17} strokeWidth={1.7} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/45">Opening Hours</p>
                  {hours.map((h) => (
                    <p key={h.days} className="mt-1.5 text-sm text-ink/70">
                      <span className="font-medium text-ink">{h.days}</span>
                      <span className="mx-2 text-ink/25">·</span>
                      {h.time}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className={`${rowCls} border-b-0`}>
                <span className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-brand/30 text-brand">
                  <Mail size={17} strokeWidth={1.7} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/45">Email</p>
                  <a
                    href={`mailto:${contact.email}`}
                    data-testid="contact-email-link"
                    className="mt-1 block font-serif text-xl text-ink transition-colors hover:text-brand"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div
              data-testid="contact-map"
              className="relative h-full min-h-[420px] overflow-hidden rounded-lg border border-black/5"
            >
              <iframe
                title={`Map to ${salon.brand.name}`}
                src={contact.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full grayscale-[35%]"
              />
              <div className="absolute bottom-4 left-4 rounded-md border border-black/5 bg-white/90 px-4 py-3 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  {salon.brand.name}
                </p>
                <p className="mt-0.5 max-w-[220px] text-xs text-ink/60">{contact.address}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
