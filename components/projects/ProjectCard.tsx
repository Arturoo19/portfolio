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
  const visibleTags = project.tags.slice(0, 4);
  const hiddenTagCount = project.tags.length - visibleTags.length;

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
    <div className="mt-auto flex cursor-pointer items-center justify-between border-t border-white/10 pt-4">
      <span className="text-sm font-bold text-slate-300 transition group-hover:text-white">
        {detailsLabel}
      </span>
      <span className="grid size-9 place-items-center rounded-full border border-white/10 text-base text-slate-300 transition group-hover:border-blue-400 group-hover:text-blue-300">
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
      className="project-card group relative isolate h-full cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 p-3 focus:outline-none focus-visible:border-blue-300 focus-visible:ring-2 focus-visible:ring-blue-400/70"
    >
      <div className="project-card-content flex h-full flex-col">
        <ProjectPreview project={project} labels={previewLabels} />
        <div className="flex flex-1 flex-col px-2 pb-1 pt-5">
          <div className="mb-3 flex items-start justify-between gap-4">
            <h3 className="font-serif text-xl font-semibold text-white sm:text-2xl">
              {project.title}
            </h3>
            <span className="text-sm font-bold text-slate-500">
              {project.year}
            </span>
          </div>
          <p className="line-clamp-3 text-sm font-semibold leading-6 text-slate-400 sm:text-base">
            {project.summary}
          </p>
          <div className="mt-5 flex min-h-20 content-start flex-wrap gap-2">
            {visibleTags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
            {hiddenTagCount > 0 ? <Tag>+{hiddenTagCount}</Tag> : null}
          </div>
          {action}
        </div>
      </div>
    </article>
  );
}
