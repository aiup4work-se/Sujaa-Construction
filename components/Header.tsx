"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";
import { services } from "@/data/services";
import Logo from "./Logo";
import { contact, home, nav } from "@/site.config";
import { optional } from "@/lib/optional";

/** Text for the Services drop-down. Optional in site.config.ts → nav.megaMenu */
const mega = optional(nav, "megaMenu", {
  title: "Not sure where to start?",
  text: "Talk to one of our engineers about your project. Site visits are free.",
});
const showPhone = optional(nav, "showPhone", true);

const tel = (n: string) => `tel:${n.replace(/[^\d+]/g, "")}`;
const isServicesItem = (href: string) => href === "/services";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function PhoneIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8a15.2 15.2 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 013 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Scroll: solid when scrolled, hides on scroll-down, progress line
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 24);
      setProgress(max > 0 ? Math.min(1, y / max) : 0);
      if (Math.abs(y - last) > 6) {
        setHidden(y > last && y > 240);
        if (y > last) setMegaOpen(false);
        last = y;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on navigation
  useEffect(() => { setMobileOpen(false); setMegaOpen(false); setMobileServices(false); }, [pathname]);

  // Esc closes everything; lock page scroll behind the phone menu
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setMegaOpen(false); setMobileOpen(false); } };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.documentElement.style.overflow = ""; };
  }, [mobileOpen]);

  const openMega = () => { if (closeTimer.current) clearTimeout(closeTimer.current); setMegaOpen(true); };
  const closeMegaSoon = () => { closeTimer.current = setTimeout(() => setMegaOpen(false), 160); };

  const solid = scrolled || megaOpen || mobileOpen;
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <div className="sticky top-0 z-50 h-0">
      {/* Dim the page behind the phone menu; tap to close */}
      <div onClick={() => setMobileOpen(false)} aria-hidden="true"
        className={`fixed inset-0 bg-night/40 backdrop-blur-[2px] transition-opacity duration-300 xl:hidden ${mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"}`} />
      <div className={`mx-auto max-w-[1760px] pt-5 [padding-inline:calc(var(--edge)+12px)] sm:pt-7 sm:[padding-inline:calc(var(--edge)+16px)] transition-transform duration-500 [transition-timing-function:var(--ease-out)] ${hidden && !mobileOpen && !megaOpen ? "-translate-y-[160%]" : ""}`}>
        <div className="relative" onMouseLeave={closeMegaSoon}>
          <header
            className={`relative overflow-hidden rounded-[20px] border transition-[background-color,box-shadow,border-color] duration-300 ${
              solid
                ? "border-white/80 bg-white/[0.97] shadow-[0_12px_40px_-12px_rgba(17,17,17,.22)] backdrop-blur-xl"
                : "border-white/70 bg-white/[0.93] shadow-[0_8px_30px_-16px_rgba(17,17,17,.25)] backdrop-blur-xl"
            }`}
          >
            <div className="flex h-[64px] items-center justify-between gap-4 pl-4 pr-2 lg:h-[68px] lg:pl-5">
              <Link href="/" className="shrink-0" aria-label={`${site.name} home`}><Logo /></Link>

              {/* Desktop links */}
              <nav className="hidden items-center gap-1 xl:flex" aria-label="Main">
                {site.nav.map((item) => {
                  const active = isActive(item.href);
                  const base = `relative inline-flex h-10 items-center gap-1.5 rounded-full px-4 text-[15px] font-medium transition-colors ${
                    active ? "bg-night/[0.07] text-night" : "text-night/65 hover:bg-night/[0.05] hover:text-night"
                  }`;
                  if (isServicesItem(item.href)) {
                    return (
                      <div key={item.href} className="relative" onMouseEnter={openMega}>
                        <button type="button" className={`${base} ${megaOpen ? "bg-night/[0.07] text-night" : ""}`}
                          aria-expanded={megaOpen} aria-controls="services-menu" onClick={() => setMegaOpen((v) => !v)}>
                          {item.label}
                          <Chevron open={megaOpen} />
                        </button>
                      </div>
                    );
                  }
                  return (
                    <Link key={item.href} href={item.href} className={base} aria-current={active ? "page" : undefined} onMouseEnter={() => setMegaOpen(false)}>
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              {/* Right side */}
              <div className="flex items-center gap-2">
                {showPhone && contact.phone && (
                  <a href={tel(contact.phone)} className="mr-2 hidden flex-col items-end leading-tight min-[1360px]:flex" aria-label={`Call ${contact.phone}`}>
                    <span className="t-label !text-[10px] text-night/50">Call us</span>
                    <span className="font-display text-[15px] font-semibold tracking-[-0.01em] text-night hover:underline">{contact.phone}</span>
                  </a>
                )}
                <Link href={nav.contactButton.href} className="group inline-flex h-11 items-center gap-3 rounded-full bg-night pl-1.5 pr-1.5 text-[15px] font-semibold text-white transition-colors hover:bg-night-2 min-[400px]:pl-5 lg:h-12">
                  <span className="hidden whitespace-nowrap min-[400px]:inline">{nav.contactButton.label}</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sun text-night transition-transform duration-300 group-hover:-rotate-12 lg:h-9 lg:w-9">
                    <PhoneIcon />
                  </span>
                </Link>
                <button className="flex h-11 w-11 items-center justify-center rounded-full bg-night/[0.06] text-night transition-colors hover:bg-night/10 xl:hidden"
                  aria-expanded={mobileOpen} aria-controls="mobile-nav" aria-label={mobileOpen ? "Close menu" : "Open menu"}
                  onClick={() => setMobileOpen((v) => !v)}>
                  <span className="relative block h-3 w-5" aria-hidden="true">
                    <span className={`absolute left-0 h-[2px] w-5 rounded bg-current transition-all duration-300 ${mobileOpen ? "top-[5px] rotate-45" : "top-0"}`} />
                    <span className={`absolute left-0 h-[2px] w-5 rounded bg-current transition-all duration-300 ${mobileOpen ? "top-[5px] -rotate-45" : "top-[10px]"}`} />
                  </span>
                </button>
              </div>
            </div>

            {/* Reading progress */}
            <span className="absolute bottom-0 left-0 h-[2px] bg-sun transition-[width] duration-150" style={{ width: `${progress * 100}%` }} aria-hidden="true" />
          </header>

          {/* Desktop services mega-menu */}
          <div
            id="services-menu"
            onMouseEnter={openMega}
            className={`absolute inset-x-0 top-full hidden pt-3 xl:block ${megaOpen ? "pointer-events-auto" : "pointer-events-none"}`}
          >
            <div className={`grid grid-cols-[1fr_340px] gap-3 rounded-[24px] border border-white/80 bg-white/[0.97] p-3 shadow-[0_30px_80px_-24px_rgba(17,17,17,.35)] backdrop-blur-xl transition-all duration-300 [transition-timing-function:var(--ease-out)] ${
              megaOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}`}>
              <ul className="grid grid-cols-3 gap-1 p-2">
                {services.map((s, i) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} tabIndex={megaOpen ? 0 : -1}
                      className="group flex h-full gap-3 rounded-[16px] p-4 transition-colors hover:bg-cream">
                      <span className="mt-0.5 font-mono text-[11px] tracking-[0.08em] text-night/35 group-hover:text-sun-deep">{String(i + 1).padStart(2, "0")}</span>
                      <span>
                        <span className="block font-display text-[16px] font-semibold tracking-[-0.01em] text-night">{s.title}</span>
                        <span className="mt-1 line-clamp-2 block text-[13px] leading-[1.5] text-mute">{s.summary}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="relative flex flex-col justify-between overflow-hidden rounded-[18px] bg-night p-7 text-white">
                <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sun/20 blur-2xl" />
                <div className="relative">
                  <p className="t-label text-white/50">— Free consultation —</p>
                  <p className="mt-4 font-display text-[26px] font-semibold leading-[1.15] tracking-[-0.02em]">{mega.title}</p>
                  <p className="mt-3 text-[14px] leading-[1.6] text-white/65">{mega.text}</p>
                </div>
                <div className="relative mt-8">
                  {contact.phone && (
                    <a href={tel(contact.phone)} tabIndex={megaOpen ? 0 : -1} className="flex items-center gap-3 font-display text-[22px] font-semibold tracking-[-0.01em] hover:text-sun">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10"><PhoneIcon /></span>
                      {contact.phone}
                    </a>
                  )}
                  <div className="mt-5 flex gap-2">
                    <Link href={home.hero.primaryButton.href} tabIndex={megaOpen ? 0 : -1} className="inline-flex h-11 items-center rounded-full bg-sun px-5 text-[14px] font-semibold text-night transition-colors hover:bg-white">
                      {home.hero.primaryButton.label}
                    </Link>
                    <Link href="/services" tabIndex={megaOpen ? 0 : -1} className="inline-flex h-11 items-center rounded-full border border-white/25 px-5 text-[14px] font-semibold text-white transition-colors hover:border-white">
                      All services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phone / tablet menu */}
          <div id="mobile-nav" className={`absolute inset-x-0 top-full pt-3 xl:hidden ${mobileOpen ? "" : "pointer-events-none"}`} aria-hidden={!mobileOpen}>
            <nav aria-label="Mobile"
              className={`max-h-[calc(100svh-110px)] overflow-y-auto rounded-[24px] border border-white/80 bg-white p-3 shadow-[0_30px_80px_-24px_rgba(17,17,17,.35)] transition-all duration-300 [transition-timing-function:var(--ease-out)] ${
                mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"}`}>
              <ul>
                {site.nav.map((item, i) => {
                  const active = isActive(item.href);
                  if (isServicesItem(item.href)) {
                    return (
                      <li key={item.href} className="border-b border-rule/70">
                        <button type="button" onClick={() => setMobileServices((v) => !v)} aria-expanded={mobileServices} tabIndex={mobileOpen ? 0 : -1}
                          className="flex w-full items-center justify-between px-3 py-4 font-display text-[26px] font-medium tracking-[-0.025em] text-night">
                          <span className="flex items-baseline gap-3"><span className="font-mono text-[11px] text-night/35">{String(i + 1).padStart(2, "0")}</span>{item.label}</span>
                          <Chevron open={mobileServices} />
                        </button>
                        {mobileServices && (
                          <ul className="mb-3 grid gap-1 px-3 sm:grid-cols-2">
                            {services.map((s) => (
                              <li key={s.slug}>
                                <Link href={`/services/${s.slug}`} className="block rounded-xl bg-cream px-4 py-3 text-[15px] font-semibold text-night">{s.title}</Link>
                              </li>
                            ))}
                            <li><Link href="/services" className="block px-4 py-3 text-[14px] font-semibold text-night/60 underline underline-offset-4">All services</Link></li>
                          </ul>
                        )}
                      </li>
                    );
                  }
                  return (
                    <li key={item.href} className="border-b border-rule/70 last:border-0">
                      <Link href={item.href} tabIndex={mobileOpen ? 0 : -1} aria-current={active ? "page" : undefined}
                        className={`flex items-baseline gap-3 px-3 py-4 font-display text-[26px] font-medium tracking-[-0.025em] ${active ? "text-night" : "text-night/75"}`}>
                        <span className="font-mono text-[11px] text-night/35">{String(i + 1).padStart(2, "0")}</span>
                        {item.label}
                        {active && <span className="ml-auto h-2 w-2 self-center rounded-full bg-sun" aria-hidden="true" />}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-3 grid gap-2 rounded-[18px] bg-night p-4 text-white sm:grid-cols-2 sm:items-center">
                {contact.phone && (
                  <a href={tel(contact.phone)} tabIndex={mobileOpen ? 0 : -1} className="flex items-center gap-3 font-display text-[20px] font-semibold">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sun text-night"><PhoneIcon /></span>
                    {contact.phone}
                  </a>
                )}
                <Link href={home.hero.primaryButton.href} tabIndex={mobileOpen ? 0 : -1} className="inline-flex h-12 items-center justify-center rounded-full bg-white px-5 text-[15px] font-semibold text-night">
                  {home.hero.primaryButton.label}
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
