import {
  siGoogle,
  siYelp,
  siFacebook,
  siInstagram,
  siX,
  siTripadvisor,
} from "simple-icons";

type Network =
  | "yelp"
  | "google"
  | "facebook"
  | "instagram"
  | "x"
  | "twitter"
  | "tripadvisor";

type SocialItem = {
  network: Network;
  href: string;
  label: string;
};

const icons: Record<Network, { path: string; title: string }> = {
  yelp: siYelp,
  google: siGoogle,
  facebook: siFacebook,
  instagram: siInstagram,
  x: siX,
  twitter: siX,
  tripadvisor: siTripadvisor,
};

function SocialIcon({
  network,
  className,
}: {
  network: Network;
  className?: string;
}) {
  const icon = icons[network];
  if (!icon) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d={icon.path} />
    </svg>
  );
}

export function SocialLinks({
  items,
  className = "",
}: {
  items: readonly SocialItem[];
  className?: string;
}) {
  if (!items.length) return null;
  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`}>
      {items.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${item.label} (opens in new tab)`}
            className="inline-flex size-10 items-center justify-center rounded-md border border-current/20 text-current transition-colors hover:bg-current/10"
          >
            <SocialIcon network={item.network} className="size-5" />
          </a>
        </li>
      ))}
    </ul>
  );
}
