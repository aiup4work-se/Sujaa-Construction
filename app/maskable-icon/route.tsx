import { renderMark } from "@/lib/og";

// Android "maskable" app icon (logo inside a safe zone on brand colour)
export const dynamic = "force-static";
export function GET() {
  return renderMark(512, true);
}
