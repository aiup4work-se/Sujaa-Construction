import { renderOg, ogSize } from "@/lib/og";
import { brand, home } from "@/site.config";

export const alt = `${brand.name} — ${brand.tagline}`;
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return renderOg({ eyebrow: "Construction & Engineering", title: home.hero.title.replace(/\n/g, " "), subtitle: brand.description });
}
