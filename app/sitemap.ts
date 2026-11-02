import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { news } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly", lastModified: Date = now) =>
    ({ url: `${siteUrl}${path}`, lastModified, changeFrequency, priority });

  return [
    page("/", 1, "weekly"),
    page("/about", 0.8),
    page("/services", 0.9),
    page("/projects", 0.9, "weekly"),
    page("/contact", 0.9),
    page("/news", 0.7, "weekly"),
    page("/careers", 0.6, "weekly"),
    page("/sustainability", 0.6),
    page("/safety", 0.6),
    page("/equipment", 0.6),
    page("/suppliers", 0.5),
    page("/privacy", 0.2, "yearly"),
    page("/terms", 0.2, "yearly"),
    page("/cookies", 0.2, "yearly"),
    ...services.map((s) => page(`/services/${s.slug}`, 0.8)),
    ...projects.map((p) => page(`/projects/${p.slug}`, 0.7)),
    ...news.map((n) => page(`/news/${n.slug}`, 0.5, "yearly", new Date(n.date))),
  ];
}
