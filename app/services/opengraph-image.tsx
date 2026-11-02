import { renderOg, ogSize } from "@/lib/og";
import { pages } from "@/site.config";

export const alt = "Services";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return renderOg({ eyebrow: pages.services.hero.label, title: pages.services.hero.title.replace(/\n/g, " "), subtitle: pages.services.hero.text });
}
