import { PillLink, SectionLabel } from "@/components/Buttons";
import { home } from "@/site.config";

export default function About() {
  const a = home.about;
  return (
    <section className="shell pt-24 lg:pt-[100px]">
      <div className="grid gap-6 lg:grid-cols-[236px_1fr]">
        <SectionLabel>{a.label}</SectionLabel>
        <div className="max-w-[1180px]">
          <p className="text-[26px] leading-[1.3] tracking-[-0.015em] text-night sm:text-[32px] lg:text-[clamp(38px,2.6vw,50px)]">{a.statement}</p>
          <p className="mt-6 max-w-[920px] text-[15px] leading-[1.65] text-mute">{a.text}</p>
          <PillLink href={a.button.href} className="mt-8">{a.button.label}</PillLink>
        </div>
      </div>
    </section>
  );
}
