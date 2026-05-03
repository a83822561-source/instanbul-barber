import { navLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-white/5">
      <div className="container-px mx-auto max-w-7xl py-12 md:py-14 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div>
          <a
            href="#home"
            className="font-display text-2xl tracking-wide inline-block"
          >
            <span className="text-gold">Istanbul</span>{" "}
            <span className="text-neutral-100">Barber</span>
          </a>
          <p className="mt-3 text-sm text-neutral-400 max-w-sm leading-relaxed">
            {site.tagline} Premium grooming, neighborhood prices.
          </p>
        </div>

        <nav className="md:justify-self-center">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-neutral-400 hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:justify-self-end md:text-right">
          <a
            href={site.phoneHref}
            className="font-display text-xl text-gold hover:text-gold-light transition-colors"
          >
            {site.phone}
          </a>
          <p className="mt-1 text-sm text-neutral-400">{site.address}</p>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-px mx-auto max-w-7xl py-5 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
