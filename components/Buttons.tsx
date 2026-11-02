import Link from "next/link";

export function Arrow({ className = "h-4 w-4", dir = "ne" }: { className?: string; dir?: "ne" | "e" | "w" }) {
  const d = dir === "ne" ? "M7 17L17 7M8 7h9v9" : dir === "e" ? "M5 12h14M13 6l6 6-6 6" : "M19 12H5M11 6l-6 6 6 6";
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

/** Black pill with yellow arrow disc — primary CTA in the design. */
export function PillLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link href={href} className={`group inline-flex h-12 items-center gap-4 rounded-full bg-night pl-6 pr-1.5 text-[15px] font-semibold tracking-[-0.005em] text-white transition-colors hover:bg-night-2 ${className}`}>
      {children}
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sun text-night transition-transform duration-300 group-hover:rotate-45">
        <Arrow />
      </span>
    </Link>
  );
}

export function OutlinePill({ href, children, icon }: { href: string; children: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <Link href={href} className="inline-flex h-12 items-center gap-2.5 rounded-full border border-night/80 px-6 text-[15px] font-semibold tracking-[-0.005em] text-night transition-colors hover:bg-night hover:text-white">
      {icon}
      {children}
    </Link>
  );
}

export function NavArrows({ onPrev, onNext, dark = false }: { onPrev: () => void; onNext: () => void; dark?: boolean }) {
  const base = "flex h-11 w-11 items-center justify-center rounded-full transition-colors";
  return (
    <div className="flex gap-3">
      <button onClick={onPrev} aria-label="Previous" className={`${base} border ${dark ? "border-white/40 text-white hover:border-white" : "border-night/40 text-night hover:border-night"}`}>
        <Arrow dir="w" />
      </button>
      <button onClick={onNext} aria-label="Next" className={`${base} ${dark ? "bg-white text-night" : "bg-night text-white"}`}>
        <Arrow dir="e" />
      </button>
    </div>
  );
}

export function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`t-label ${light ? "text-white/60" : "text-mute"}`}>— {children} —</p>;
}

export function QuoteMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M0 0h20v18c0 8-5 13-13 14v-6c4-1 6-4 6-8H0zM28 0h20v18c0 8-5 13-13 14v-6c4-1 6-4 6-8h-13z" />
    </svg>
  );
}
