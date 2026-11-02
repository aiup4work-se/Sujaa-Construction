import Link from "next/link";
import Photo from "@/components/Photo";
import { projects, sceneFor } from "@/data/projects";
import Carousel from "./Carousel";
import { home } from "@/site.config";
import Lines from "@/components/Lines";

export default function Works() {
  return (
    <Carousel
      label={home.works.label}
      title={<Lines text={home.works.title} desktopOnly />}
      intro={home.works.text}
    >
      {projects.map((p, i) => (
        <Link key={p.slug} href={`/projects/${p.slug}`} data-reveal style={{ "--d": Math.min(i, 3) } as React.CSSProperties}
          className="group relative block aspect-[390/480] w-[82%] shrink-0 snap-start overflow-hidden rounded-[22px] sm:w-[calc((100%-20px)/2)] lg:w-[calc((100%-40px)/3)]">
          <Photo src={p.image} alt={p.name} scene={sceneFor[p.category]} className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]" sizes="(max-width:768px) 85vw, 33vw" />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="glass absolute inset-x-3.5 bottom-3.5 rounded-[16px] p-4 text-white sm:p-5">
            <h3 className="t-title">{p.name}</h3>
            <div className="my-3 h-px bg-white/30" />
            <p className="t-small line-clamp-3 text-white/80">{p.summary}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {[p.category, p.status, p.size].filter(Boolean).map((t) => (
                <li key={t} className="rounded-full border border-white/45 px-3 py-1 font-mono text-[11px] tracking-[0.04em]">#{String(t).replace(/\s+/g, "")}</li>
              ))}
            </ul>
          </div>
        </Link>
      ))}
    </Carousel>
  );
}
