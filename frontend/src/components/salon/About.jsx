import { salon } from "../../config/salon";
import { scrollToId } from "../../lib/scroll";
import { Reveal } from "./Reveal";

export default function About() {
  const { about } = salon;
  return (
    <section id="about" data-testid="about-section" className="overflow-hidden py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <div className="relative lg:col-span-6">
          <Reveal>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-0 translate-x-4 translate-y-4 rounded-lg border border-brand/30"
              />
              <img
                src={about.image}
                alt={about.imageAlt}
                loading="lazy"
                className="relative aspect-[4/5] w-full rounded-lg object-cover"
              />
              <div
                data-testid="about-badge"
                className="absolute -bottom-8 -right-4 hidden rounded-lg border border-black/5 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] sm:block"
              >
                <p className="font-serif text-4xl text-brand">{about.badge.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
                  {about.badge.label}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="font-serif text-lg italic text-brand">01</span>
              <span className="h-px w-10 bg-ink/20" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-ink/50">
                Our Story
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-serif text-3xl tracking-tight text-ink sm:text-4xl lg:text-5xl">
              {about.title[0]} <em className="text-brand">{about.title[1]}</em>
            </h2>
          </Reveal>
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.14 + i * 0.06}>
              <p className="mt-5 text-base leading-relaxed text-ink/60">{p}</p>
            </Reveal>
          ))}

          <div className="mt-10 space-y-6">
            {about.chapters.map((c, i) => (
              <Reveal key={c.title} delay={0.1 + i * 0.08}>
                <div className="flex gap-5 border-t border-ink/10 pt-5">
                  <span className="font-serif text-sm italic text-brand">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-ink">{c.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/55">{c.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <button
              onClick={() => scrollToId("why-us")}
              data-testid="about-story-button"
              className="mt-10 rounded-full border border-ink/20 px-8 py-3.5 text-sm font-semibold text-ink transition-colors duration-200 hover:border-brand hover:bg-brand hover:text-cream"
            >
              Discover Our Story
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
