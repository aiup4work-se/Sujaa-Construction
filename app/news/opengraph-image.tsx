import { renderOg, ogSize } from "@/lib/og";
import { pages } from "@/site.config";

export const alt = "News";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return renderOg({ eyebrow: pages.news.hero.label, title: pages.news.hero.title.replace(/\n/g, " "), subtitle: pages.news.hero.text });
}
