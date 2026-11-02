import LegalPage from "@/components/LegalPage";
import { pageMeta } from "@/lib/seo";
import { optional } from "@/lib/optional";
import { labels as L, pages } from "@/site.config";

const p = pages.privacy;
const doc = {
  title: L.privacyTitle,
  updated: p.updated,
  intro: optional(p, "intro", "This policy explains what personal information we collect through this website, how we use it and the choices you have. It is written to follow Sri Lanka's Personal Data Protection Act, No. 9 of 2022."),
  sections: p.sections.map((s) => ({ title: s.title, text: [s.text] })),
};
export const metadata = pageMeta({ title: doc.title, description: doc.intro, path: "/privacy" });

export default function PrivacyPage() {
  return <LegalPage doc={doc} />;
}
