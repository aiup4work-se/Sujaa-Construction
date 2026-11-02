import { SectionLabel } from "@/components/Buttons";
import Lines from "@/components/Lines";
import { CountUp } from "@/components/Motion";
import { home } from "@/site.config";

export default function WhyUs() {
  const w = home.whyUs;
  return (
    <section className="shell pt-24 lg:pt-[120px]">
      <div data-reveal><SectionLabel>{w.label}</SectionLabel></div>
      <div data-reveal style={{ "--d": 1 } as React.CSSProperties} className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-start">
        <h2 className="h-section max-w-[760px]"><Lines text={w.title} /></h2>
        <p className="t-body max-w-[420px] md:mt-2">{w.text}</p>
      </div>

      {/* Headline figures */}
      <dl className="mt-12 grid grid-cols-2 border-t border-night/80 lg:grid-cols-4">
        {w.stats.map((s, i) => (
          <div key={s.label} data-reveal style={{ "--d": i } as React.CSSProperties}
            className={`py-7 pr-4 lg:py-9 ${i % 2 ? "pl-5 lg:pl-8" : ""} ${i > 1 ? "border-t border-rule lg:border-t-0" : ""} ${i > 0 ? "lg:border-l lg:border-rule lg:pl-8" : ""} ${i === 1 ? "border-l border-rule" : ""} ${i === 3 ? "border-l border-rule" : ""}`}>
            <dd className="t-num text-[clamp(44px,4.6vw,88px)]"><CountUp value={s.value} /></dd>
            <dt className="t-label mt-4 text-mute">{s.label}</dt>
          </div>
        ))}
      </dl>

      {/* Proof points */}
      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {w.points.map((p, i) => (
          <article key={p.title} data-reveal style={{ "--d": i % 3 } as React.CSSProperties}
            className="lift group relative overflow-hidden rounded-[22px] bg-white p-7 lg:p-8">
            <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-sun transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
            <p className="t-label text-night/55">{p.figure}</p>
            <h3 className="t-title mt-5">{p.title}</h3>
            <p className="t-body mt-3">{p.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
