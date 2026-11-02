import type { Metadata } from "next";
import Photo from "@/components/Photo";
import Portrait from "@/components/Portrait";
import { CtaBand, PageHero, SectionHead } from "@/components/ui";
import { leadership, milestones, values } from "@/data/site";
import { certifications } from "@/data/content";
import { pages } from "@/site.config";
import { labels as L } from "@/site.config";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({ title: "About Us", description: pages.about.hero.text, path: "/about" });
const a = pages.about;

export default function AboutPage() {
  return (
    <>
      <PageHero {...a.hero} image={a.hero.photo} />

      <section className="shell pt-24 lg:pt-[100px]">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <SectionHead label={L.ourStory} title={a.storyTitle} />
            <div className="mt-6 space-y-4 t-body">
              {a.story.map((p) => <p key={p}>{p}</p>)}
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[22px] bg-night p-6 text-white">
                <h3 className="t-title">{L.vision}</h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-white/75">{a.vision}</p>
              </div>
              <div className="rounded-[22px] bg-sun p-6">
                <h3 className="t-title">{L.mission}</h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-night/75">{a.mission}</p>
              </div>
            </div>
          </div>
          <Photo src={a.storyPhoto} alt="Our team on site" scene="workers" className="min-h-[380px] rounded-[var(--radius-panel)]" />
        </div>
      </section>

      <section className="shell pt-24 lg:pt-[120px]">
        <SectionHead label={L.milestones} title={a.milestonesTitle} />
        <ol className="mt-12 grid border-t border-rule sm:grid-cols-2 lg:grid-cols-3">
          {milestones.map((m) => (
            <li key={m.year + m.text} className="border-b border-rule py-7 pr-8">
              <div className="t-num text-[clamp(36px,3vw,56px)]">{m.year}</div>
              <p className="mt-3 t-body">{m.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="shell pt-24 lg:pt-[120px]">
        <SectionHead label={L.leadership} title={a.leadershipTitle} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {leadership.map((p, i) => (
            <article key={p.name}>
              <div className="relative aspect-[286/300] overflow-hidden rounded-[22px] bg-sun">
                <Portrait src={p.photo} alt={p.name} seed={i} className={p.photo ? "absolute inset-0" : "absolute inset-x-0 bottom-0 top-[6%]"} />
              </div>
              <h3 className="t-title mt-4">{p.name}</h3>
              <p className="t-small text-mute">{p.role}</p>
              <p className="mt-2 t-small text-mute">{p.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-24 edge lg:mt-[120px]">
        <div className="rounded-[var(--radius-panel)] bg-night px-6 py-14 text-white sm:px-12 lg:rounded-[40px] lg:py-20">
          <p className="t-label text-white/70">— {L.whatWeStandFor} —</p>
          <h2 className="h-section mt-5">{a.valuesTitle}</h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-[22px] bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="bg-night p-7">
                <h3 className="t-title">{v.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-white/70">{v.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {certifications.map((c) => (
              <span key={c.title} className="rounded-full border border-white/25 px-4 py-2 text-[13px]"><b className="font-medium text-sun">{c.title}</b> · {c.text}</span>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
