import LegalPage from "@/components/LegalPage";
import { pageMeta } from "@/lib/seo";
import { optional } from "@/lib/optional";
import { defaultTerms, type LegalDoc } from "@/lib/legal-defaults";
import { pages } from "@/site.config";

const doc = optional<LegalDoc>(pages, "terms", defaultTerms);
export const metadata = pageMeta({ title: doc.title, description: doc.intro, path: "/terms" });

export default function TermsPage() {
  return <LegalPage doc={doc} />;
}
