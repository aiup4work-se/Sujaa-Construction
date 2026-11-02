import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { PageHero } from "@/components/ui";
import { contact, pages } from "@/site.config";
import { labels as L } from "@/site.config";

export const metadata: Metadata = { title: "Contact Us" };
const p = pages.contact;

export default function ContactPage() {
  const rows = [
    { label: L.headOffice, value: contact.address },
    { label: L.telephone, value: [contact.phone, contact.phoneAlt].filter(Boolean).join(" / ") },
    { label: L.whatsapp, value: contact.whatsapp },
    { label: L.generalEnquiries, value: contact.email },
    { label: L.tenders, value: contact.tendersEmail },
    { label: L.officeHours, value: contact.hours },
  ].filter((r) => r.value);

  return (
    <>
      <PageHero {...p.hero} image={p.hero.photo} />
      <section className="shell pt-16 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
          <div>
            <p className="t-label text-mute">— {L.getInTouch} —</p>
            <dl className="mt-6">
              {rows.map((r) => (
                <div key={r.label} className="border-b border-rule py-5">
                  <dt className="t-label text-mute">{r.label}</dt>
                  <dd className="mt-1 select-all font-display text-[clamp(18px,1.3vw,22px)] font-medium tracking-[-0.015em]">{r.value}</dd>
                </div>
              ))}
            </dl>
            <a href={contact.mapUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex h-12 items-center rounded-full border border-night/70 px-6 text-[15px] font-semibold hover:bg-night hover:text-white">{L.openMap}</a>
          </div>
          <div className="rounded-[var(--radius-panel)] bg-white p-6 sm:p-10">
            <h2 className="h-section !text-[clamp(28px,2.2vw,40px)]">{p.formTitle}</h2>
            <p className="mb-7 mt-2 text-[14px] text-mute">{L.requiredNote}</p>
            <ContactForm types={p.enquiryTypes} thanksTitle={p.thanksTitle} thanksText={p.thanksText} />
          </div>
        </div>
      </section>
    </>
  );
}
