import { renderOg, ogSize } from "@/lib/og";
import { news } from "@/data/content";

export const alt = "News";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return news.map((x) => ({ slug: x.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const x = news.find((i) => i.slug === slug);
  return renderOg({ eyebrow: x ? `${x.tag} · ${x.date}` : "News", title: x ? x.title : "", subtitle: x ? x.excerpt : "" });
}
