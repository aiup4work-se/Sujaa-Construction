import Link from "next/link";
import Portrait from "@/components/Portrait";
import { Arrow } from "@/components/Buttons";
import { leadership } from "@/data/site";
import Carousel from "./Carousel";
import { home } from "@/site.config";
import Lines from "@/components/Lines";

export default function Team() {
  return (
    <Carousel
      label={home.team.label}
      title={<Lines text={home.team.title} desktopOnly />}
      intro={home.team.text}
    >
      {leadership.map((p, i) => (
        <article key={p.name} data-reveal style={{ "--d": i } as React.CSSProperties} className="group relative w-[70%] shrink-0 snap-start sm:w-[calc((100%-40px)/3)] lg:w-[calc((100%-60px)/4)]">
          {/* Yellow card with the cut-out corner */}
          <div className="relative aspect-[286/300] overflow-hidden rounded-[22px] bg-sun">
            <Portrait src={p.photo} alt={p.name} seed={i} className={`transition-transform duration-700 group-hover:scale-[1.05] ${p.photo ? "absolute inset-0" : "absolute inset-x-0 bottom-0 top-[6%]"}`} />
            <div className="glass absolute inset-x-3.5 bottom-3.5 rounded-[12px] bg-black/15 px-4 py-2.5 text-white">
              <p className="font-display text-[16px] font-semibold tracking-[-0.01em]">{p.name}</p>
              <p className="t-label !text-[10.5px] mt-0.5 text-white/80">{p.role}</p>
            </div>
          </div>
          {/* corner notch */}
          <span className="absolute -right-px -top-px h-[54px] w-[54px] rounded-bl-[20px] bg-cream" aria-hidden="true" />
          <span className="absolute right-[54px] top-0 h-5 w-5 bg-[radial-gradient(circle_at_bottom_left,transparent_19.5px,var(--color-cream)_20px)]" aria-hidden="true" />
          <span className="absolute right-0 top-[54px] h-5 w-5 bg-[radial-gradient(circle_at_bottom_left,transparent_19.5px,var(--color-cream)_20px)]" aria-hidden="true" />
          <Link href="/about" aria-label={`About ${p.name}`}
            className="absolute right-1.5 top-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-sun text-night transition-transform hover:rotate-45">
            <Arrow />
          </Link>
        </article>
      ))}
    </Carousel>
  );
}
