import { renderMark } from "@/lib/og";

// Favicon / app icon in three sizes, drawn from the brand colours in site.config.ts
export function generateImageMetadata() {
  return [
    { id: "small", size: { width: 48, height: 48 }, contentType: "image/png" },
    { id: "medium", size: { width: 192, height: 192 }, contentType: "image/png" },
    { id: "large", size: { width: 512, height: 512 }, contentType: "image/png" },
  ];
}

export default async function Icon({ id }: { id: Promise<string> | string }) {
  const key = await id;
  const px = key === "large" ? 512 : key === "medium" ? 192 : 48;
  return renderMark(px);
}
