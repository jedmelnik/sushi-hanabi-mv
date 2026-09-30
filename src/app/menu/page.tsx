import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { featuredDishes, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Sushi, sashimi, specialty rolls, and hot kitchen dishes at Hanabi Sushi in Mountain View. Order ahead or download the full menu PDF.",
};

const menuSections = [
  {
    title: "Sushi and sashimi",
    items: [
      "Nigiri and sashimi assortments cut to order",
      "Chef selections featuring the freshest fish available",
      "Hand rolls (temaki) and classic cut rolls",
    ],
  },
  {
    title: "Specialty rolls",
    items: [
      "Rainbow, crazy, and house special rolls",
      "Cooked and vegetarian roll options",
      "Shareable platters for the table",
    ],
  },
  {
    title: "Hot kitchen",
    items: [
      "Unadon and other cooked Japanese favorites",
      "Tempura and appetizers",
      "Lunch and dinner hot plates",
    ],
  },
] as const;

export default function MenuPage() {
  return (
    <>
      <PageHero
        title="Menu"
        lede="Fresh sushi, sashimi, specialty rolls, and hot kitchen classics - order ahead or dine in."
        // Focal: sushi set center-right
        image={{
          src: "/images/hero-menu.jpg",
          alt: "Sushi and maki set",
          focal: "75% 40%",
        }}
        actions={
          <>
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
              render={
                <a
                  href={site.menuPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              variant="outline"
              size="lg"
              className="hidden h-11 rounded-md border-white/35 bg-white/10 px-5 text-sm font-semibold text-white hover:bg-white/20 hover:text-white md:inline-flex"
            >
              Full menu PDF
            </Button>
          </>
        }
      />

      <section className="site-wrap py-14 md:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-jade">
            What we serve
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl">
            From the sushi bar to the hot kitchen
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Browse highlights below, download the complete PDF, or order online
            for pickup. Prices and daily specials are listed on the full menu.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {menuSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-display text-2xl text-ink">{section.title}</h3>
              <div className="mt-2 h-[2px] w-12 bg-ember" />
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                {section.items.map((item) => (
                  <li key={item} className="border-b border-border/60 pb-3 last:border-0">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Button
            render={
              <a
                href={site.menuPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            size="lg"
            className="h-11 rounded-md bg-brand px-5 text-sm font-semibold text-brand-foreground hover:bg-brand/90"
          >
            Download full menu PDF
          </Button>
          <Button
            render={
              <a
                href={site.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            variant="outline"
            size="lg"
            className="h-11 rounded-md border-ink/20 bg-transparent px-5 text-sm font-semibold text-ink hover:bg-ink/5"
          >
            Order online
          </Button>
        </div>
      </section>

      <section className="border-t border-border/70 bg-[#f7f8f6]/80 py-14 md:py-20">
        <div className="site-wrap">
          <h2 className="font-display text-3xl tracking-tight text-ink md:text-4xl">
            Guest favorites
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {featuredDishes.map((dish) => (
              <article key={dish.name}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src={dish.image}
                    alt={dish.alt}
                    fill
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-3 font-display text-xl text-ink">{dish.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{dish.blurb}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
