import { renderOg, ogSize } from "@/lib/og";
import { pages } from "@/site.config";

export const alt = "Safety";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return renderOg({ eyebrow: pages.safety.hero.label, title: pages.safety.hero.title.replace(/\n/g, " "), subtitle: pages.safety.hero.text });
}
