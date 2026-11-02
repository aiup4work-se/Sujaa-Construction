import type { Metadata } from "next";
import { brand, contact, pages } from "@/site.config";
import { labels as L } from "@/site.config";

export const metadata: Metadata = { title: "Privacy Policy" };
const p = pages.privacy;

export default function PrivacyPage() {
  return (
    <section className="shell pb-8 pt-[140px]">
      <div className="mx-auto max-w-[760px]">
        <p className="text-[13px] uppercase text-mute">— {L.legal} —</p>
        <h1 className="mt-4 text-[44px] leading-[1.1] tracking-[-0.025em] sm:text-[56px]">{L.privacyTitle}</h1>
        <p className="mt-4 text-[15px] text-mute">{L.lastUpdated}: {p.updated}</p>
        <div className="mt-10 space-y-9">
          {p.sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-[22px]">{s.title}</h2>
              <p className="mt-2 text-[16px] leading-[1.7] text-night/80">{s.text}</p>
            </div>
          ))}
          <div>
            <h2 className="text-[22px]">{L.contactHeading}</h2>
            <p className="mt-2 text-[16px] leading-[1.7] text-night/80">{brand.legalName}, {contact.address}. Email {contact.email}.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
