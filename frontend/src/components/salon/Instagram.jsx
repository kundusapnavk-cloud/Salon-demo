import { Instagram as InstagramIcon } from "lucide-react";
import { salon } from "../../config/salon";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export default function Instagram() {
  return (
    <section data-testid="instagram-section" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            number="07"
            overline="Social"
            title={
              <>
                Follow Our <em className="text-brand">Work</em>
              </>
            }
          />
          <Reveal delay={0.2}>
            <a
              href={salon.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="instagram-follow-button"
              className="flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream transition-colors duration-200 hover:bg-brand"
            >
              <InstagramIcon size={16} />
              Follow Us on Instagram
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {salon.instagramGrid.map((g, i) => (
            <Reveal key={g.url} delay={i * 0.05} y={18}>
              <a
                href={salon.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`instagram-tile-${i}`}
                className="group relative block overflow-hidden rounded-md"
                aria-label={`Instagram post: ${g.alt}`}
              >
                <img
                  src={g.url}
                  alt={g.alt}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                />
                <span className="absolute inset-0 grid place-items-center bg-ink/45 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <InstagramIcon size={22} className="text-cream" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
