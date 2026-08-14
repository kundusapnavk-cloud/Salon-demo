import { Reveal } from "./Reveal";

export const SectionHeading = ({ number, overline, title, description, dark = false }) => (
  <div className="max-w-2xl">
    <Reveal>
      <div className="flex items-center gap-4">
        {number && (
          <span className="font-serif text-lg italic text-brand">{number}</span>
        )}
        <span className={`h-px w-10 ${dark ? "bg-cream/30" : "bg-ink/20"}`} />
        <span
          className={`text-xs font-semibold uppercase tracking-[0.25em] ${
            dark ? "text-cream/60" : "text-ink/50"
          }`}
        >
          {overline}
        </span>
      </div>
    </Reveal>
    <Reveal delay={0.08}>
      <h2
        className={`mt-6 font-serif text-3xl tracking-tight sm:text-4xl lg:text-5xl ${
          dark ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
    </Reveal>
    {description && (
      <Reveal delay={0.16}>
        <p
          className={`mt-5 text-base leading-relaxed md:text-lg ${
            dark ? "text-cream/60" : "text-ink/60"
          }`}
        >
          {description}
        </p>
      </Reveal>
    )}
  </div>
);
