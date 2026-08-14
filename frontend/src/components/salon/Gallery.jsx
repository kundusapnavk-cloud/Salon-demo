import { salon } from "../../config/salon";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export default function Gallery() {
  return (
    <section id="gallery" data-testid="gallery-section" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          number="05"
          overline="Gallery"
          title={
            <>
              Our Work, <em className="text-brand">Framed</em>
            </>
          }
          description="A glimpse inside the studio — real chairs, real craft, real transformations. Replace these with the salon's own photography anytime."
        />
        <div className="mt-14 columns-2 gap-4 md:columns-3 [column-fill:balance]">
          {salon.gallery.map((g, i) => (
            <Reveal key={g.url} delay={(i % 3) * 0.06} y={20} className="mb-4 break-inside-avoid">
              <figure
                data-testid={`gallery-item-${i}`}
                className="group overflow-hidden rounded-lg"
              >
                <img
                  src={g.url}
                  alt={g.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
