import { services, site } from "@/lib/site";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-neutral-900/50 border-y border-white/5"
    >
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="The Menu"
          description="Honest pricing, classic craft, no upsells. Pick your service and we'll take care of the rest."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service) => (
            <div
              key={service.name}
              className="group relative bg-neutral-900 border border-white/5 hover:border-gold/50 rounded-2xl p-7 transition-all hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-display text-xl md:text-2xl text-neutral-100">
                  {service.name}
                </h3>
                <span className="text-gold font-display text-2xl shrink-0">
                  {service.price}
                </span>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="mt-5 h-px bg-gradient-to-r from-gold/40 to-transparent" />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2.5 bg-gold hover:bg-gold-light text-neutral-950 font-semibold px-7 py-3.5 rounded-full text-base transition-all hover:scale-[1.02]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
            </svg>
            Book by Phone — {site.phone}
          </a>
          <p className="mt-3 text-sm text-neutral-500">
            Or just walk in — chairs usually open within 10 minutes.
          </p>
        </div>
      </div>
    </section>
  );
}
