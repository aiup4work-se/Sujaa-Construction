import { renderOg, ogSize } from "@/lib/og";
import { pages } from "@/site.config";

export const alt = "Contact";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return renderOg({ eyebrow: pages.contact.hero.label, title: pages.contact.hero.title.replace(/\n/g, " "), subtitle: pages.contact.hero.text });
}
