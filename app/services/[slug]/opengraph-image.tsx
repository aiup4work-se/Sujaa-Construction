import { renderOg, ogSize } from "@/lib/og";
import { services } from "@/data/services";

export const alt = "Service";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return services.map((x) => ({ slug: x.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const x = services.find((i) => i.slug === slug);
  return renderOg({ eyebrow: "Our services", title: x ? x.title : "", subtitle: x ? x.summary : "" });
}
