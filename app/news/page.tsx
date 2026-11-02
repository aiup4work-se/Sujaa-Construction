import type { Metadata } from "next";
import Link from "next/link";
import Photo, { type Scene } from "@/components/Photo";
import { PageHero } from "@/components/ui";
import { news } from "@/data/content";
import { pages } from "@/site.config";

export const metadata: Metadata = { title: "Insights & News" };

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
              <p className="mt-5 text-[13px] uppercase text-mute">
                {n.tag} · {new Date(n.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
              </p>
              <h2 className="mt-2 text-[24px] leading-[1.25] tracking-[-0.01em] group-hover:underline">{n.title}</h2>
              <p className="mt-2 text-[15px] leading-[1.6] text-mute">{n.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
