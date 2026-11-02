"use client";

import { useState } from "react";
import { Arrow, SectionLabel } from "@/components/Buttons";
import { faqs } from "@/data/content";
import { home } from "@/site.config";
import Lines from "@/components/Lines";

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="shell pt-24 lg:pt-[100px]">
      <div data-reveal><SectionLabel>{home.faq.label}</SectionLabel></div>
      <div data-reveal style={{ "--d": 1 } as React.CSSProperties} className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-start">
        <h2 className="h-section"><Lines text={home.faq.title} /></h2>
        <p className="max-w-[320px] text-[15px] leading-[1.6] text-mute md:mt-2">{home.faq.text}</p>
      </div>

      <ul className="mt-10 lg:mt-12">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <li key={f.q} data-reveal style={{ "--d": i } as React.CSSProperties} className={i < faqs.length - 1 ? "border-b border-rule" : ""}>
              <button
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span className="text-[18px] tracking-[-0.01em] sm:text-[22px]">{f.q}</span>
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors ${isOpen ? "bg-night text-white" : "border border-night/50 text-night"}`}>
                  {isOpen ? <Arrow /> : <Arrow dir="e" />}
                </span>
              </button>
              <div id={`faq-${i}`} hidden={!isOpen} className="-mt-3 max-w-[760px] pb-6 text-[15px] leading-[1.6] text-mute">
                {f.a}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
