"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import Photo from "@/components/Photo";
import { SectionLabel } from "@/components/Buttons";
import { services } from "@/data/services";
import { home } from "@/site.config";
import Lines from "@/components/Lines";

const cfg = home.services;
const items = services.slice(0, cfg.count);

export default function Services() {
  const [active, setActive] = useState(Math.min(Math.max(cfg.defaultActive - 1, 0), items.length - 1));
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);
  const box = useRef<HTMLDivElement>(null);

  const left = items[(active + 1) % items.length];
  const right = items[active];

  return (
    <section className="mt-24 edge lg:mt-[100px]">
      <div
        ref={box}
        className="relative overflow-hidden rounded-[var(--radius-panel)] bg-night px-5 py-16 lg:rounded-[40px] lg:py-[92px]"
        onMouseMove={(e) => {
          const r = box.current?.getBoundingClientRect();
          if (r) setCursor({ x: e.clientX - r.left, y: e.clientY - r.top });
        }}
        onMouseLeave={() => setCursor(null)}
      >
        <div data-reveal className="flex justify-center"><SectionLabel light>{cfg.label}</SectionLabel></div>

        {/* Floating tilted photos (desktop) */}
        <div className="pointer-events-none absolute left-[6%] top-[47%] hidden w-[250px] -rotate-[9deg] opacity-90 transition-all duration-500 lg:block" aria-hidden="true">
          <Photo key={left.slug} src={left.image} alt="" scene={left.scene} className="aspect-square w-full rounded-[28px] shadow-2xl" />
        </div>
        <div className="pointer-events-none absolute right-[6%] top-[20%] hidden w-[250px] rotate-[6deg] opacity-90 transition-all duration-500 lg:block" aria-hidden="true">
          <Photo key={right.slug} src={right.image} alt="" scene={right.scene} className="aspect-square w-full rounded-[28px] shadow-2xl" />
        </div>

        <ul className="relative z-10 mt-10 flex flex-col items-center gap-3 text-center lg:mt-12 lg:gap-[22px]">
          {items.map((s, i) => {
            const dist = Math.abs(i - active);
            const tone = dist === 0 ? "text-white" : dist === 1 ? "text-white/60" : "text-white/35";
            return (
              <li key={s.slug} data-reveal style={{ "--d": i } as React.CSSProperties}>
                <Link
                  href={`/services/${s.slug}`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={`font-display text-[28px] font-[450] leading-[1.2] tracking-[-0.03em] [font-stretch:92%] transition-colors duration-300 sm:text-[40px] lg:text-[clamp(46px,3.6vw,68px)] ${tone} lg:cursor-none`}
                >
                  {s.short}
                  <span className="ml-3 align-super font-mono text-[12px] tracking-[0.1em] text-white/50 sm:text-[14px]">({String(i + 1).padStart(2, "0")})</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* "Click for detail" cursor */}
        {cursor && (
          <div
            className="pointer-events-none absolute z-20 hidden h-[84px] w-[84px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/15 text-center text-[12px] leading-tight text-white backdrop-blur-md lg:flex"
            style={{ left: cursor.x, top: cursor.y }}
            aria-hidden="true"
          >
            <Lines text={cfg.cursorText} />
          </div>
        )}
      </div>
    </section>
  );
}
