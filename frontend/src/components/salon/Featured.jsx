import { ArrowUpRight } from "lucide-react";
import { salon, slugify } from "../../config/salon";
import { scrollToId } from "../../lib/scroll";
import { useBooking } from "../../context/BookingContext";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export default function Featured() {
  const { openBooking } = useBooking();
  return (
    <section data-testid="featured-section" className="bg-warm py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            number="02"
            overline="Signature Services"
            title={
              <>
                Loved Most by <em className="text-brand">Our Clients</em>
              </>
            }
          />
          <Reveal delay={0.2}>
            <button
              onClick={() => scrollToId("services")}
              data-testid="featured-view-all-button"
              className="group flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-brand"
            >
              View All Services
              <ArrowUpRight
                size={16}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {salon.featured.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.1}>
              <button
                onClick={() => openBooking(f.service)}
                data-testid={`featured-card-${slugify(f.title)}`}
                className="group relative block w-full overflow-hidden rounded-lg text-left"
                aria-label={`Book ${f.title}`}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={f.image}
                    alt={f.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                  <div>
                    <h3 className="font-serif text-2xl text-cream">{f.title}</h3>
                    <p className="mt-1 text-sm text-cream/70">{f.tag}</p>
                  </div>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-cream/30 text-cream transition-all duration-300 group-hover:border-brand group-hover:bg-brand">
                    <ArrowUpRight size={17} />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
