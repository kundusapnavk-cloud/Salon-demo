import { Flower2, HeartHandshake, Scissors, Sparkles } from "lucide-react";
import { salon, slugify } from "../../config/salon";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons = { Scissors, Sparkles, HeartHandshake, Flower2 };

export default function WhyUs() {
  return (
    <section
      id="why-us"
      data-testid="why-us-section"
      className="grain relative overflow-hidden bg-ink py-24 lg:py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          dark
          number="04"
          overline="Why Choose Us"
          title={
            <>
              Considered in <em className="text-brand">Every Detail</em>
            </>
          }
        />
        <div className="mt-16 grid gap-px overflow-hidden rounded-lg bg-cream/10 sm:grid-cols-2 lg:grid-cols-4">
          {salon.whyUs.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.title} delay={i * 0.08} className="h-full">
                <div
                  data-testid={`why-us-card-${slugify(item.title)}`}
                  className="group flex h-full flex-col bg-ink p-8 transition-colors duration-300 hover:bg-[#262220]"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-brand/40 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-cream">
                    <Icon size={20} strokeWidth={1.5} />
                  </span>
                  <span className="mt-8 font-serif text-sm italic text-cream/30">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 font-serif text-xl text-cream">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/55">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
