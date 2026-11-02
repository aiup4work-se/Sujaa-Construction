"use client";

import { useEffect, useRef } from "react";

/**
 * Keeps the rotating badge and the round cut-out exactly on the real seam between
 * the hero panels, whatever the screen size, zoom level or text length.
 * It measures the panels and sets the cut-out centre on each one.
 */
export default function HeroAlign() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const grid = ref.current?.parentElement;
    if (!grid) return;
    const tl = grid.querySelector<HTMLElement>(".hero-tl");
    const bl = grid.querySelector<HTMLElement>(".hero-bl");
    const r = grid.querySelector<HTMLElement>(".hero-r");
    const badge = grid.querySelector<HTMLElement>(".hero-badge");
    if (!tl || !bl || !r || !badge) return;

    const place = () => {
      // Panels are stacked (phones/tablets): nothing to align
      if (getComputedStyle(grid).gridTemplateColumns.split(" ").length < 2) return;
      // Use layout boxes (offset*), which ignore entrance-animation transforms
      const x = (tl.offsetLeft + tl.offsetWidth + r.offsetLeft) / 2;
      const y = (tl.offsetTop + tl.offsetHeight + bl.offsetTop) / 2;
      const set = (el: HTMLElement) => {
        el.style.setProperty("--cx", `${x - el.offsetLeft}px`);
        el.style.setProperty("--cy", `${y - el.offsetTop}px`);
      };
      set(tl); set(bl); set(r);
      badge.style.left = `${x - badge.offsetWidth / 2}px`;
      badge.style.top = `${y - badge.offsetHeight / 2}px`;
    };

    place();
    const ro = new ResizeObserver(place);
    [grid, tl, bl, r].forEach((el) => ro.observe(el));
    window.addEventListener("resize", place);
    document.fonts?.ready.then(place).catch(() => {});
    return () => { ro.disconnect(); window.removeEventListener("resize", place); };
  }, []);

  return <span ref={ref} hidden />;
}
