import { Star } from "lucide-react";
import { salon, slugify } from "../../config/salon";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const Stars = ({ value, size = 14 }) => (
  <span className="flex gap-0.5 text-[#D9A441]" aria-label={`${value} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={size}
        strokeWidth={0}
        fill="currentColor"
        className={i < value ? "" : "opacity-25"}
      />
    ))}
  </span>
);

export default function Reviews() {
  return (
    <section id="reviews" data-testid="reviews-section" className="bg-warm py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-10">
          <SectionHeading
            number="06"
            overline="Reviews"
            title={
              <>
                What Our <em className="text-brand">Clients Say</em>
              </>
            }
          />
          <Reveal delay={0.15}>
            <div data-testid="reviews-rating-summary" className="flex items-center gap-5">
              <span className="font-serif text-6xl leading-none text-ink">
                {salon.rating.value}
              </span>
              <div>
                <Stars value={5} size={16} />
                <p className="mt-2 text-sm text-ink/55">
                  Based on {salon.rating.count}+ reviews
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {salon.testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.08} className="h-full">
              <article
                data-testid={`review-card-${slugify(t.name)}`}
                className="flex h-full flex-col rounded-lg border border-black/5 bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:-translate-y-1"
              >
                <Stars value={t.rating} />
                <p className="mt-5 flex-1 font-serif text-lg italic leading-relaxed text-ink/75">
                  “{t.text}”
                </p>
                <footer className="mt-6 flex items-center justify-between border-t border-ink/5 pt-5">
                  <div>
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="mt-0.5 text-xs text-ink/45">{t.date}</p>
                  </div>
                  {t.service && (
                    <span className="rounded-full bg-warm px-3 py-1 text-xs font-medium text-brand">
                      {t.service}
                    </span>
                  )}
                </footer>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <a
              href={salon.contact.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="reviews-read-more-link"
              className="rounded-full border border-ink/20 px-8 py-3.5 text-sm font-semibold text-ink transition-colors duration-200 hover:border-brand hover:bg-brand hover:text-cream"
            >
              Read More Reviews
            </a>
            <p className="text-xs text-ink/40">
              Demo reviews shown for preview — connect the salon's Google Business
              Profile to display live reviews.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
