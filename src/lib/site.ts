export const site = {
  name: "Hanabi Sushi",
  shortName: "Hanabi",
  tagline: "Fresh sushi and Japanese cooking in Mountain View",
  description:
    "Hanabi Sushi serves fresh sashimi, specialty rolls, and hot kitchen favorites in Mountain View, CA. Dine in, order ahead, or reserve our outdoor patio.",
  phone: "(650) 988-8686",
  phoneHref: "tel:+16509888686",
  email: "hanabi.sushi.mv@gmail.com",
  emailHref: "mailto:hanabi.sushi.mv@gmail.com",
  address: {
    street: "1040 N Rengstorff Ave",
    suite: "STE A1",
    city: "Mountain View",
    state: "CA",
    zip: "94043",
    full: "1040 N Rengstorff Ave STE A1, Mountain View, CA 94043",
  },
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=1040+N+Rengstorff+Ave+STE+A1,+Mountain+View,+CA+94043",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=1040+N+Rengstorff+Ave+STE+A1,+Mountain+View,+CA+94043&output=embed",
  orderUrl: "https://hanabisushimv.menu11.com/mountain/order",
  menuPdfUrl: "/menu/hanabi-2026.pdf",
  sourceUrl: "https://sushihanabimv.com/",
  hours: [
    { days: "Tuesday-Thursday", hours: "11:30am-2:30pm / 4:30pm-8:30pm" },
    { days: "Friday", hours: "11:30am-2:30pm / 4:30pm-9:00pm" },
    { days: "Saturday", hours: "12:00pm-9:00pm" },
    { days: "Sunday", hours: "12:00pm-8:30pm" },
    { days: "Monday", hours: "Closed" },
  ],
  hoursSummary: "Tue-Sun lunch and dinner - closed Mondays",
  social: [
    {
      network: "yelp" as const,
      href: "https://www.yelp.com/biz/hanabi-sushi-mountain-view-2",
      label: "Yelp",
    },
    {
      network: "google" as const,
      href: "https://www.google.com/maps/search/?api=1&query=Hanabi+Sushi+1040+N+Rengstorff+Ave+Mountain+View",
      label: "Google Maps",
    },
  ],
} as const;

export const navLinks = [
  { label: "Menu", href: "/menu" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

export const galleryImages = [
  {
    src: "/images/nigiri-mix.jpg",
    alt: "Assorted nigiri sushi plated at Hanabi Sushi",
  },
  {
    src: "/images/rainbow.jpg",
    alt: "Rainbow roll atop a lacquer tray",
  },
  {
    src: "/images/crazy-roll.jpg",
    alt: "Specialty roll with sauce and garnish",
  },
  {
    src: "/images/temaki.jpg",
    alt: "Hand roll temaki with fresh fish",
  },
  {
    src: "/images/platter.jpg",
    alt: "Shared sushi platter for the table",
  },
  {
    src: "/images/sashimi.jpg",
    alt: "Fresh sashimi assortment",
  },
  {
    src: "/images/rolls.jpg",
    alt: "Cut sushi rolls arranged on a plate",
  },
  {
    src: "/images/unadon.jpg",
    alt: "Unadon eel rice bowl",
  },
  {
    src: "/images/interior.jpg",
    alt: "Dining room interior at Hanabi Sushi",
  },
  {
    src: "/images/patio.jpg",
    alt: "Outdoor patio seating for groups and parties",
  },
  {
    src: "/images/hero-gallery.jpg",
    alt: "Chef-prepared sushi close-up",
  },
  {
    src: "/images/hero-contact.jpg",
    alt: "Evening dining atmosphere inside Hanabi",
  },
] as const;

export const featuredDishes = [
  {
    name: "Nigiri and sashimi",
    blurb: "Clean cuts of the freshest fish available that day.",
    image: "/images/nigiri-mix.jpg",
    alt: "Nigiri and sashimi assortment",
  },
  {
    name: "Specialty rolls",
    blurb: "House favorites like rainbow, crazy, and chef specials.",
    image: "/images/rainbow.jpg",
    alt: "Rainbow specialty roll",
  },
  {
    name: "Hot kitchen",
    blurb: "Unadon, tempura, and cooked classics beside the sushi bar.",
    image: "/images/unadon.jpg",
    alt: "Unadon eel rice bowl",
  },
] as const;
