import { renderMark } from "@/lib/og";

// Home-screen icon for iPhone / iPad
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return renderMark(180, true);
}
