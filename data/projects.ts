// ⚠️ Don't edit this file — change `projects` in site.config.ts instead.
import * as cfg from "@/site.config";
import type { Scene } from "@/components/Photo";

export type ProjectCategory = (typeof cfg.projectSectors)[number];

export type Project = {
  slug: string;
  name: string;
  client: string;
  location: string;
  category: ProjectCategory;
  status: "Completed" | "Ongoing";
  year: string;
  value?: string;
  scope: string;
  summary: string;
  highlights: string[];
  featured?: boolean;
  size?: string;
  image?: string;
  gallery?: string[];
  story?: { challenge: string; solution: string };
};

export const projects: Project[] = cfg.projects.map((p) => ({
  slug: p.slug,
  name: p.name,
  client: p.client,
  location: p.location,
  category: p.sector,
  status: p.status,
  year: p.year,
  value: p.value,
  scope: p.scope,
  summary: p.summary,
  highlights: p.highlights,
  featured: p.featured,
  size: p.size,
  image: p.photo,
  gallery: p.gallery,
  story: p.challenge || p.solution ? { challenge: p.challenge ?? "", solution: p.solution ?? "" } : undefined,
}));

export const categories: ProjectCategory[] = [...cfg.projectSectors];
export const sceneFor: Record<ProjectCategory, Scene> = cfg.sectorScene;
