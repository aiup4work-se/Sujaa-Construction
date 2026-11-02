import { renderOg, ogSize } from "@/lib/og";
import { projects } from "@/data/projects";

export const alt = "Project";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((x) => ({ slug: x.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const x = projects.find((i) => i.slug === slug);
  return renderOg({ eyebrow: x ? `${x.category} · ${x.location}` : "Project", title: x ? x.name : "", subtitle: x ? x.summary : "" });
}
