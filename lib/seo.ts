import type { Metadata } from "next";
import { brand, contact, seo, social } from "@/site.config";
import { optional } from "./optional";

/** Live site address without a trailing slash, e.g. https://www.example.lk */
export const siteUrl = seo.siteUrl.replace(/\/$/, "");
export const absUrl = (path: string) => (path.startsWith("http") ? path : `${siteUrl}${path.startsWith("/") ? "" : "/"}${path}`);

export const seoKeywords = optional<string[]>(seo, "keywords", [
  "construction company Sri Lanka", "building contractor", "CIDA contractor", "civil engineering",
  "road construction", "piling contractor", "design and build", "infrastructure projects",
]);

type PageMetaInput = {
  title?: string;          // page name; the brand is added automatically by the layout template
  description?: string;
  path: string;            // e.g. "/about"
  type?: "website" | "article";
  publishedTime?: string;
  noIndex?: boolean;
};

/** Consistent title, description, canonical link and social-sharing tags for a page. */
export function pageMeta({ title, description = brand.description, path, type = "website", publishedTime, noIndex }: PageMetaInput): Metadata {
  const fullTitle = title ? `${title} | ${brand.name}` : `${brand.name} | ${brand.tagline}`;
  const desc = description.length > 160 ? `${description.slice(0, 157).trimEnd()}…` : description;
  return {
    title,
    description: desc,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description: desc,
      url: path,
      siteName: brand.name,
      locale: seo.locale,
      type,
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: { card: "summary_large_image", title: fullTitle, description: desc },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}

/** schema.org data describing the company (shown to search engines on every page). */
export function organizationLd() {
  const sameAs = social.map((s) => s.href).filter((h) => !/^https?:\/\/(www\.)?(facebook|linkedin|instagram|youtube)\.com\/?$/.test(h));
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${siteUrl}/#organization`,
    name: brand.name,
    legalName: brand.legalName,
    url: siteUrl,
    logo: absUrl("/icon/large"),
    image: absUrl("/opengraph-image"),
    description: brand.description,
    foundingDate: String(brand.founded),
    telephone: contact.phone,
    email: contact.email,
    address: { "@type": "PostalAddress", streetAddress: contact.address, addressCountry: "LK" },
    areaServed: { "@type": "Country", name: "Sri Lanka" },
    ...(sameAs.length ? { sameAs } : {}),
    contactPoint: [{ "@type": "ContactPoint", telephone: contact.phone, email: contact.email, contactType: "sales", areaServed: "LK", availableLanguage: ["English", "Sinhala", "Tamil"] }],
  };
}

export function websiteLd() {
  return { "@context": "https://schema.org", "@type": "WebSite", "@id": `${siteUrl}/#website`, name: brand.name, url: siteUrl, publisher: { "@id": `${siteUrl}/#organization` }, inLanguage: "en-LK" };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: absUrl(it.path) })),
  };
}
