import { renderOg, ogSize } from "@/lib/og";
import { pages } from "@/site.config";

export const alt = "Equipment";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return renderOg({ eyebrow: pages.equipment.hero.label, title: pages.equipment.hero.title.replace(/\n/g, " "), subtitle: pages.equipment.hero.text });
}
