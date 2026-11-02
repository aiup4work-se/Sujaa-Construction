import ContactForm from "@/components/ContactForm";
import { CtaBand, PageHero, SectionHead } from "@/components/ui";
import { Arrow } from "@/components/Buttons";
import { pageMeta } from "@/lib/seo";
import { optional } from "@/lib/optional";
import { defaultSuppliers, type SuppliersPage as SuppliersDoc } from "@/lib/legal-defaults";
import { pages, stock } from "@/site.config";

const s = optional<SuppliersDoc>(pages, "suppliers", defaultSuppliers);
export const metadata = pageMeta({ title: s.hero.label, description: s.hero.text, path: "/suppliers" });

export default function SuppliersPage() {
  return (
    <>
      <PageHero {...s.hero} image={s.hero.photo ?? stock.teamStanding} />

      <section className="shell pt-20 lg:pt-24">
        <SectionHead label="Partners" title={s.introTitle} text={s.intro} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {s.categories.map((c, i) => (
            <article key={c.title} data-reveal style={{ "--d": i } as React.CSSProperties} className="rounded-[22px] bg-white p-7">
              <p className="font-mono text-[12px] text-night/35">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="t-title mt-4">{c.title}</h3>
              <p className="t-body mt-2">{c.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell pt-20 lg:pt-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
          <div data-reveal>
            <p className="t-label text-mute">— Requirements —</p>
            <h2 className="h-section mt-5 !text-[clamp(30px,2.6vw,48px)]">{s.requirementsTitle}</h2>
            <ul className="mt-8">
              {s.requirements.map((r) => (
                <li key={r} className="flex gap-4 border-b border-rule py-4 text-[16px] leading-[1.55]">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sun"><Arrow className="h-3 w-3" /></span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal style={{ "--d": 1 } as React.CSSProperties} className="rounded-[var(--radius-panel)] bg-white p-6 sm:p-10">
            <h2 className="h-section !text-[clamp(28px,2.2vw,40px)]">{s.formTitle}</h2>
            <p className="mb-7 mt-2 text-[14px] text-mute">Fields marked * are required.</p>
            <ContactForm types={s.formTypes} thanksTitle={s.thanksTitle} thanksText={s.thanksText} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
