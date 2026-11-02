import type { Metadata } from "next";
import Photo from "@/components/Photo";
import { CtaBand, PageHero, SectionHead } from "@/components/ui";
import { pages } from "@/site.config";
import { labels as L } from "@/site.config";

export const metadata: Metadata = { title: "Sustainability" };
const s = pages.sustainability;

export default function SustainabilityPage() {
  return (
    <>
      <PageHero {...s.hero} image={s.hero.photo} />

      <section className="shell pt-20">
        <dl className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {s.figures.map((f) => (
            <div key={f.label} className="rounded-[22px] bg-white p-6">
              <dd className="text-[40px] leading-none tracking-[-0.02em]">{f.value}</dd>
              <dt className="mt-3 text-[14px] text-mute">{f.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      <section className="shell pt-24">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead label={L.ourApproach} title={s.title} />
            <ul className="mt-8">
              {s.pillars.map((p) => (
                <li key={p.title} className="border-b border-rule py-6">
                  <h3 className="text-[22px]">{p.title}</h3>
                  <p className="mt-2 text-[15px] leading-[1.6] text-mute">{p.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <Photo src={s.photo} alt="Building under construction" scene="tower" className="aspect-[4/5] rounded-[var(--radius-panel)] lg:sticky lg:top-28" />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
