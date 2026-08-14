import { Clock } from "lucide-react";
import { salon, slugify } from "../../config/salon";
import { useBooking } from "../../context/BookingContext";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export default function Services() {
  const { openBooking } = useBooking();
  return (
    <section id="services" data-testid="services-section" className="py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <SectionHeading
          number="03"
          overline="Our Services"
          title={
            <>
              A Menu of <em className="text-brand">Rituals</em>
            </>
          }
          description="Every service is a considered ritual — priced transparently, timed honestly, and finished with care. Tap Book Now on any service to request your slot."
        />

        <div className="mt-16 space-y-16">
          {salon.categories.map((cat, i) => (
            <div key={cat.id} data-testid={`service-category-${cat.id}`}>
              <Reveal>
                <div className="flex items-baseline gap-4 border-b border-ink/15 pb-4">
                  <span className="font-serif text-lg italic text-brand">
                    0{i + 1}
                  </span>
                  <h3 className="font-serif text-2xl tracking-tight text-ink sm:text-3xl">
                    {cat.name}
                  </h3>
                  <span className="ml-auto text-xs font-semibold uppercase tracking-[0.2em] text-ink/40">
                    {cat.services.length} services
                  </span>
                </div>
              </Reveal>

              <div>
                {cat.services.map((s, j) => (
                  <Reveal key={s.name} delay={j * 0.04} y={16}>
                    <div
                      data-testid={`service-row-${slugify(s.name)}`}
                      className="group -mx-2 grid gap-3 rounded-md border-b border-ink/5 px-2 py-6 transition-colors duration-200 hover:bg-warm/70 sm:grid-cols-[1fr_auto] sm:items-center"
                    >
                      <div>
                        <h4 className="font-serif text-xl text-ink transition-colors duration-200 group-hover:text-brand">
                          {s.name}
                        </h4>
                        <p className="mt-1 max-w-xl text-sm leading-relaxed text-ink/55">
                          {s.description}
                        </p>
                      </div>
                      <div className="flex items-center justify-between gap-6 sm:justify-end">
                        <p className="flex items-center gap-1.5 whitespace-nowrap text-sm text-ink/60">
                          <Clock size={13} strokeWidth={1.8} />
                          {s.duration}
                          <span className="mx-1 text-ink/25">·</span>
                          <span className="font-semibold text-ink">{s.price}</span>
                        </p>
                        <button
                          onClick={() => openBooking(s.name)}
                          data-testid={`book-service-${slugify(s.name)}`}
                          className="rounded-full border border-ink/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-ink transition-colors duration-200 hover:border-brand hover:bg-brand hover:text-cream"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
