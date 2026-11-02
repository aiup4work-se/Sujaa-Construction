"use client";

import { useRef } from "react";
import { NavArrows, SectionLabel } from "@/components/Buttons";

/** Section header (label, title, intro, arrows) + horizontally scrolling track. */
export default function Carousel({ label, title, intro, children, itemClass }: {
  label: string; title: React.ReactNode; intro: string; children: React.ReactNode; itemClass?: string;
}) {
  const track = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    const el = track.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    const step = first ? first.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="shell pt-24 lg:pt-[120px]">
      <div data-reveal><SectionLabel>{label}</SectionLabel></div>
      <div data-reveal style={{ "--d": 1 } as React.CSSProperties} className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-[920px]">
          <h2 className="h-section">{title}</h2>
          <p className="mt-4 max-w-[560px] text-[15px] leading-[1.65] text-mute">{intro}</p>
        </div>
        <NavArrows onPrev={() => scroll(-1)} onNext={() => scroll(1)} />
      </div>
      <div ref={track} className={`no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto rounded-[22px] ${itemClass ?? ""}`}>
        {children}
      </div>
    </section>
  );
}
