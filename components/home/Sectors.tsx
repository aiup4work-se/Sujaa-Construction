import { SectionLabel } from "@/components/Buttons";
import { home } from "@/site.config";
import { optional } from "@/lib/optional";

/** Slow, endless band of the sectors we serve. Pauses on hover; static for reduced-motion users. */
export default function Sectors() {
  const s = optional<{ label: string; items: string[] } | null>(home, "sectors", null);
  if (!s || !s.items.length) return null; // add `sectors` to home in site.config.ts to show this band
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {s.items.map((name) => (
        <li key={name} className="flex items-center">
          <span className="whitespace-nowrap px-6 font-display text-[clamp(32px,4vw,72px)] font-medium tracking-[-0.03em] [font-stretch:92%] text-night/85 sm:px-10">{name}</span>
          <svg viewBox="0 0 24 24" className="h-[clamp(16px,1.6vw,28px)] w-[clamp(16px,1.6vw,28px)] shrink-0 text-sun-deep" fill="currentColor" aria-hidden="true">
            <path d="M12 0c.6 7 5 11.4 12 12-7 .6-11.4 5-12 12-.6-7-5-11.4-12-12C7 11.4 11.4 7 12 0z" />
          </svg>
        </li>
      ))}
    </ul>
  );
  return (
    <section className="pt-24 lg:pt-[120px]" aria-label={s.label}>
      <div className="shell" data-reveal><SectionLabel>{s.label}</SectionLabel></div>
      <div className="marquee group mt-8 flex overflow-hidden border-y border-rule py-6 lg:py-9">
        <div className="marquee-track flex">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </section>
  );
}
