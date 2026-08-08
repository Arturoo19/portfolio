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
};

export function ProjectCard({
  project,
  detailsLabel,
  previewLabels,
}: ProjectCardProps) {
  return (
    <article className="group rounded-2xl border border-white/10 bg-slate-900/70 p-4 transition hover:border-blue-400/50 hover:bg-slate-900">
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
        <p className="min-h-24 text-base font-semibold leading-7 text-slate-400">
          {project.summary}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
          <button
            type="button"
            className="text-base font-bold text-slate-300 transition hover:text-white"
          >
            {detailsLabel}
          </button>
          <span className="grid size-11 place-items-center rounded-full border border-white/10 text-lg text-slate-300 transition group-hover:border-blue-400 group-hover:text-blue-300">
            ↗
          </span>
        </div>
      </div>
    </article>
  );
}
