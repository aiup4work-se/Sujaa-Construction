import Image from "next/image";
import { brand } from "@/site.config";

/** Logo from site.config.ts → brand.logo. Falls back to a drawn mark + brand.shortName. */
export default function Logo({ light = false }: { light?: boolean }) {
  const src = light ? brand.logo.srcLight || brand.logo.src : brand.logo.src;
  if (src) {
    return (
      <Image src={src} alt={brand.name} width={brand.logo.width} height={brand.logo.height} priority
        className={`h-auto w-auto max-h-10 ${light && !brand.logo.srcLight ? "brightness-0 invert" : ""}`} />
    );
  }
  const c = light ? "#ffffff" : "var(--color-night)";
  const inner = light ? "var(--color-night)" : "#ffffff";
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 32 32" className="h-8 w-8 shrink-0" aria-hidden="true">
        <circle cx="16" cy="16" r="15" fill={c} />
        <circle cx="16" cy="16" r="10.5" fill="none" stroke={inner} strokeWidth="1.6" />
        <circle cx="16" cy="16" r="6" fill="none" stroke={inner} strokeWidth="1.6" />
        <circle cx="16" cy="16" r="2" fill={inner} />
      </svg>
      <span className={`font-display text-[22px] font-semibold tracking-[-0.03em] [font-stretch:94%] ${light ? "text-white" : "text-night"}`}>{brand.shortName}</span>
    </span>
  );
}
