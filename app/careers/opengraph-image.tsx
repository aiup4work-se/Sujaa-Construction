import { renderOg, ogSize } from "@/lib/og";
import { pages } from "@/site.config";

export const alt = "Careers";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return renderOg({ eyebrow: pages.careers.hero.label, title: pages.careers.hero.title.replace(/\n/g, " "), subtitle: pages.careers.hero.text });
}
