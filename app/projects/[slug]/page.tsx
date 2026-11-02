import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Photo from "@/components/Photo";
import Gallery from "@/components/Gallery";
import { Arrow, PillLink, SectionLabel } from "@/components/Buttons";
import { CtaBand, ProjectCard } from "@/components/ui";
import { projects, sceneFor } from "@/data/projects";
import { labels as L } from "@/site.config";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p ? { title: p.name, description: p.summary } : {};
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();

  const scene = sceneFor[p.category];
  const related = projects.filter((x) => x.slug !== p.slug && (x.category === p.category || x.status === p.status)).slice(0, 3);
  const facts: [string, string][] = [
    [L.factClient, p.client],
    [L.factLocation, p.location],
    [L.factSector, p.category],
    [L.factScope, p.scope],
    [L.factStatus, p.status],
    [p.status === "Completed" ? L.factCompleted : L.factExpected, p.year],
    ...(p.size ? [[L.factSize, p.size] as [string, string]] : []),
    ...(p.value ? [[L.factValue, p.value] as [string, string]] : []),
  ];

  return (
    <>
      <section className="edge pt-3 sm:pt-5">
        <div className="relative min-h-[560px] overflow-hidden rounded-[var(--radius-panel)] lg:min-h-[640px]">
          <Photo src={p.image} alt={p.name} scene={scene} priority className="absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-10">
            <Link href="/projects" className="inline-flex items-center gap-2 text-[14px] text-white/85 hover:text-white"><Arrow dir="w" /> {L.allProjects}</Link>
            <h1 className="mt-4 max-w-[900px] text-[40px] leading-[1.08] tracking-[-0.025em] sm:text-[60px]">{p.name}</h1>
            <ul className="mt-5 flex flex-wrap gap-2">
              {[p.category, p.status, p.location].map((t) => <li key={t} className="glass rounded-full px-4 py-1.5 text-[13px]">{t}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="shell pt-16 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_400px]">
          <div>
            <SectionLabel>{L.overview}</SectionLabel>
            <p className="mt-5 text-[24px] leading-[1.4] tracking-[-0.01em] sm:text-[30px]">{p.summary}</p>
            <h2 className="mt-12 text-[22px]">{L.highlights}</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {p.highlights.map((h) => (
                <li key={h} className="rounded-[16px] bg-white px-5 py-4 text-[15px]">{h}</li>
              ))}
            </ul>
            {p.story && (
              <div className="mt-12 grid gap-8 sm:grid-cols-2">
                <div>
                  <h2 className="text-[22px]">{L.challenge}</h2>
                  <p className="mt-3 text-[15px] leading-[1.7] text-mute">{p.story.challenge}</p>
                </div>
                <div>
                  <h2 className="text-[22px]">{L.solution}</h2>
                  <p className="mt-3 text-[15px] leading-[1.7] text-mute">{p.story.solution}</p>
                </div>
              </div>
            )}
          </div>
          <aside className="h-fit rounded-[var(--radius-panel)] bg-night p-7 text-white lg:sticky lg:top-28">
            <h2 className="text-[22px]">{L.projectFacts}</h2>
            <dl className="mt-4 divide-y divide-white/10 text-[14px]">
              {facts.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 py-3.5">
                  <dt className="text-white/60">{k}</dt>
                  <dd className="text-right">{v}</dd>
                </div>
              ))}
            </dl>
            <PillLink href="/contact" className="mt-6 w-full justify-between bg-white/10">{L.discussSimilar}</PillLink>
          </aside>
        </div>
      </section>

      {p.gallery && p.gallery.length > 0 && (
        <section className="shell pt-20">
          <SectionLabel>{L.gallery}</SectionLabel>
          <h2 className="h-section mt-5">{L.projectPhotos}</h2>
          <div className="mt-10"><Gallery images={[p.image, ...p.gallery].filter(Boolean) as string[]} title={p.name} /></div>
        </section>
      )}

      {related.length > 0 && (
        <section className="shell pt-24">
          <SectionLabel>{L.moreProjects}</SectionLabel>
          <h2 className="h-section mt-5">{L.youMayAlsoLike}</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => <ProjectCard key={r.slug} project={r} />)}
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
