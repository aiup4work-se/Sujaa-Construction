import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { brand, contact, seo } from "@/site.config";

export const ogSize = { width: 1200, height: 630 };

async function loadFonts() {
  const dir = join(process.cwd(), "assets", "fonts");
  try {
    const [bold, medium, body, mono] = await Promise.all([
      readFile(join(dir, "archivo-latin-700-normal.woff")),
      readFile(join(dir, "archivo-latin-500-normal.woff")),
      readFile(join(dir, "manrope-latin-500-normal.woff")),
      readFile(join(dir, "ibm-plex-mono-latin-500-normal.woff")),
    ]);
    return [
      { name: "Archivo", data: bold, weight: 700 as const, style: "normal" as const },
      { name: "Archivo", data: medium, weight: 500 as const, style: "normal" as const },
      { name: "Manrope", data: body, weight: 500 as const, style: "normal" as const },
      { name: "Plex", data: mono, weight: 500 as const, style: "normal" as const },
    ];
  } catch {
    return undefined; // fall back to the default font
  }
}

/** Branded 1200×630 share image (used for Facebook, LinkedIn, WhatsApp, X, Google). */
const trimWords = (t: string, max: number) => (t.length <= max ? t : `${t.slice(0, max).replace(/\s+\S*$/, "")}…`);

export async function renderOg({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  const c = brand.colors;
  eyebrow = trimWords(eyebrow, 34);
  subtitle = subtitle ? trimWords(subtitle, title.length > 30 ? 90 : 120) : subtitle;
  const domain = seo.siteUrl.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
  const size = title.length > 60 ? 54 : title.length > 36 ? 66 : 80;
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: c.background, padding: 28, gap: 20, fontFamily: "Manrope" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1.55, background: c.primary, borderRadius: 32, padding: "48px 52px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 46, height: 46, borderRadius: 999, background: c.dark }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 32, height: 32, borderRadius: 999, border: "3px solid #fff" }}>
                <div style={{ display: "flex", width: 12, height: 12, borderRadius: 999, background: "#fff" }} />
              </div>
            </div>
            <div style={{ display: "flex", fontFamily: "Archivo", fontWeight: 700, fontSize: 30, color: c.dark, letterSpacing: -1 }}>{brand.shortName}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontFamily: "Plex", fontSize: 18, letterSpacing: 3, textTransform: "uppercase", color: "rgba(17,17,17,.6)" }}>— {eyebrow} —</div>
            <div style={{ display: "flex", marginTop: 18, fontFamily: "Archivo", fontWeight: 700, fontSize: size, lineHeight: 1.02, letterSpacing: -2.5, color: c.dark }}>{title}</div>
            {subtitle ? <div style={{ display: "flex", marginTop: 22, fontSize: 24, lineHeight: 1.4, color: "rgba(17,17,17,.72)", maxWidth: 620 }}>{subtitle}</div> : null}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1, background: c.dark, borderRadius: 32, padding: "44px 40px", color: "#fff", position: "relative", overflow: "hidden" }}>
          <div style={{ display: "flex", position: "absolute", right: -90, top: -90, width: 300, height: 300, borderRadius: 999, background: c.primary, opacity: 0.18 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {["Building", "Roads", "Infrastructure", "Piling", "Design & Build"].map((s) => (
              <div key={s} style={{ display: "flex", fontFamily: "Archivo", fontWeight: 500, fontSize: 30, letterSpacing: -1, color: "rgba(255,255,255,.85)" }}>{s}</div>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ display: "flex", fontFamily: "Plex", fontSize: 16, letterSpacing: 2, color: "rgba(255,255,255,.55)", textTransform: "uppercase" }}>{brand.name}</div>
            <div style={{ display: "flex", fontFamily: "Archivo", fontWeight: 700, fontSize: 30, color: c.primary }}>{contact.phone}</div>
            <div style={{ display: "flex", fontSize: 20, color: "rgba(255,255,255,.7)" }}>{domain}</div>
          </div>
        </div>
      </div>
    ),
    { ...ogSize, fonts: await loadFonts() },
  );
}

/** Square brand mark used for favicons and app icons. */
export function renderMark(px: number, padded = false) {
  const c = brand.colors;
  const inset = padded ? px * 0.14 : 0; // safe zone for "maskable" app icons
  const d = px - inset * 2;
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", alignItems: "center", justifyContent: "center", background: padded ? c.primary : "transparent" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: d, height: d, borderRadius: 999, background: c.dark }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: d * 0.66, height: d * 0.66, borderRadius: 999, border: `${Math.max(1.5, d * 0.06)}px solid ${c.primary}` }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: d * 0.34, height: d * 0.34, borderRadius: 999, border: `${Math.max(1.5, d * 0.06)}px solid ${c.primary}` }}>
              <div style={{ display: "flex", width: d * 0.1, height: d * 0.1, borderRadius: 999, background: c.primary }} />
            </div>
          </div>
        </div>
      </div>
    ),
    { width: px, height: px },
  );
}
