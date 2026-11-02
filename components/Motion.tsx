"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

/** Adds `.is-in` to every [data-reveal] element as it scrolls into view. Mounted once in the layout. */
export function RevealObserver() {
  const pathname = usePathname();
  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    const scan = () => document.querySelectorAll("[data-reveal]:not(.is-in)").forEach((el) => io.observe(el));
    scan();
    // pick up elements rendered later (carousels, filters, accordions)
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => { io.disconnect(); mo.disconnect(); };
  }, [pathname]);
  return null;
}

/** Counts up to a figure like "200+", "68+", "99%" or "3.2M" when it scrolls into view. */
export function CountUp({ value, duration = 1600 }: { value: string; duration?: number }) {
  const m = value.match(/^([^\d]*)([\d.,]+)(.*)$/);
  const target = m ? parseFloat(m[2].replace(/,/g, "")) : NaN;
  const decimals = m && m[2].includes(".") ? m[2].split(".")[1].length : 0;
  const [shown, setShown] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!m || Number.isNaN(target)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    const fmt = (n: number) => `${m[1]}${n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}${m[3]}`;
    setShown(fmt(0));
    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setShown(fmt(target * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return <span ref={ref} className="tabular-nums">{shown}</span>;
}
