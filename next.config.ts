import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Stock photos are served from Pexels. Remove this once all photos are in /public.
    remotePatterns: [{ protocol: "https", hostname: "images.pexels.com" }],
  },
};

export default nextConfig;
