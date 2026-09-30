import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { SocialLinks } from "@/components/social-links";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Hours, address, phone, and directions for Hanabi Sushi at 1040 N Rengstorff Ave, Mountain View, CA.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        lede="Find us on N Rengstorff Ave - call for reservations, patio parties, or questions."
        // Focal: dining room seating on the right
        image={{
          src: "/images/hero-contact.jpg",
          alt: "Evening dining room at Hanabi Sushi",
          focal: "68% 50%",
        }}
        actions={
          <>
            <Button
              render={<a href={site.phoneHref} />}
              size="lg"
              className="h-11 rounded-md bg-brand px-5 text-sm font-semibold text-brand-foreground hover:bg-brand/90"
            >
              Call {site.phone}
            </Button>
            <Button
              render={
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              variant="outline"
              size="lg"
              className="hidden h-11 rounded-md border-white/35 bg-white/10 px-5 text-sm font-semibold text-white hover:bg-white/20 hover:text-white md:inline-flex"
            >
              Get directions
            </Button>
          </>
        }
      />

      <section className="site-wrap py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-jade">
              Contact info
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl">
              Visit Hanabi Sushi
            </h2>
            <div className="mt-3 h-[3px] w-16 bg-ember" />

            <dl className="mt-8 space-y-6">
              <div className="flex gap-3">
                <MapPin className="mt-1 size-5 shrink-0 text-ember" aria-hidden />
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Address
                  </dt>
                  <dd className="mt-1 text-base text-ink">
                    {site.address.street}, {site.address.suite}
                    <br />
                    {site.address.city}, {site.address.state} {site.address.zip}
                  </dd>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone className="mt-1 size-5 shrink-0 text-ember" aria-hidden />
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Phone
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={site.phoneHref}
                      className="text-base font-semibold text-ink hover:text-brand"
                    >
                      {site.phone}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail className="mt-1 size-5 shrink-0 text-ember" aria-hidden />
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Email
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={site.emailHref}
                      className="text-base text-ink hover:text-brand"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex gap-3">
                <Clock className="mt-1 size-5 shrink-0 text-ember" aria-hidden />
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Hours
                  </dt>
                  <dd className="mt-2 space-y-1.5 text-sm text-ink md:text-base">
                    {site.hours.map((row) => (
                      <div
                        key={row.days}
                        className="flex flex-col gap-0.5 sm:flex-row sm:gap-3"
                      >
                        <span className="min-w-[9.5rem] font-medium">
                          {row.days}
                        </span>
                        <span className="text-muted-foreground">{row.hours}</span>
                      </div>
                    ))}
                  </dd>
                </div>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                render={
                  <a
                    href={site.orderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                size="lg"
                className="h-11 rounded-md bg-brand px-5 text-sm font-semibold text-brand-foreground hover:bg-brand/90"
              >
                Order ahead
              </Button>
              <Button
                render={<a href={site.phoneHref} />}
                variant="outline"
                size="lg"
                className="h-11 rounded-md border-ink/20 bg-transparent px-5 text-sm font-semibold text-ink hover:bg-ink/5"
              >
                Call to reserve patio
              </Button>
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Reviews and maps
              </p>
              <SocialLinks items={site.social} className="mt-3 text-ink" />
            </div>
          </div>

          <div className="overflow-hidden rounded-sm border border-border/70 bg-[#f7f8f6]">
            <iframe
              title="Map to Hanabi Sushi"
              src={site.mapsEmbedUrl}
              className="h-[min(28rem,70vh)] w-full border-0 md:h-full md:min-h-[28rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
