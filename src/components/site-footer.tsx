import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/social-links";
import { navLinks, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-secondary text-secondary-foreground">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(214,69,26,0.22),transparent_50%)]"
        aria-hidden
      />

      <div className="relative site-wrap">
        <div className="flex flex-col gap-6 border-b border-white/10 py-14 md:flex-row md:items-end md:justify-between md:py-16">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
              Visit or order ahead
            </p>
            <p className="mt-3 font-display text-3xl tracking-tight text-white md:text-4xl">
              Fresh sushi in Mountain View
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">
              Dine in, pick up, or reserve our outdoor patio for parties and
              gatherings. Call ahead for larger groups.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              render={
                <a
                  href={site.orderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              size="lg"
              className="h-12 rounded-md bg-brand px-6 text-base font-semibold text-brand-foreground hover:bg-brand/90"
            >
              Order ahead
            </Button>
            <Button
              render={<a href={site.phoneHref} />}
              variant="outline"
              size="lg"
              className="h-12 rounded-md border-white/30 bg-transparent px-6 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
            >
              Call {site.phone}
            </Button>
          </div>
        </div>

        <div className="grid gap-10 py-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Image
              src="/images/logo-hanabi.png"
              alt={site.name}
              width={475}
              height={86}
              className="h-9 w-auto brightness-0 invert"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
              Japanese restaurant in Mountain View serving fresh sashimi, sushi
              assortments, and hot kitchen favorites.
            </p>
            <SocialLinks items={site.social} className="mt-5 text-white" />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
              Visit
            </p>
            <div className="mt-4 space-y-3 text-sm text-white/75">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-ember" aria-hidden />
                <address className="not-italic">
                  <a
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    {site.address.street}, {site.address.suite}
                    <br />
                    {site.address.city}, {site.address.state} {site.address.zip}
                  </a>
                </address>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="size-4 shrink-0 text-ember" aria-hidden />
                <a href={site.phoneHref} className="hover:text-white">
                  {site.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="size-4 shrink-0 text-ember" aria-hidden />
                <a href={site.emailHref} className="hover:text-white">
                  {site.email}
                </a>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
              Explore
            </p>
            <nav className="mt-4 flex flex-col gap-2 text-sm" aria-label="Footer">
              <a href="/" className="text-white/75 hover:text-white">
                Home
              </a>
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="text-white/75 hover:text-white"
                >
                  {label}
                </a>
              ))}
              <a
                href={site.menuPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/75 hover:text-white"
              >
                Full menu PDF
              </a>
            </nav>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-xs text-white/45">
          <p>
            © {new Date().getFullYear()} {site.name}. Mountain View, California.
          </p>
        </div>
      </div>
    </footer>
  );
}
