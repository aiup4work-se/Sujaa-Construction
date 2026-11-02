import Link from "next/link";
import Photo, { type Scene } from "./Photo";
import { PillLink, SectionLabel } from "./Buttons";
import type { Project } from "@/data/projects";
import { sceneFor } from "@/data/projects";
import { cta, contact } from "@/site.config";
import Lines from "./Lines";
import { optional } from "@/lib/optional";

/** Inner-page hero: yellow panel + photo panel, echoing the home hero. */
export function PageHero({ label, title, text, scene = "site", image, photo }: { label: string; title: string; text?: string; scene?: Scene; image?: string; photo?: string }) {
  image = image ?? photo;
  return (
    <section className="edge pt-3 sm:pt-5">
      <div className="grid gap-3 md:grid-cols-[1.25fr_1fr] md:gap-5">
        <div className="anim-rise flex flex-col justify-end rounded-[var(--radius-panel)] bg-sun px-6 pb-10 pt-[120px] sm:px-9 md:min-h-[440px] md:pt-[150px]">
          <SectionLabel>{label}</SectionLabel>
          <h1 className="t-display mt-5 max-w-[760px] !text-[clamp(40px,4.4vw,80px)]"><Lines text={title} /></h1>
          {text && <p className="mt-6 max-w-[540px] text-[clamp(16px,1.1vw,18px)] font-medium leading-[1.6] text-night/70">{text}</p>}
        </div>
        <div style={{ "--d": 1 } as React.CSSProperties} className="anim-rise anim-ken relative min-h-[260px] overflow-hidden rounded-[var(--radius-panel)] md:min-h-0"><Photo src={image} alt="" scene={scene} priority className="absolute inset-0" /></div>
      </div>
    </section>
  );
}

export function SectionHead({ label, title, text }: { label: string; title: React.ReactNode; text?: string }) {
  return (
    <div data-reveal>
      <SectionLabel>{label}</SectionLabel>
      <div className="mt-5 flex flex-col justify-between gap-5 lg:flex-row lg:items-start">
        <h2 className="h-section max-w-[640px]">{typeof title === "string" ? <Lines text={title} /> : title}</h2>
        {text && <p className="t-body max-w-[400px] lg:mt-2">{text}</p>}
      </div>
    </div>
  );
}

export function ProjectCard({ project: p }: { project: Project }) {
  return (
    <Link href={`/projects/${p.slug}`} data-reveal className="lift group relative block aspect-[390/480] overflow-hidden rounded-[22px]">
      <Photo src={p.image} alt={p.name} scene={sceneFor[p.category]} className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]" sizes="(max-width:768px) 100vw, 33vw" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/40 to-transparent" />
      <div className="glass absolute inset-x-3.5 bottom-3.5 rounded-[16px] p-5 text-white">
        <h3 className="t-title">{p.name}</h3>
        <div className="my-3 h-px bg-white/30" />
        <p className="t-small line-clamp-2 text-white/80">{p.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {[p.category, p.status, p.size].filter(Boolean).map((t) => (
            <li key={t} className="rounded-full border border-white/45 px-3 py-1 font-mono text-[11px] tracking-[0.04em]">#{String(t).replace(/\s+/g, "")}</li>
          ))}
        </ul>
      </div>
    </Link>
  );
}

export function CtaBand() {
  return (
    <section className="mt-24 edge lg:mt-32">
      <div data-reveal="scale" className="relative overflow-hidden rounded-[var(--radius-panel)] bg-sun px-6 py-12 sm:px-12 lg:rounded-[40px] lg:px-16 lg:py-20">
        {/* faint blueprint grid */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(var(--color-night)_1px,transparent_1px),linear-gradient(90deg,var(--color-night)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(90deg,transparent,black_70%)]" />
        <div className="relative grid items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="t-label text-night/60">— {optional(cta, "eyebrow", "Start your project")} —</p>
            <h2 className="t-display mt-5 !text-[clamp(40px,4.6vw,84px)]"><Lines text={cta.title} /></h2>
            <p className="mt-6 max-w-[560px] text-[clamp(16px,1.15vw,19px)] font-medium leading-[1.6] text-night/70">{cta.text}</p>
          </div>
          <div className="flex flex-col gap-6 lg:items-end">
            <PillLink href={cta.button.href} className="h-14 pl-7 text-[16px]">{cta.button.label}</PillLink>
            <div className="lg:text-right">
              <p className="t-label text-night/55">{optional(cta, "phoneLabel", "Or call us directly")}</p>
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="t-num mt-2 block text-[clamp(26px,2.2vw,38px)] text-night underline-offset-[6px] hover:underline">{contact.phone}</a>
              <p className="t-small mt-1 text-night/60">{contact.hours}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
