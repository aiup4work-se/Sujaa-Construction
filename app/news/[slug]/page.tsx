import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Photo from "@/components/Photo";
import { Arrow, SectionLabel } from "@/components/Buttons";
import { news } from "@/data/content";
import { labels as L } from "@/site.config";
import JsonLd from "@/components/JsonLd";
import { absUrl, breadcrumbLd, pageMeta, siteUrl } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

const fmt = (d: string) => new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const n = news.find((x) => x.slug === slug);
  return n ? pageMeta({ title: n.title, description: n.excerpt, path: `/news/${n.slug}`, type: "article", publishedTime: n.date }) : {};
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const n = news.find((x) => x.slug === slug);
  if (!n) notFound();
  const more = news.filter((x) => x.slug !== n.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={[
        breadcrumbLd([{ name: "News", path: "/news" }, { name: n.title, path: `/news/${n.slug}` }]),
        {
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          headline: n.title,
          description: n.excerpt,
          datePublished: n.date,
          image: [absUrl(`/news/${n.slug}/opengraph-image`)],
          mainEntityOfPage: absUrl(`/news/${n.slug}`),
          author: { "@id": `${siteUrl}/#organization` },
          publisher: { "@id": `${siteUrl}/#organization` },
        },
      ]} />
      <section className="edge pt-3 sm:pt-5">
        <div className="rounded-[var(--radius-panel)] bg-sun px-6 pb-12 pt-[120px] sm:px-12 md:pt-[150px]">
          <div className="mx-auto max-w-[820px]">
            <Link href="/news" className="inline-flex items-center gap-2 text-[14px] text-night/70 hover:text-night"><Arrow dir="w" /> {L.allNews}</Link>
            <p className="mt-6 t-label text-night/70">{n.tag} · {fmt(n.date)}</p>
            <h1 className="t-display mt-4 !text-[clamp(36px,4vw,72px)]">{n.title}</h1>
            <p className="mt-6 text-[clamp(17px,1.2vw,20px)] font-medium leading-[1.6] text-night/70">{n.excerpt}</p>
          </div>
        </div>
      </section>

      <article className="shell pt-12">
        <Photo src={n.image} alt={n.title} className="mx-auto aspect-[16/8] max-w-[1080px] rounded-[var(--radius-panel)]" priority sizes="(max-width:1100px) 100vw, 1080px" />
        <div className="mx-auto mt-12 max-w-[720px] space-y-6 text-[clamp(17px,1.15vw,19px)] leading-[1.8] text-night/80">
          {(n.body ?? [n.excerpt]).map((para) => <p key={para}>{para}</p>)}
        </div>
      </article>

      {more.length > 0 && (
        <section className="shell pt-24">
          <SectionLabel>{L.moreStories}</SectionLabel>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {more.map((m) => (
              <Link key={m.slug} href={`/news/${m.slug}`} className="group">
                <Photo src={m.image} alt="" className="aspect-[16/10] rounded-[20px]" sizes="33vw" />
                <p className="mt-4 t-label text-mute">{m.tag} · {fmt(m.date)}</p>
                <h3 className="t-title mt-1.5 group-hover:underline">{m.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
