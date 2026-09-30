import { Phone } from "lucide-react";
import { site } from "@/lib/site";

/** Sticky bottom CTA on small screens - call + order without crowding the hero. */
export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/80 bg-[#f7f8f6]/95 px-3 py-2.5 backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href={site.phoneHref}
          className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-md border border-ink/15 bg-white text-sm font-semibold text-ink"
        >
          <Phone className="size-4" aria-hidden />
          Call
        </a>
        <a
          href={site.orderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 flex-1 items-center justify-center rounded-md bg-brand text-sm font-semibold text-brand-foreground"
        >
          Order ahead
        </a>
      </div>
    </div>
  );
}
