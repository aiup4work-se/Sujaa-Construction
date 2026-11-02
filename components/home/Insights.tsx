import Link from "next/link";
import Photo, { type Scene } from "@/components/Photo";
import { PillLink, SectionLabel } from "@/components/Buttons";
import { news } from "@/data/content";
import { home } from "@/site.config";
import Lines from "@/components/Lines";

const scenes: Scene[] = ["crane", "site", "workers", "city"];

export default function Insights() {
  const [lead, ...rest] = [...news].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <section className="shell pt-24 lg:pt-[120px]">
      <div data-reveal><SectionLabel>{home.insights.label}</SectionLabel></div>
      <div data-reveal style={{ "--d": 1 } as React.CSSProperties} className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-start">
        <h2 className="h-section"><Lines text={home.insights.title} /></h2>
        <p className="t-body max-w-[400px] md:mt-2">{home.insights.text}</p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-[1.12fr_1fr] lg:gap-6">
        <article data-reveal="scale" className="group relative min-h-[420px] overflow-hidden rounded-[22px] lg:min-h-[444px]">
          <Photo src={lead.image} alt={lead.title} scene="crane" className="absolute inset-0" />
          <div className="glass absolute inset-x-3.5 bottom-3.5 rounded-[16px] bg-white/20 p-5 text-white">
            <h3 className="font-display text-[22px] font-semibold leading-[1.2] tracking-[-0.02em] sm:text-[clamp(22px,1.8vw,30px)]">{lead.title}</h3>
            <p className="t-small mt-2 max-w-[520px] text-white/85">{lead.excerpt}</p>
            <PillLink href={`/news/${lead.slug}`} className="mt-5">{home.insights.buttonLabel}</PillLink>
          </div>
        </article>

        <ul className="flex flex-col gap-5">
          {rest.slice(0, 3).map((n, i) => (
            <li key={n.slug} data-reveal="left" style={{ "--d": i + 1 } as React.CSSProperties}>
              <Link href={`/news/${n.slug}`} className="group grid grid-cols-[minmax(0,236px)_1fr] items-center gap-4 sm:gap-5">
                <Photo src={n.image} alt="" scene={scenes[i + 1]} className="aspect-[236/132] rounded-[14px]" sizes="240px" />
                <div className="min-w-0">
                  <h3 className="t-title !text-[clamp(16px,1.15vw,20px)] group-hover:underline">{n.title}</h3>
                  <p className="t-small mt-1.5 line-clamp-2 text-mute">{n.excerpt}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
