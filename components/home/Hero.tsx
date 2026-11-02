import Link from "next/link";
import Photo from "@/components/Photo";
import { PillLink } from "@/components/Buttons";
import { site } from "@/data/site";
import { home, contact } from "@/site.config";
import { CountUp } from "@/components/Motion";

// All text and photos come from site.config.ts → home.hero
const hero = home.hero;

/**
 * Layout (desktop): a 2×2 grid that always fits the screen height.
 *  ┌──────────────┐ ┌──────────────┐
 *  │ yellow (top) │ │              │
 *  │              │ │    photo     │
 *  └─────────────(●)              │   ● = rotating badge in a round cut-out
 *  ┌──────────────┐ │              │       shared by all three panels
 *  │ yellow (bot) │ │   stats      │
 *  └──────────────┘ └──────────────┘
 * The cut-outs are CSS masks (see .hero-* in globals.css).
 */
export default function Hero() {
  return (
    <section className="edge pt-3 sm:pt-5">
      <div className="hero-grid relative">
        {/* Top-left: video thumbnail + headline */}
        <div style={{ "--d": 0 } as React.CSSProperties} className="hero-tl anim-rise flex flex-col justify-between rounded-[var(--radius-panel)] bg-sun px-6 pb-8 pt-[104px] sm:px-10 md:pb-[clamp(28px,4vh,48px)] md:pt-[clamp(110px,15vh,150px)]">
          <Link href={contact.videoUrl} target="_blank" rel="noopener noreferrer"
            className="group relative block aspect-[2/1] w-full max-w-[400px] self-start overflow-hidden rounded-[18px] md:h-[clamp(96px,19vh,200px)] md:w-auto md:max-w-none"
            aria-label="Watch our company video">
            <Photo src={hero.videoThumb} alt="Engineers reviewing plans on site" scene="workers" className="absolute inset-0" sizes="400px" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/35 backdrop-blur-md transition-transform group-hover:scale-110">
                <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5 text-white" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
              </span>
            </span>
          </Link>
          <h1 className="anim-lines mt-8 text-[44px] leading-[1.08] tracking-[-0.03em] text-night md:text-[clamp(44px,min(4.6vw,8vh),84px)]">
            {hero.title.split("\n").map((line, i) => (
              <span key={i}><span style={{ "--i": i } as React.CSSProperties}>{line}</span></span>
            ))}
          </h1>
        </div>

        {/* Bottom-left: intro + buttons */}
        <div style={{ "--d": 2 } as React.CSSProperties} className="hero-bl anim-rise flex flex-col justify-center rounded-[var(--radius-panel)] bg-sun px-6 py-8 sm:px-10 md:pr-[150px]">
          <p className="max-w-[500px] text-[15px] leading-[1.6] text-night/80 md:text-[clamp(14px,1.05vw,17px)]">{hero.text}</p>
          <div className="mt-[clamp(16px,2.6vh,28px)] flex flex-wrap gap-3">
            <PillLink href={hero.primaryButton.href}>{hero.primaryButton.label}</PillLink>
            <Link href={contact.videoUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2.5 rounded-full border border-night/70 px-6 text-[14px] font-medium text-night transition-colors hover:bg-night hover:text-white">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="M7 4v16l13-8z" /></svg>
              {hero.videoButtonLabel}
            </Link>
          </div>
        </div>

        {/* Right: photo with stats */}
        <div style={{ "--d": 1 } as React.CSSProperties} className="hero-r anim-rise relative min-h-[440px] overflow-hidden rounded-[var(--radius-panel)] md:min-h-0">
          <div className="anim-ken absolute inset-0">
            <Photo src={hero.photo} alt="Tower crane on one of our sites" scene="crane" priority className="absolute inset-0" sizes="(max-width:768px) 100vw, 50vw" />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
          <dl className="absolute inset-x-0 bottom-0 grid grid-cols-3 gap-4 px-6 pb-[clamp(24px,4vh,44px)] text-white sm:px-10 md:pl-[150px] md:pr-12">
            {site.heroStats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse">
                <dt className="mt-2 text-[12px] text-white/80 md:text-[clamp(12px,0.95vw,15px)]">{s.label}</dt>
                <dd className="text-[30px] leading-none tracking-[-0.02em] md:text-[clamp(32px,3vw,52px)]"><CountUp value={s.value} /></dd>
              </div>
            ))}
          </dl>
        </div>

        <Badge />
      </div>
    </section>
  );
}

function Badge() {
  // Text is stretched to exactly fill the circle so the words never overlap.
  const r = 72;
  const circumference = Math.round(2 * Math.PI * r);
  return (
    <div className="hero-badge anim-pop pointer-events-none absolute hidden md:block" aria-hidden="true">
      <div className="relative h-full w-full rounded-full bg-sun">
        <svg viewBox="0 0 200 200" className="spin-slow absolute inset-0 h-full w-full">
          <defs>
            <path id="badge-circle" d={`M100,100 m-${r},0 a${r},${r} 0 1,1 ${r * 2},0 a${r},${r} 0 1,1 -${r * 2},0`} />
          </defs>
          <text className="fill-night" style={{ fontSize: 14.5, fontWeight: 500 }}>
            <textPath href="#badge-circle" textLength={circumference - 4} lengthAdjust="spacing">{site.badgeText.trim()}</textPath>
          </text>
        </svg>
        <svg viewBox="0 0 24 24" className="absolute left-1/2 top-1/2 h-[24%] w-[24%] -translate-x-1/2 -translate-y-1/2 text-night" fill="currentColor">
          <path d="M12 0c.6 7 5 11.4 12 12-7 .6-11.4 5-12 12-.6-7-5-11.4-12-12C7 11.4 11.4 7 12 0z" />
        </svg>
      </div>
    </div>
  );
}
