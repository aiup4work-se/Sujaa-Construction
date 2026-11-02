import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RevealObserver } from "@/components/Motion";
import { brand, seo } from "@/site.config";
// Fonts bundled from npm (no Google Fonts request at build time)
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/outfit/300.css";
import "@fontsource/outfit/400.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: { default: `${brand.name} | ${brand.tagline}`, template: `%s | ${brand.name}` },
  description: brand.description,
  openGraph: { title: brand.name, description: brand.description, type: "website", locale: seo.locale },
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
        <Header />
        <main>{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
