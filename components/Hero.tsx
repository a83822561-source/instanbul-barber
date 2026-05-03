import Image from "next/image";
import { ratingSummary, site } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      <Image
        src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=2000&q=80"
        alt="Barber giving a precision haircut"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/60 to-neutral-950" />
      <div className="absolute inset-0 bg-neutral-950/40" />

      <div className="relative z-10 container-px mx-auto max-w-5xl text-center pt-24 pb-16">
        <p className="inline-block text-xs sm:text-sm tracking-[0.3em] text-gold uppercase mb-5 animate-fade-in">
          {site.city}
        </p>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-balance animate-fade-in-up">
          {site.name}
        </h1>
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-neutral-300 font-light tracking-wide animate-fade-in-up">
          {site.tagline}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
          <a
            href={site.phoneHref}
            className="group inline-flex items-center gap-2.5 bg-gold hover:bg-gold-light text-neutral-950 font-semibold px-7 py-4 rounded-full text-base transition-all hover:scale-[1.02] shadow-lg shadow-gold/20"
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
            Call Now — {site.phone}
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 border border-white/20 hover:border-gold hover:text-gold text-neutral-100 font-medium px-7 py-4 rounded-full text-base transition-colors"
          >
            View Services
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
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        <div className="mt-14 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto text-center">
          <Stat value={`${site.yearsInBusiness}+`} label="Years in Business" />
          <Stat value={site.clientsServed} label="Happy Clients" />
          <Stat value={`${ratingSummary.average}★`} label="Google Rated" />
        </div>

        <p className="mt-8 text-sm text-neutral-400 tracking-wide">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse" />
          Walk-ins welcome · Average wait: 10 min
        </p>
      </div>

      <a
        href="#gallery"
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-neutral-400 hover:text-gold animate-bounce"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </a>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-2xl sm:text-3xl md:text-4xl text-gold">
        {value}
      </div>
      <div className="mt-1 text-[11px] sm:text-xs uppercase tracking-[0.2em] text-neutral-400">
        {label}
      </div>
    </div>
  );
}
