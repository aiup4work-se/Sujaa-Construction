"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Arrow } from "./Buttons";

/** Photo grid; click a photo to open it full-screen. Arrow keys / Esc work in the viewer. */
export default function Gallery({ images, title }: { images: string[]; title: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback((d: number) => setOpen((v) => (v === null ? v : (v + d + images.length) % images.length)), [images.length]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open, close, step]);

  if (!images.length) return null;

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {images.map((src, i) => (
          <button key={src} onClick={() => setOpen(i)}
            className={`group relative overflow-hidden rounded-[20px] ${i === 0 ? "col-span-2 row-span-2 aspect-[4/3] md:aspect-auto" : "aspect-[4/3]"}`}
            aria-label={`Open photo ${i + 1} of ${images.length}`}>
            <Image src={src} alt={`${title} — photo ${i + 1}`} fill sizes="(max-width:768px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
          </button>
        ))}
      </div>

      {open !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4" role="dialog" aria-modal="true" aria-label={`${title} photo viewer`} onClick={close}>
          <div className="relative h-[80vh] w-full max-w-[1200px]" onClick={(e) => e.stopPropagation()}>
            <Image src={images[open]} alt={`${title} — photo ${open + 1}`} fill sizes="100vw" className="object-contain" />
          </div>
          <button onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous photo" className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/30"><Arrow dir="w" /></button>
          <button onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next photo" className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/30"><Arrow dir="e" /></button>
          <button onClick={close} aria-label="Close" className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/30">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[13px] text-white/70">{open + 1} / {images.length}</p>
        </div>
      )}
    </>
  );
}
