import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { galleryImages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos of sushi, rolls, sashimi, and the dining room at Hanabi Sushi in Mountain View.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        lede="Sushi bar craftsmanship, specialty rolls, and our Mountain View dining room."
        // Focal: plated sushi subject on the right
        image={{
          src: "/images/hero-gallery.jpg",
          alt: "Close-up of chef-prepared sushi",
          focal: "70% 42%",
        }}
      />

      <section className="site-wrap py-14 md:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-jade">
            From our kitchen
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl">
            A look inside Hanabi
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Real photos from the restaurant - food, patio, and evening dining.
          </p>
        </div>

        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((image, index) => (
            <figure
              key={image.src}
              className="mb-4 break-inside-avoid overflow-hidden rounded-sm"
              style={{ animationDelay: `${(index % 6) * 60}ms` }}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
