import type { Metadata } from "next";
import Link from "next/link";
import Photo, { type Scene } from "@/components/Photo";
import { PageHero } from "@/components/ui";
import { news } from "@/data/content";
import { pages } from "@/site.config";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({ title: "Insights & News", description: pages.news.hero.text, path: "/news" });

const scenes: Scene[] = ["crane", "site", "workers", "city", "tower"];

export default function NewsPage() {
  const items = [...news].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <PageHero {...pages.news.hero} image={pages.news.hero.photo} />
      <section className="shell pt-16 lg:pt-20">
        <div className="grid gap-x-6 gap-y-12 md:grid-cols-2">
          {items.map((n, i) => (
            <Link key={n.slug} href={`/news/${n.slug}`} className="group block">
              <Photo src={n.image} alt="" scene={scenes[i % scenes.length]} className="aspect-[16/10] rounded-[22px]" />
              <p className="mt-5 t-label text-mute">
                {n.tag} · {new Date(n.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
              </p>
              <h2 className="t-title mt-2 !text-[clamp(22px,1.7vw,28px)] group-hover:underline">{n.title}</h2>
              <p className="mt-2 t-body">{n.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
