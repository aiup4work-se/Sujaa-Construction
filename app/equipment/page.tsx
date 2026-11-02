import type { Metadata } from "next";
import Photo from "@/components/Photo";
import { CtaBand, PageHero, SectionHead } from "@/components/ui";
import { pages } from "@/site.config";
import { labels as L } from "@/site.config";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({ title: "Plant & Machinery", description: pages.equipment.hero.text, path: "/equipment" });
const e = pages.equipment;

export default function EquipmentPage() {
  const total = e.fleet.reduce((sum, g) => sum + g.items.reduce((a, i) => a + i.count, 0), 0);
  return (
    <>
      <PageHero {...e.hero} text={`${total}+ ${e.hero.text.charAt(0).toLowerCase()}${e.hero.text.slice(1)}`} image={e.hero.photo} />

      <section className="shell pt-20">
        <SectionHead label={L.fleet} title={e.title} text={e.text} />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {e.fleet.map((g) => (
            <article key={g.group} className="overflow-hidden rounded-[var(--radius-panel)] bg-white">
              <Photo src={g.photo} alt={g.group} className="aspect-[16/8]" sizes="(max-width:768px) 100vw, 50vw" />
              <div className="p-6 sm:p-8">
                <h3 className="text-[24px]">{g.group}</h3>
                <dl className="mt-4 divide-y divide-rule">
                  {g.items.map((i) => (
                    <div key={i.name} className="flex justify-between gap-4 py-3 text-[15px]">
                      <dt className="text-mute">{i.name}</dt>
                      <dd className="tabular-nums">{i.count}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
