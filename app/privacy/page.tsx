import type { Metadata } from "next";
import { brand, contact, pages } from "@/site.config";
import { labels as L } from "@/site.config";

export const metadata: Metadata = { title: "Privacy Policy" };
const p = pages.privacy;

export default function PrivacyPage() {
  return (
    <section className="shell pb-8 pt-[140px]">
      <div className="mx-auto max-w-[760px]">
        <p className="t-label text-mute">— {L.legal} —</p>
        <h1 className="t-display mt-4 !text-[clamp(40px,4vw,72px)]">{L.privacyTitle}</h1>
        <p className="t-label mt-4 text-mute">{L.lastUpdated}: {p.updated}</p>
        <div className="mt-10 space-y-9">
          {p.sections.map((s) => (
            <div key={s.title}>
              <h2 className="t-title">{s.title}</h2>
              <p className="t-body mt-2 !text-night/75">{s.text}</p>
            </div>
          ))}
          <div>
            <h2 className="t-title">{L.contactHeading}</h2>
            <p className="t-body mt-2 !text-night/75">{brand.legalName}, {contact.address}. Email {contact.email}.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
