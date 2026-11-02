// ⚠️ Don't edit this file — change site.config.ts in the project root instead.
import * as cfg from "@/site.config";

export const site = {
  name: cfg.brand.name,
  legalName: cfg.brand.legalName,
  shortName: cfg.brand.shortName,
  tagline: cfg.brand.tagline,
  description: cfg.brand.description,
  founded: cfg.brand.founded,
  parentGroup: cfg.brand.parentGroup,
  credentials: cfg.credentials,
  contact: cfg.contact,
  social: cfg.social,
  nav: cfg.nav.main,
  footerNav: cfg.nav.footer,
  heroStats: cfg.home.hero.stats,
  badgeText: cfg.home.hero.badgeText,
};

export const leadership: { name: string; role: string; bio: string; photo?: string }[] = cfg.team;
export const milestones = cfg.milestones;
export const values = cfg.values;
