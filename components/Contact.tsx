import { site } from "@/lib/site";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-neutral-900/50 border-t border-white/5"
    >
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Visit Us"
          title="Stop By or Give Us a Ring"
          description="The fastest way to lock in a chair. We answer every call."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          <div className="lg:col-span-2 flex flex-col gap-5">
            <a
              href={site.phoneHref}
              className="group bg-gold hover:bg-gold-light text-neutral-950 rounded-2xl p-7 transition-all hover:-translate-y-1 shadow-xl shadow-gold/10"
            >
              <p className="text-xs font-bold tracking-[0.2em] uppercase opacity-70">
                Tap to Call
              </p>
              <p className="font-display text-3xl md:text-4xl mt-2 leading-tight">
                {site.phone}
              </p>
              <p className="mt-4 text-sm font-medium opacity-80 flex items-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
                </svg>
                Open now · Pickups within seconds
              </p>
            </a>

            <div className="bg-neutral-900 border border-white/5 rounded-2xl p-7">
              <div className="flex items-start gap-3 mb-2">
                <PinIcon className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-400">
                    Address
                  </p>
                  <p className="mt-1 text-neutral-100 leading-relaxed">
                    {site.address}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 border border-white/5 rounded-2xl p-7">
              <div className="flex items-start gap-3 mb-4">
                <ClockIcon className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-400">
                  Hours
                </p>
              </div>
              <ul className="space-y-2">
                {site.hours.map((row) => (
                  <li
                    key={row.day}
                    className="flex items-center justify-between text-sm border-b border-white/5 last:border-0 pb-2 last:pb-0"
                  >
                    <span className="text-neutral-300">{row.day}</span>
                    <span className="text-neutral-100 font-medium">
                      {row.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-white/5 bg-neutral-900 min-h-[400px] lg:min-h-0">
            <iframe
              src={site.mapEmbed}
              title={`Map to ${site.name}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[400px] grayscale-[30%] contrast-[1.1]"
              style={{ border: 0 }}
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function PinIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
