import type { Metadata } from "next";
import ProjectGrid from "@/components/ProjectGrid";
import { CtaBand, PageHero } from "@/components/ui";
import { projects } from "@/data/projects";
import { pages } from "@/site.config";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <PageHero {...pages.projects.hero} image={pages.projects.hero.photo} />
      <section className="shell pt-16 lg:pt-20">
        <ProjectGrid items={projects} />
      </section>
      <CtaBand />
    </>
  );
}
