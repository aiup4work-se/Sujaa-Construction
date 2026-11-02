import { renderOg, ogSize } from "@/lib/og";
import { pages } from "@/site.config";

export const alt = "Projects";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return renderOg({ eyebrow: pages.projects.hero.label, title: pages.projects.hero.title.replace(/\n/g, " "), subtitle: pages.projects.hero.text });
}
