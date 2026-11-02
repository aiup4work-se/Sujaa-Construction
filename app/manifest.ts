import type { MetadataRoute } from "next";
import { brand } from "@/site.config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: brand.name,
    short_name: brand.shortName,
    description: brand.description,
    start_url: "/",
    display: "standalone",
    background_color: brand.colors.background,
    theme_color: brand.colors.background,
    icons: [
      { src: "/icon/medium", sizes: "192x192", type: "image/png" },
      { src: "/icon/large", sizes: "512x512", type: "image/png" },
      { src: "/maskable-icon", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
