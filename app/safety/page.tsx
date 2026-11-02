import type { Metadata } from "next";
import Photo from "@/components/Photo";
import { CtaBand, PageHero, SectionHead } from "@/components/ui";
import { certifications } from "@/data/content";
import { pages } from "@/site.config";
import { labels as L } from "@/site.config";

export const metadata: Metadata = { title: "Health, Safety & Quality" };
const s = pages.safety;

export default function SafetyPage() {
  return (
    <>
      <PageHero {...s.hero} image={s.hero.photo} />

      <section className="shell pt-20">
        <dl className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {s.figures.map((f) => (
            <div key={f.label} className="rounded-[22px] bg-white p-6">
              <dd className="text-[40px] leading-none tracking-[-0.02em]">{f.value}</dd>
              <dt className="mt-3 text-[14px] leading-snug text-mute">{f.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      <section className="shell pt-24">
        <SectionHead label={L.onEverySite} title={s.title} text={s.text} />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {s.practices.map((p) => (
            <div key={p.title} className="rounded-[22px] border border-rule p-7">
              <h3 className="text-[20px]">{p.title}</h3>
              <p className="mt-2 text-[15px] leading-[1.6] text-mute">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24 edge">
        <div className="grid items-center gap-10 overflow-hidden rounded-[var(--radius-panel)] bg-night p-6 text-white sm:p-12 lg:grid-cols-2 lg:rounded-[40px]">
          <div>
            <p className="text-[13px] uppercase text-white/70">— {L.certifications} —</p>
            <h2 className="h-section mt-5">{L.independentlyCertified}</h2>
            <ul className="mt-8 divide-y divide-white/10">
              {certifications.map((c) => (
                <li key={c.title} className="flex justify-between gap-6 py-4">
                  <span className="text-[18px] text-sun">{c.title}</span>
                  <span className="text-right text-[14px] text-white/70">{c.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <Photo src={s.photo} alt="Site team in full PPE" className="aspect-[4/3] rounded-[22px]" />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
