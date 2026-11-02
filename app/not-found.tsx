import { PillLink } from "@/components/Buttons";
import { labels as L } from "@/site.config";

export default function NotFound() {
  return (
    <section className="edge pt-3 sm:pt-5">
      <div className="rounded-[var(--radius-panel)] bg-sun px-6 pb-16 pt-40 text-center">
        <p className="text-[13px] uppercase text-night/70">— 404 —</p>
        <h1 className="mt-4 text-[48px] leading-[1.1] tracking-[-0.025em] sm:text-[64px]">{L.notFoundTitle}</h1>
        <p className="mt-4 text-night/75">{L.notFoundText}</p>
        <PillLink href="/" className="mt-8">{L.backHome}</PillLink>
      </div>
    </section>
  );
}
