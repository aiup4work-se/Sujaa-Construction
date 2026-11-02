"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import Logo from "./Logo";
import { nav } from "@/site.config";

/** Floating glass navigation bar. It overlays the top of every page (see `pt-[96px]` on page heroes). */
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Solid background once scrolled; slides away while scrolling down, returns when scrolling up
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (Math.abs(y - last) > 6) {
        setHidden(y > last && y > 240);
        last = y;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <div className="sticky top-0 z-50 h-0">
      <div className={`mx-auto max-w-[1760px] pt-6 [padding-inline:calc(var(--edge)+12px)] sm:pt-8 sm:[padding-inline:calc(var(--edge)+16px)] transition-transform duration-500 [transition-timing-function:var(--ease-out)] ${hidden && !open ? "-translate-y-[140%]" : ""}`}>
        <header
          className={`rounded-[18px] border px-3 py-2.5 transition-all duration-300 lg:px-4 ${
            scrolled || open ? "border-white/70 bg-white/90 shadow-[0_8px_30px_rgba(0,0,0,.08)] backdrop-blur-xl" : "border-white/50 bg-white/45 backdrop-blur-md"
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="pl-1" aria-label={`${site.name} home`}><Logo /></Link>

            <nav className="hidden items-center gap-9 lg:flex" aria-label="Main">
              {site.nav.map((item) => {
                const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <Link key={item.href} href={item.href}
                    className={`text-[15px] font-medium transition-colors ${active ? "text-night" : "text-night/60 hover:text-night"}`}>
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <Link href={nav.contactButton.href} className="group inline-flex h-11 items-center gap-3 rounded-full bg-night pl-1.5 pr-1.5 min-[400px]:pl-5 text-[15px] font-semibold text-white">
                <span className="hidden whitespace-nowrap min-[400px]:inline">{nav.contactButton.label}</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sun text-night">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8a15.2 15.2 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 013 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z" /></svg>
                </span>
              </Link>
              <button className="flex h-11 w-11 items-center justify-center rounded-full border border-night/20 lg:hidden" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((v) => !v)}>
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
                </svg>
              </button>
            </div>
          </div>

          {open && (
            <nav id="mobile-nav" className="mt-3 border-t border-night/10 pt-2 lg:hidden" aria-label="Mobile">
              {site.nav.map((item) => (
                <Link key={item.href} href={item.href} className="block rounded-lg px-2 py-3 font-display text-[22px] font-medium tracking-[-0.02em] text-night hover:bg-night/5">{item.label}</Link>
              ))}
            </nav>
          )}
        </header>
      </div>
    </div>
  );
}
