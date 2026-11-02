import Link from "next/link";
import { brand, contact } from "@/site.config";
import type { LegalDoc } from "@/lib/legal-defaults";

/** Shared layout for Terms, Cookies, Privacy: readable column with a sticky contents list on large screens. */
export default function LegalPage({ doc, label = "Legal" }: { doc: LegalDoc; label?: string }) {
  const id = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  return (
    <section className="shell pb-8 pt-[132px] sm:pt-[150px]">
      <div className="mx-auto grid max-w-[1120px] gap-12 lg:grid-cols-[240px_1fr] lg:gap-16">
        <aside className="hidden lg:block">
          <nav className="sticky top-32" aria-label="On this page">
            <p className="t-label text-mute">On this page</p>
            <ol className="mt-4 space-y-2 border-l border-rule">
              {doc.sections.map((s) => (
                <li key={s.title}>
                  <a href={`#${id(s.title)}`} className="-ml-px block border-l border-transparent py-1 pl-4 text-[14px] text-mute transition-colors hover:border-night hover:text-night">{s.title}</a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <article className="min-w-0 max-w-[720px]">
          <p className="t-label text-mute">— {label} —</p>
          <h1 className="t-display mt-4 !text-[clamp(40px,4.4vw,72px)]">{doc.title}</h1>
          <p className="t-label mt-5 text-mute">Last updated: {doc.updated}</p>
          <p className="mt-8 text-[clamp(17px,1.2vw,20px)] font-medium leading-[1.6] text-night/75">{doc.intro}</p>

          <div className="mt-12 space-y-10">
            {doc.sections.map((s, i) => (
              <section key={s.title} id={id(s.title)} className="scroll-mt-32 border-t border-rule pt-8">
                <h2 className="t-title flex items-baseline gap-3">
                  <span className="font-mono text-[12px] font-medium text-night/35">{String(i + 1).padStart(2, "0")}</span>
                  {s.title}
                </h2>
                <div className="mt-3 space-y-3">
                  {s.text.map((p) => <p key={p} className="t-body !text-night/75">{p}</p>)}
                </div>
              </section>
            ))}
            <section className="rounded-[22px] bg-white p-6 sm:p-8">
              <h2 className="t-title">Contact us</h2>
              <p className="t-body mt-2 !text-night/75">
                {brand.legalName}, {contact.address}. Email <span className="select-all font-semibold text-night">{contact.email}</span> or call{" "}
                <span className="select-all font-semibold text-night">{contact.phone}</span>.
              </p>
              <p className="t-small mt-4 text-mute">
                See also: <Link href="/privacy" className="underline underline-offset-4 hover:text-night">Privacy Policy</Link> ·{" "}
                <Link href="/terms" className="underline underline-offset-4 hover:text-night">Terms of Use</Link> ·{" "}
                <Link href="/cookies" className="underline underline-offset-4 hover:text-night">Cookie Policy</Link>
              </p>
            </section>
          </div>
        </article>
      </div>
    </section>
  );
}
