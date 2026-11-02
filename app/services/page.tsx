import type { Metadata } from "next";
import Link from "next/link";
import Photo from "@/components/Photo";
import { PillLink } from "@/components/Buttons";
import { CtaBand, PageHero } from "@/components/ui";
import { services } from "@/data/services";
import { pages } from "@/site.config";
import { labels as L } from "@/site.config";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({ title: "Construction Services", description: pages.services.hero.text, path: "/services" });

export default function ServicesPage() {
  return (
    <>
      <PageHero {...pages.services.hero} image={pages.services.hero.photo} />

      <section className="shell pt-20 lg:pt-[100px]">
        <div className="flex flex-col gap-16 lg:gap-24">
          {services.map((s, i) => (
            <article key={s.slug} id={s.slug} className="grid scroll-mt-32 items-center gap-8 lg:grid-cols-2 lg:gap-16">
              <Link href={`/services/${s.slug}`} className={`block ${i % 2 ? "lg:order-2" : ""}`} aria-label={s.title}><Photo src={s.image} alt={s.title} scene={s.scene} className="aspect-[16/11] rounded-[var(--radius-panel)]" /></Link>
              <div>
                <p className="t-label text-mute">— {String(i + 1).padStart(2, "0")} —</p>
                <h2 className="h-section mt-4">{s.title}</h2>
                <p className="mt-4 t-body">{s.summary}</p>
                <ul className="mt-7 flex flex-wrap gap-2">
                  {s.details.map((d) => (
                    <li key={d} className="rounded-full border border-night/25 px-4 py-2 text-[14px]">{d}</li>
                  ))}
                </ul>
                <PillLink href={`/services/${s.slug}`} className="mt-8">{L.explore} {s.short}</PillLink>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
