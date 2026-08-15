import { ArrowUpRight, MapPin } from "lucide-react";
import { salon } from "../../config/salon";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export default function Reviews() {
  return (
    <section id="reviews" data-testid="reviews-section" className="bg-warm py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading number="06" overline="Reviews & Location" title={<>See the Studio on <em className="text-brand">Google Maps</em></>} />
        <Reveal delay={0.1}>
          <div className="mt-14 grid items-center gap-8 rounded-lg border border-black/5 bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] md:grid-cols-[auto_1fr_auto] md:p-10">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-brand/10 text-brand"><MapPin size={24} /></span>
            <div>
              <h3 className="font-serif text-2xl text-ink">It's Canary Beauty Studio</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/60">View the current Google listing for directions and any customer feedback available there. No unverified rating or testimonial is reproduced on this website.</p>
            </div>
            <a href={salon.contact.reviewsUrl} target="_blank" rel="noopener noreferrer" data-testid="reviews-read-more-link" className="flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-brand-hover">View on Google Maps <ArrowUpRight size={16} /></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}