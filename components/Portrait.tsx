import Image from "next/image";

const hats = ["#f4f4f2", "#f4f4f2", "#f07a1f", "#f4f4f2", "#f4f4f2"];
const suits = ["#2b2f36", "#3c4148", "#1f2329", "#4a5568", "#2f3a46"];

/** Person photo slot. Pass `src` for a real cut-out photo (transparent PNG works best). */
export default function Portrait({ src, alt, seed = 0, className = "" }: { src?: string; alt: string; seed?: number; className?: string }) {
  const pos = /\b(absolute|fixed|sticky)\b/.test(className) ? "" : "relative";
  const hat = hats[seed % hats.length];
  const suit = suits[seed % suits.length];
  return (
    <div className={`${pos} ${className}`} {...(src ? {} : { role: "img", "aria-label": alt })}>
      <svg viewBox="0 0 300 340" preserveAspectRatio="xMidYMax meet" className="absolute inset-x-0 bottom-0 top-[8%] h-[92%] w-full" aria-hidden={src ? true : undefined}>
        <path d="M40 340c6-80 50-110 110-110s104 30 110 110z" fill={suit} />
        <path d="M128 232l22 50 22-50z" fill="#f2f2f0" />
        <path d="M146 240h8l4 60-8 10-8-10z" fill="#8a1f2b" />
        <rect x="132" y="190" width="36" height="42" rx="12" fill="#c99a76" />
        <ellipse cx="150" cy="150" rx="46" ry="54" fill="#d4a582" />
        <path d="M96 128c0-36 24-62 54-62s54 26 54 62z" fill={hat} />
        <rect x="88" y="124" width="124" height="12" rx="6" fill={hat} />
        <path d="M150 66v58" stroke="#00000018" strokeWidth="6" />
      </svg>
      {src && <Image src={src} alt={alt} fill sizes="(max-width:768px) 70vw, 25vw" className="object-cover object-[50%_20%]" />}
    </div>
  );
}
