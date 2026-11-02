"use client";

import { useState } from "react";
import Portrait from "@/components/Portrait";
import { NavArrows, QuoteMark, SectionLabel } from "@/components/Buttons";
import { testimonials } from "@/data/content";
import { projects } from "@/data/projects";
import Photo from "@/components/Photo";
import { home } from "@/site.config";
import Lines from "@/components/Lines";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const proj = projects.find((p) => p.slug === t.project);
  const go = (d: number) => setI((v) => (v + d + testimonials.length) % testimonials.length);

  return (
    <section className="mt-24 edge lg:mt-[120px]">
      <div className="rounded-[var(--radius-panel)] bg-night px-5 py-14 text-white sm:px-9 lg:rounded-[40px] lg:px-10 lg:py-[92px]">
        <div className="mx-auto max-w-[1840px]">
          <div data-reveal><SectionLabel light>{home.testimonials.label}</SectionLabel></div>
          <div data-reveal style={{ "--d": 1 } as React.CSSProperties} className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-[760px]">
              <h2 className="h-section"><Lines text={home.testimonials.title} /></h2>
              <p className="mt-4 text-[15px] leading-[1.65] text-white/75">{home.testimonials.text}</p>
            </div>
            <NavArrows dark onPrev={() => go(-1)} onNext={() => go(1)} />
          </div>

          <div data-reveal style={{ "--d": 2 } as React.CSSProperties} className="mt-12 grid items-center gap-10 lg:grid-cols-[414px_1fr] lg:gap-[70px]" aria-live="polite">
            <div className="relative aspect-[414/550] max-h-[560px] w-full max-w-[414px] overflow-hidden rounded-[22px] bg-[#e9eaec]">
              {t.photo || !proj ? (
                <Portrait src={t.photo} alt={t.name} seed={i + 1} className={t.photo ? "absolute inset-0" : "absolute inset-x-0 bottom-0 top-[8%]"} />
              ) : (
                <Photo key={proj.slug} src={proj.image} alt={proj.name} className="absolute inset-0" sizes="420px" />
              )}
              <div className="glass absolute bottom-5 left-1/2 w-[70%] -translate-x-1/2 rounded-[12px] bg-black/35 py-3 text-center text-white">
                <p className="text-[20px]">{t.name}</p>
                <p className="text-[13px] text-white/80">{t.role}</p>
                {proj && !t.photo && <p className="mt-1 text-[12px] text-white/70">{proj.name}</p>}
              </div>
            </div>

            <figure key={i} className="anim-rise relative">
              <QuoteMark className="h-7 w-11 text-white" />
              <blockquote className="mt-6 text-[26px] leading-[1.5] tracking-[-0.01em] sm:text-[34px] lg:text-[clamp(40px,2.6vw,52px)]">
                {t.quote}
              </blockquote>
              <QuoteMark className="ml-auto mt-4 h-7 w-11 rotate-180 text-white" />
              <figcaption className="sr-only">{t.name}, {t.role}</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
