import type { Metadata } from "next";
import { PageHero, SectionHead } from "@/components/ui";
import { jobs } from "@/data/content";
import { pages } from "@/site.config";
import { labels as L } from "@/site.config";

export const metadata: Metadata = { title: "Careers" };
const c = pages.careers;
const fmt = (d: string) => new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

export default function CareersPage() {
  return (
    <>
      <PageHero {...c.hero} image={c.hero.photo} />

      <section className="shell pt-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {c.perks.map((p) => (
            <div key={p.title} className="rounded-[22px] bg-white p-6">
              <h3 className="text-[20px]">{p.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-mute">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="shell pt-24">
        <SectionHead label={L.openPositions} title={c.vacanciesTitle} text={c.howToApply} />
        {jobs.length ? (
          <ul className="mt-10">
            {jobs.map((j) => (
              <li key={j.title} className="grid gap-2 border-b border-rule py-6 md:grid-cols-[1.4fr_1fr_1fr_auto] md:items-center md:gap-6">
                <span className="text-[20px] tracking-[-0.01em]">{j.title}</span>
                <span className="text-[14px] text-mute">{j.department} · {j.location}</span>
                <span className="text-[14px] text-mute">{L.closes} {fmt(j.closing)}</span>
                <span className="w-fit rounded-full border border-night/25 px-4 py-1.5 text-[13px]">{j.type}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-10 text-[16px] text-mute">{L.noVacancies}</p>
        )}
      </section>
    </>
  );
}
