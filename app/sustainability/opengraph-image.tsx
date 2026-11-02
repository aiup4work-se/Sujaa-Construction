import { renderOg, ogSize } from "@/lib/og";
import { pages } from "@/site.config";

export const alt = "Sustainability";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return renderOg({ eyebrow: pages.sustainability.hero.label, title: pages.sustainability.hero.title.replace(/\n/g, " "), subtitle: pages.sustainability.hero.text });
}
