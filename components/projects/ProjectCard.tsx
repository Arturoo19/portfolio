"use client";

import { type KeyboardEvent, type PointerEvent } from "react";

import { Tag } from "@/components/common/Tag";
import { ProjectPreview } from "@/components/projects/ProjectPreview";
import type { Project } from "@/types/portfolio";

type ProjectCardProps = {
  project: Project;
  detailsLabel: string;
  previewLabels: {
    case: string;
    menu: string;
    viewProject: string;
  };
  onOpen: (project: Project) => void;
};

export function ProjectCard({
  project,
  detailsLabel,
  previewLabels,
  onOpen,
}: ProjectCardProps) {
  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;
    const rotateY = ((xPercent - 50) / 50) * 3.5;
    const rotateX = ((50 - yPercent) / 50) * 3;

    card.style.setProperty("--card-x", `${xPercent.toFixed(2)}%`);
    card.style.setProperty("--card-y", `${yPercent.toFixed(2)}%`);
    card.style.setProperty("--card-rotate-x", `${rotateX.toFixed(2)}deg`);
    card.style.setProperty("--card-rotate-y", `${rotateY.toFixed(2)}deg`);
    card.style.setProperty("--card-glow-opacity", "0.68");
  };

  const handlePointerLeave = (event: PointerEvent<HTMLElement>) => {
    const card = event.currentTarget;

    card.style.setProperty("--card-x", "50%");
    card.style.setProperty("--card-y", "50%");
    card.style.setProperty("--card-rotate-x", "0deg");
    card.style.setProperty("--card-rotate-y", "0deg");
    card.style.setProperty("--card-glow-opacity", "0");
  };

  const openProject = () => {
    onOpen(project);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProject();
    }
  };

  const action = (
    <div className="mt-7 flex cursor-pointer items-center justify-between border-t border-white/10 pt-5">
      <span className="text-base font-bold text-slate-300 transition group-hover:text-white">
        {detailsLabel}
      </span>
      <span className="grid size-11 place-items-center rounded-full border border-white/10 text-lg text-slate-300 transition group-hover:border-blue-400 group-hover:text-blue-300">
        ↗
      </span>
    </div>
  );

  return (
    <article
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onClick={openProject}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`${detailsLabel}: ${project.title}`}
      className="project-card group relative isolate cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 p-4 focus:outline-none focus-visible:border-blue-300 focus-visible:ring-2 focus-visible:ring-blue-400/70"
    >
      <div className="project-card-content">
        <ProjectPreview project={project} labels={previewLabels} />
        <div className="p-2 pt-7">
          <div className="mb-4 flex items-start justify-between gap-4">
            <h3 className="font-serif text-2xl font-semibold text-white">
              {project.title}
            </h3>
            <span className="text-sm font-bold text-slate-500">
              {project.year}
            </span>
          </div>
          <p className="text-base font-semibold leading-7 text-slate-400 sm:min-h-24">
            {project.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          {action}
        </div>
      </div>
    </article>
  );
}
