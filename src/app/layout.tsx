import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { site } from "@/lib/site";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Mountain View Japanese Restaurant`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL("https://sushi-hanabi-mv.vercel.app"),
  openGraph: {
    title: `${site.name} | Mountain View`,
    description: site.description,
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col pb-16 md:pb-0">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <MobileCtaBar />
      </body>
    </html>
  );
}
