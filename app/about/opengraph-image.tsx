import { renderOg, ogSize } from "@/lib/og";
import { pages } from "@/site.config";

export const alt = "About";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return renderOg({ eyebrow: pages.about.hero.label, title: pages.about.hero.title.replace(/\n/g, " "), subtitle: pages.about.hero.text });
}
