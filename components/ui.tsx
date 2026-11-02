import Link from "next/link";
import Photo, { type Scene } from "./Photo";
import { PillLink, SectionLabel } from "./Buttons";
import type { Project } from "@/data/projects";
import { sceneFor } from "@/data/projects";
import { cta } from "@/site.config";
import Lines from "./Lines";

/** Inner-page hero: yellow panel + photo panel, echoing the home hero. */
export function PageHero({ label, title, text, scene = "site", image, photo }: { label: string; title: string; text?: string; scene?: Scene; image?: string; photo?: string }) {
  image = image ?? photo;
  return (
    <section className="mx-auto  px-3 pt-3 sm:px-5 sm:pt-5">
      <div className="grid gap-3 md:grid-cols-[1.25fr_1fr] md:gap-5">
        <div className="flex flex-col justify-end rounded-[var(--radius-panel)] bg-sun px-6 pb-10 pt-[120px] sm:px-9 md:min-h-[440px] md:pt-[150px]">
          <SectionLabel>{label}</SectionLabel>
          <h1 className="mt-4 max-w-[640px] text-[40px] leading-[1.1] tracking-[-0.025em] sm:text-[52px] lg:text-[60px]"><Lines text={title} /></h1>
          {text && <p className="mt-5 max-w-[520px] text-[16px] leading-[1.6] text-night/75">{text}</p>}
        </div>
        <Photo src={image} alt="" scene={scene} priority className="min-h-[260px] rounded-[var(--radius-panel)] md:min-h-0" />
      </div>
    </section>
  );
}

export function SectionHead({ label, title, text }: { label: string; title: React.ReactNode; text?: string }) {
  return (
    <div>
      <SectionLabel>{label}</SectionLabel>
      <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-start">
        <h2 className="h-section max-w-[640px]">{typeof title === "string" ? <Lines text={title} /> : title}</h2>
        {text && <p className="max-w-[380px] text-[15px] leading-[1.6] text-mute md:mt-2">{text}</p>}
      </div>
    </div>
  );
}

export function ProjectCard({ project: p }: { project: Project }) {
  return (
    <Link href={`/projects/${p.slug}`} className="group relative block aspect-[390/480] overflow-hidden rounded-[22px]">
      <Photo src={p.image} alt={p.name} scene={sceneFor[p.category]} className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]" sizes="(max-width:768px) 100vw, 33vw" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/40 to-transparent" />
      <div className="glass absolute inset-x-3.5 bottom-3.5 rounded-[16px] p-5 text-white">
        <h3 className="text-[18px] leading-snug">{p.name}</h3>
        <div className="my-3 h-px bg-white/30" />
        <p className="line-clamp-2 text-[14px] leading-[1.5] text-white/80">{p.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {[p.category, p.status, p.size].filter(Boolean).map((t) => (
            <li key={t} className="rounded-full border border-white/50 px-3 py-1 text-[12px]">#{String(t).replace(/\s+/g, "")}</li>
          ))}
        </ul>
      </div>
    </Link>
  );
}

export function CtaBand() {
  return (
    <section className="mt-24 px-3 sm:px-5 lg:mt-32">
      <div className="flex flex-col items-start justify-between gap-8 rounded-[var(--radius-panel)] bg-sun px-6 py-12 sm:px-12 md:flex-row md:items-center lg:rounded-[40px] lg:py-16">
        <div>
          <h2 className="h-section"><Lines text={cta.title} /></h2>
          <p className="mt-3 max-w-[520px] text-[15px] leading-[1.6] text-night/75">{cta.text}</p>
        </div>
        <PillLink href={cta.button.href}>{cta.button.label}</PillLink>
      </div>
    </section>
  );
}
