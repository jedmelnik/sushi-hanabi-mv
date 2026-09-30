import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { featuredDishes, galleryImages, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <PageHero
        size="home"
        kicker="Mountain View Japanese restaurant"
        title={
          <>
            {site.name}
          </>
        }
        lede="The freshest sashimi, specialty rolls, and hot kitchen favorites - elegant dining with attentive service."
        // Focal: nigiri platter center-right, clear of left lockup
        image={{
          src: "/images/hero-home.jpg",
          alt: "Assorted nigiri sushi at Hanabi Sushi",
          focal: "72% 45%",
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
              render={<a href="/menu" />}
              variant="outline"
              size="lg"
              className="hidden h-11 rounded-md border-white/35 bg-white/10 px-5 text-sm font-semibold text-white hover:bg-white/20 hover:text-white md:inline-flex"
            >
              View menu
            </Button>
          </>
        }
      />

      <section className="site-wrap py-14 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className="animate-fade">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-jade">
              Welcome
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl">
              Hanabi Japanese Restaurant
            </h2>
            <div className="mt-3 h-[3px] w-16 bg-ember" />
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Hanabi Sushi prides itself on serving the freshest and highest
              quality ingredients. We offer an array of sashimi and sushi
              assortments as well as hot kitchen menu items - demanding nothing
              less than the best dish for our guests.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Elegant decor, diverse selections, delicious taste, and attentive
              service come together for a pleasurable dining experience in
              Mountain View.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src="/images/temaki.jpg"
              alt="Hand rolls and sushi prepared at Hanabi"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "50% 40%" }}
            />
          </div>
        </div>
      </section>

      <section className="border-y border-border/70 bg-[#f7f8f6]/70 py-14 md:py-20">
        <div className="site-wrap">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-jade">
              On the menu
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl">
              Fresh ingredients, carefully prepared
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              From the sushi bar to the hot kitchen - favorites for lunch,
              dinner, and takeout.
            </p>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {featuredDishes.map((dish, index) => (
              <article
                key={dish.name}
                className="group"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src={dish.image}
                    alt={dish.alt}
                    fill
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mt-4 font-display text-2xl text-ink">
                  {dish.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {dish.blurb}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button
              render={<a href="/menu" />}
              size="lg"
              className="h-11 rounded-md bg-brand px-5 text-sm font-semibold text-brand-foreground hover:bg-brand/90"
            >
              See the full menu
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
              className="h-11 rounded-md border-ink/20 bg-transparent px-5 text-sm font-semibold text-ink hover:bg-ink/5"
            >
              Download PDF
            </Button>
          </div>
        </div>
      </section>

      <section className="site-wrap py-14 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className="relative order-2 aspect-[5/4] overflow-hidden rounded-sm md:order-1">
            <Image
              src="/images/patio.jpg"
              alt="Outdoor patio at Hanabi Sushi"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "50% 50%" }}
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-jade">
              Space for your needs
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl">
              Outdoor patio for parties and gatherings
            </h2>
            <div className="mt-3 h-[3px] w-16 bg-ember" />
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              We have a large outdoor patio that can be reserved and coordinated
              for corporate meetings and parties. Please call in advance to set
              up a reservation.
            </p>
            <div className="mt-6">
              <Button
                render={<a href={site.phoneHref} />}
                size="lg"
                className="h-11 rounded-md bg-ink px-5 text-sm font-semibold text-white hover:bg-ink/90"
              >
                Call to reserve
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/70 bg-ink py-14 text-white md:py-20">
        <div className="site-wrap">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
                Gallery
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight md:text-4xl">
                A taste of Hanabi
              </h2>
            </div>
            <a
              href="/gallery"
              className="text-sm font-semibold text-white/80 underline-offset-4 hover:text-white hover:underline"
            >
              View full gallery
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {galleryImages.slice(0, 4).map((image) => (
              <a
                key={image.src}
                href="/gallery"
                className="relative aspect-square overflow-hidden rounded-sm"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 hover:scale-[1.04]"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="site-wrap py-14 md:py-16">
        <div className="grid gap-8 rounded-sm border border-border/70 bg-[#f7f8f6]/80 p-6 md:grid-cols-3 md:gap-6 md:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-jade">
              Hours
            </p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {site.hours.map((row) => (
                <li key={row.days} className="flex flex-col sm:flex-row sm:gap-2">
                  <span className="font-medium text-ink">{row.days}</span>
                  <span>{row.hours}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-jade">
              Location
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {site.address.street}, {site.address.suite}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </p>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-semibold text-brand hover:underline"
            >
              Get directions
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-jade">
              Contact
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              <a href={site.phoneHref} className="font-semibold text-ink hover:text-brand">
                {site.phone}
              </a>
              <br />
              <a href={site.emailHref} className="hover:text-brand">
                {site.email}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
