import LegalPage from "@/components/LegalPage";
import { pageMeta } from "@/lib/seo";
import { optional } from "@/lib/optional";
import { defaultCookies, type LegalDoc } from "@/lib/legal-defaults";
import { pages } from "@/site.config";

const doc = optional<LegalDoc>(pages, "cookies", defaultCookies);
export const metadata = pageMeta({ title: doc.title, description: doc.intro, path: "/cookies" });

export default function CookiesPage() {
  return <LegalPage doc={doc} />;
}
