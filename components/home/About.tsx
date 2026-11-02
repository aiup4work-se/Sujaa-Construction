import { PillLink, SectionLabel } from "@/components/Buttons";
import { home } from "@/site.config";

export default function About() {
  const a = home.about;
  return (
    <section className="shell pt-24 lg:pt-[100px]">
      <div data-reveal className="grid gap-6 lg:grid-cols-[236px_1fr]">
        <SectionLabel>{a.label}</SectionLabel>
        <div className="max-w-[1180px]">
          <p className="t-lead text-night">{(() => { const [first, ...rest] = a.statement.split(/(?<=\.)\s/); return <>{first} <span className="text-night/45">{rest.join(" ")}</span></>; })()}</p>
          <p className="t-body mt-7 max-w-[760px]">{a.text}</p>
          <PillLink href={a.button.href} className="mt-8">{a.button.label}</PillLink>
        </div>
      </div>
    </section>
  );
}
