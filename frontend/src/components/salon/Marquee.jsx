import { salon } from "../../config/salon";

export default function Marquee() {
  const items = [...salon.marquee, ...salon.marquee, ...salon.marquee];
  return (
    <div
      data-testid="editorial-marquee"
      aria-hidden="true"
      className="overflow-hidden border-y border-ink/5 bg-warm py-6"
    >
      <div className="marquee-track flex w-max items-center">
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 items-center">
            {items.map((text, i) => (
              <span
                key={`${half}-${i}`}
                className="flex items-center whitespace-nowrap font-serif text-xl italic tracking-wide text-ink/50 md:text-2xl"
              >
                <span className="px-8">{text}</span>
                <span className="text-sm not-italic text-brand">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
