import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Photo from "@/components/Photo";
import { Arrow, PillLink, SectionLabel } from "@/components/Buttons";
import { CtaBand, PageHero, ProjectCard } from "@/components/ui";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { pages } from "@/site.config";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd, pageMeta, siteUrl, absUrl } from "@/lib/seo";
import { labels as L } from "@/site.config";

type Params = { params: Promise<{ slug: string }> };

const process = pages.services.process;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return s ? pageMeta({ title: `${s.title} Services`, description: s.summary, path: `/services/${s.slug}` }) : {};
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();

  const work = projects.filter((p) => s.projectSectors.includes(p.category)).slice(0, 3);
  const others = services.filter((x) => x.slug !== s.slug);

  return (
    <>
      <JsonLd data={[
        breadcrumbLd([{ name: "Services", path: "/services" }, { name: s.title, path: `/services/${s.slug}` }]),
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.title,
          serviceType: s.title,
          description: s.summary,
          url: absUrl(`/services/${s.slug}`),
          provider: { "@id": `${siteUrl}/#organization` },
          areaServed: { "@type": "Country", name: "Sri Lanka" },
        },
      ]} />
      <PageHero label={pages.services.hero.label} title={s.title} text={s.summary} image={s.image} scene={s.scene} />

      <section className="shell pt-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
          <div>
            <SectionLabel>{L.whatsIncluded}</SectionLabel>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {s.details.map((d) => (
                <li key={d} className="flex items-center gap-4 rounded-[16px] bg-white px-5 py-4 text-[16px]">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sun"><Arrow className="h-3.5 w-3.5" /></span>
                  {d}
                </li>
              ))}
            </ul>

            <h2 className="h-section mt-16">{L.howWeDeliver}</h2>
            <ol className="mt-8 grid gap-5 sm:grid-cols-2">
              {process.map((p, i) => (
                <li key={p.title} className="border-t border-night pt-5">
                  <p className="t-label text-mute">{L.step} {i + 1}</p>
                  <h3 className="t-title mt-1">{p.title}</h3>
                  <p className="mt-2 t-body">{p.text}</p>
                </li>
              ))}
            </ol>
          </div>

          <aside className="h-fit rounded-[var(--radius-panel)] bg-night p-7 text-white lg:sticky lg:top-28">
            <h2 className="t-title">{L.otherServices}</h2>
            <ul className="mt-4 divide-y divide-white/10">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/services/${o.slug}`} className="flex items-center justify-between py-3.5 text-[15px] text-white/85 hover:text-sun">
                    {o.title} <Arrow dir="e" />
                  </Link>
                </li>
              ))}
            </ul>
            <PillLink href="/contact" className="mt-6 bg-white/10">{L.requestProposal}</PillLink>
          </aside>
        </div>
      </section>

      {work.length > 0 && (
        <section className="shell pt-24">
          <SectionLabel>{L.relatedWork}</SectionLabel>
          <h2 className="h-section mt-5">{L.projectsInField}</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {work.map((p) => <ProjectCard key={p.slug} project={p} />)}
          </div>
        </section>
      )}

      <section className="shell pt-20">
        <Photo src={s.image} alt={s.title} scene={s.scene} className="aspect-[21/9] rounded-[var(--radius-panel)]" sizes="100vw" />
      </section>

      <CtaBand />
    </>
  );
}
