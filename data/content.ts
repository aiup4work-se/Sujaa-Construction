// ⚠️ Don't edit this file — change site.config.ts instead.
import * as cfg from "@/site.config";

export type NewsItem = { slug: string; title: string; date: string; excerpt: string; tag: string; image?: string; body?: string[] };

export const news: NewsItem[] = cfg.news.map((n) => ({ ...n, image: n.photo }));
export const certifications = cfg.certifications;
export const faqs = cfg.faqs;
export const testimonials = cfg.testimonials;
export const jobs = cfg.jobs;
