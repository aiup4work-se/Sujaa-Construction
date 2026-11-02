import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { RevealObserver } from "@/components/Motion";
import { brand, seo } from "@/site.config";
import { optional } from "@/lib/optional";
import { organizationLd, seoKeywords, siteUrl, websiteLd } from "@/lib/seo";
// Fonts bundled from npm (no Google Fonts request at build time)
import "@fontsource-variable/archivo/wdth.css";   // headings (variable weight + width)
import "@fontsource-variable/manrope/wght.css";   // body text
import "@fontsource/ibm-plex-mono/500.css";       // small technical labels
import "./globals.css";

const verify = optional(seo, "verification", { google: "", bing: "" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${brand.name} | ${brand.tagline}`, template: `%s | ${brand.name}` },
  description: brand.description,
  applicationName: brand.name,
  keywords: seoKeywords,
  authors: [{ name: brand.legalName, url: siteUrl }],
  creator: brand.legalName,
  publisher: brand.legalName,
  category: "construction",
  alternates: { canonical: "/" },
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: { title: brand.name, description: brand.description, url: "/", siteName: brand.name, type: "website", locale: seo.locale },
  twitter: { card: "summary_large_image", title: brand.name, description: brand.description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  verification: {
    ...(verify.google ? { google: verify.google } : {}),
    ...(verify.bing ? { other: { "msvalidate.01": verify.bing } } : {}),
  },
};

export const viewport: Viewport = {
  themeColor: brand.colors.background,
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

// Colours from site.config.ts → brand.colors, applied to the whole site
const c = brand.colors;
const themeCss = `:root{
  --color-sun:${c.primary};--color-sun-deep:${c.primaryDeep};
  --color-night:${c.dark};--color-night-2:${c.darkSoft};--color-ink:${c.dark};
  --color-cream:${c.background};--color-mute:${c.muted};--color-rule:${c.rule};
  --radius-panel:${brand.panelRadius}px;
}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style dangerouslySetInnerHTML={{ __html: themeCss }} />
        {/* Lets the CSS hide reveal-on-scroll content only when JavaScript is running */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="font-sans">
        <JsonLd data={[organizationLd(), websiteLd()]} />
        <Header />
        <main>{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
