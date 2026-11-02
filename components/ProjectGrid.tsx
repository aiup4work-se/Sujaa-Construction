"use client";

import { useMemo, useState } from "react";
import { categories, type Project } from "@/data/projects";
import { ProjectCard } from "./ui";
import { labels as L } from "@/site.config";

export default function ProjectGrid({ items }: { items: Project[] }) {
  const [cat, setCat] = useState<string>("All");
  const [status, setStatus] = useState<string>("All");

  const list = useMemo(
    () => items.filter((p) => (cat === "All" || p.category === cat) && (status === "All" || p.status === status)),
    [items, cat, status],
  );

  const chip = (active: boolean) =>
    `h-10 rounded-full px-5 text-[14px] transition-colors ${active ? "bg-night text-white" : "border border-night/25 text-night hover:border-night"}`;

  return (
    <>
      <div className="flex flex-col gap-4 border-b border-rule pb-7 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by sector">
          {["All", ...categories].map((c) => (
            <button key={c} className={chip(cat === c)} aria-pressed={cat === c} onClick={() => setCat(c)}>{c === "All" ? L.filterAll : c}</button>
          ))}
        </div>
        <div className="flex gap-2" role="group" aria-label="Filter by status">
          {([["All", L.filterAll], ["Ongoing", L.filterOngoing], ["Completed", L.filterCompleted]] as const).map(([s, label]) => (
            <button key={s} className={chip(status === s)} aria-pressed={status === s} onClick={() => setStatus(s)}>{label}</button>
          ))}
        </div>
      </div>

      <p className="mt-6 text-[14px] text-mute">{list.length} {L.projectCount}</p>

      {list.length ? (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>
      ) : (
        <p className="py-16 text-center text-mute">{L.noMatch}</p>
      )}
    </>
  );
}
