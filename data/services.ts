// ⚠️ Don't edit this file — change `services` in site.config.ts instead.
import * as cfg from "@/site.config";
import type { Scene } from "@/components/Photo";
import type { ProjectCategory } from "./projects";

export type Service = {
  slug: string;
  title: string;
  short: string;
  summary: string;
  details: string[];
  image?: string;
  scene: Scene;
  projectSectors: ProjectCategory[];
};

export const services: Service[] = cfg.services.map((s) => ({
  slug: s.slug,
  title: s.title,
  short: s.short,
  summary: s.summary,
  details: [...s.details],
  image: s.photo,
  scene: s.scene,
  projectSectors: [...s.projectSectors],
}));
