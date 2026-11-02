import Link from "next/link";
import { site } from "@/data/site";
import Logo from "./Logo";
import Newsletter from "./Newsletter";
import { footer } from "@/site.config";
import { labels as L } from "@/site.config";

const icons: Record<string, React.ReactNode> = {
  Instagram: <path d="M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm5 5a4 4 0 100 8 4 4 0 000-8zm5.5-1.5a1 1 0 100 2 1 1 0 000-2z" />,
  Facebook: <path d="M14 8h3V4h-3a4 4 0 00-4 4v2H8v4h2v7h4v-7h3l1-4h-4V8z" />,
  LinkedIn: <path d="M4 9h4v12H4zM6 3a2 2 0 110 4 2 2 0 010-4zM10 9h4v2c.6-1.2 2-2.2 4-2.2 3.4 0 4 2.2 4 5V21h-4v-6.2c0-1.5 0-3.3-2-3.3s-2.3 1.6-2.3 3.2V21H10z" />,
  YouTube: <path d="M22 8.2a3 3 0 00-2-2.1C18.2 5.6 12 5.6 12 5.6s-6.2 0-8 .5a3 3 0 00-2 2.1A31 31 0 001.6 12a31 31 0 00.4 3.8 3 3 0 002 2.1c1.8.5 8 .5 8 .5s6.2 0 8-.5a3 3 0 002-2.1 31 31 0 00.4-3.8 31 31 0 00-.4-3.8zM10 15V9l5.2 3z" />,
};

export default function Footer() {
  return (
    <footer className="mt-24 rounded-t-[var(--radius-panel)] bg-night text-white lg:mt-32 lg:rounded-t-[40px]">
      <div className="shell pb-8 pt-12 lg:pt-14">
        <div className="flex flex-col justify-between gap-6 md:flex-row">
          <Logo light />
          <p className="max-w-[340px] text-[15px] leading-relaxed text-white/70">{footer.intro}</p>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <p className="max-w-[640px] text-[40px] leading-[1.12] tracking-[-0.02em] sm:text-[52px] lg:text-[60px]">{footer.tagline}</p>
          <Newsletter />
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/15 pt-8 md:flex-row md:items-center md:justify-between">
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-[15px]" aria-label="Footer">
            {site.footerNav.map((n) => <Link key={n.href} href={n.href} className="text-white/90 hover:text-sun">{n.label}</Link>)}
          </nav>
          <div className="flex gap-3">
            {site.social.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition-colors hover:border-sun hover:bg-sun hover:text-night">
                <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">{icons[s.label]}</svg>
              </a>
            ))}
          </div>
        </div>

        <p className="mt-10 text-center text-[13px] text-white/55">© {new Date().getFullYear()} {site.legalName} — {L.allRightsReserved}{L.copyrightExtra ? ` · ${L.copyrightExtra}` : ""}</p>
      </div>
    </footer>
  );
}
