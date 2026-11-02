import Image from "next/image";

export type Scene = "crane" | "tower" | "site" | "bridge" | "road" | "city" | "workers" | "warehouse" | "water";

type Props = {
  src?: string;
  alt: string;
  scene?: Scene;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

/**
 * Photo slot. Pass `src` (e.g. "/images/projects/tower.jpg") to show your photo.
 * Without `src` it draws a daylight construction scene so layouts read correctly.
 */
export default function Photo({ src, alt, scene = "tower", className = "", priority, sizes = "(max-width:768px) 100vw, 50vw" }: Props) {
  // Keep the caller's positioning (e.g. "absolute inset-0"); default to relative
  const pos = /\b(absolute|fixed|sticky)\b/.test(className) ? "" : "relative";
  // The illustrated scene is always drawn; a real photo (if any) covers it.
  // That way a slow or failed image never leaves an empty box.
  return (
    <div className={`${pos} overflow-hidden ${className}`} {...(src ? {} : { role: "img", "aria-label": alt })}>
      <svg viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden={src ? true : undefined}>
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#3f8fd0" />
            <stop offset="0.65" stopColor="#8ec3ea" />
            <stop offset="1" stopColor="#d7e8f3" />
          </linearGradient>
          <linearGradient id="glassy" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#c9d4dc" />
            <stop offset="1" stopColor="#7d8d99" />
          </linearGradient>
          <pattern id="win" width="14" height="16" patternUnits="userSpaceOnUse">
            <rect width="14" height="16" fill="#9fb0bc" />
            <rect x="2" y="2" width="10" height="10" fill="#5c7180" />
          </pattern>
          <pattern id="scaff" width="18" height="18" patternUnits="userSpaceOnUse">
            <rect width="18" height="18" fill="#6e7b52" />
            <path d="M0 0H18M0 0V18" stroke="#3d4630" strokeWidth="2" />
          </pattern>
        </defs>
        <rect width="600" height="600" fill="url(#sky)" />
        <ellipse cx="140" cy="120" rx="90" ry="22" fill="#fff" opacity=".55" />
        <ellipse cx="430" cy="80" rx="70" ry="16" fill="#fff" opacity=".45" />
        {sceneShapes(scene)}
      </svg>
      {src && <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />}
    </div>
  );
}

function sceneShapes(scene: Scene) {
  switch (scene) {
    case "crane":
      return (
        <g>
          <rect x="0" y="470" width="600" height="130" fill="#7d8a93" />
          <rect x="40" y="380" width="200" height="220" fill="url(#win)" />
          <g stroke="#d99a2b" strokeWidth="10" fill="none">
            <path d="M330 600V120M380 600V120M330 160L380 200M380 240L330 280M330 320L380 360M380 400L330 440M330 480L380 520" />
            <path d="M120 120H590M120 120L355 40L590 120M355 40V120" />
          </g>
          <rect x="320" y="150" width="70" height="60" rx="4" fill="#e1a634" />
          <rect x="332" y="160" width="46" height="26" fill="#355069" />
          <path d="M540 120V330" stroke="#333" strokeWidth="3" />
          <rect x="525" y="330" width="30" height="16" fill="#555" />
        </g>
      );
    case "bridge":
      return (
        <g>
          <rect y="430" width="600" height="170" fill="#4b7c8f" />
          <rect y="330" width="600" height="26" fill="#cfd4d6" />
          <rect y="356" width="600" height="10" fill="#8a9296" />
          {[60, 200, 340, 480].map((x) => <rect key={x} x={x} y="366" width="26" height="120" fill="#a9b0b3" />)}
        </g>
      );
    case "road":
      return (
        <g>
          <rect y="360" width="600" height="240" fill="#86a05a" />
          <path d="M0 600L270 360H330L600 600Z" fill="#3f4246" />
          <path d="M300 370V600" stroke="#efc447" strokeWidth="6" strokeDasharray="28 22" />
        </g>
      );
    case "warehouse":
      return (
        <g>
          <rect y="480" width="600" height="120" fill="#8e9599" />
          <path d="M40 480V300L300 230L560 300V480Z" fill="#c4cbcf" />
          <path d="M40 300L300 230L560 300" stroke="#7d868b" strokeWidth="6" fill="none" />
          {[120, 240, 360, 480].map((x) => <rect key={x} x={x - 40} y="380" width="80" height="100" fill="#6d777d" />)}
        </g>
      );
    case "water":
      return (
        <g>
          <rect y="470" width="600" height="130" fill="#88a2ad" />
          <circle cx="400" cy="250" r="90" fill="#c9d1d6" />
          <rect x="380" y="330" width="40" height="150" fill="#a5afb4" />
          <rect x="60" y="400" width="220" height="80" fill="#b8c1c6" />
        </g>
      );
    case "workers":
      return (
        <g>
          <rect y="0" width="600" height="600" fill="#6c5a45" />
          {Array.from({ length: 14 }).map((_, i) => <path key={i} d={`M${i * 46} 0V600`} stroke="#4a3b2b" strokeWidth="6" />)}
          {Array.from({ length: 10 }).map((_, i) => <path key={i} d={`M0 ${i * 62}H600`} stroke="#4a3b2b" strokeWidth="5" />)}
          <g>
            <rect x="130" y="300" width="140" height="300" rx="40" fill="#e3492b" />
            <circle cx="200" cy="250" r="50" fill="#c79b78" />
            <path d="M140 235a60 60 0 01120 0z" fill="#f0c33c" />
            <rect x="330" y="290" width="150" height="310" rx="40" fill="#f08a24" />
            <circle cx="405" cy="240" r="50" fill="#b88762" />
            <path d="M345 225a60 60 0 01120 0z" fill="#f0c33c" />
            <rect x="250" y="330" width="120" height="80" fill="#f4f4f0" transform="rotate(-8 310 370)" />
          </g>
        </g>
      );
    case "site":
      return (
        <g>
          <rect y="500" width="600" height="100" fill="#8a8a7d" />
          <rect x="70" y="200" width="300" height="300" fill="url(#scaff)" />
          <rect x="380" y="290" width="160" height="210" fill="url(#win)" />
          <path d="M260 600V60M200 60H520M260 60L230 100" stroke="#d99a2b" strokeWidth="8" fill="none" />
        </g>
      );
    case "city":
      return (
        <g>
          <rect x="20" y="300" width="110" height="300" fill="url(#glassy)" />
          <rect x="140" y="180" width="130" height="420" fill="url(#win)" />
          <rect x="290" y="250" width="120" height="350" fill="url(#glassy)" />
          <rect x="430" y="140" width="140" height="460" fill="url(#win)" />
          <path d="M360 600V100M300 100H560" stroke="#d6582b" strokeWidth="7" fill="none" />
        </g>
      );
    default: // tower
      return (
        <g>
          <rect x="110" y="140" width="380" height="460" fill="url(#win)" />
          <rect x="110" y="140" width="380" height="24" fill="#c8d0d5" />
          <rect x="0" y="470" width="110" height="130" fill="#9aa2a7" />
          <rect x="490" y="420" width="110" height="180" fill="#8d979c" />
        </g>
      );
  }
}
