import Image from "next/image";

import rentAutoHome from "@/app/images/rentAuto/home.png";
import type { Project } from "@/types/portfolio";

type ProjectPreviewProps = {
  project: Project;
  labels: {
    case: string;
    menu: string;
    viewProject: string;
  };
  actionHref?: string;
  caseHero?: boolean;
};

export function ProjectPreview({
  project,
  labels,
  actionHref,
  caseHero = false,
}: ProjectPreviewProps) {
  const previewButtonClassName =
    "mt-4 inline-flex min-h-10 cursor-pointer select-none items-center justify-center rounded-full border border-white/75 bg-white px-5 text-xs font-extrabold text-slate-950 shadow-lg shadow-black/25 transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 hover:shadow-blue-950/25";

  if (project.preview === "chat") {
    return (
      <div className="h-44 rounded-xl border border-white/10 bg-slate-950/70 p-4 sm:h-56">
        <div className="mb-4 flex items-center gap-3 border-b border-white/10 pb-3">
          <span className="size-3 rounded-full bg-blue-400" />
          <span className="ml-auto rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1 text-sm font-semibold text-slate-300">
            {project.previewLabel}
          </span>
        </div>
        <div className="space-y-4">
          <span className="block h-3 w-1/3 rounded-full bg-white/20" />
          <span className="block h-3 w-2/3 rounded-full bg-white/20" />
          <span className="ml-auto block h-5 w-2/5 rounded-full bg-blue-500/40" />
          <span className="block h-10 w-3/4 rounded-xl bg-white/10" />
          <span className="ml-auto block h-5 w-1/3 rounded-full bg-blue-500/40" />
        </div>
      </div>
    );
  }

  if (project.preview === "workflow") {
    return (
      <div className="h-44 rounded-xl border border-white/10 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:28px_28px] p-4 sm:h-56 sm:p-6">
        <div className="mb-6 ml-auto w-fit rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-slate-300 sm:mb-8">
          {project.previewLabel}
        </div>
        <div className="grid grid-cols-3 items-center gap-5">
          {(project.nodes ?? ["Input", "AI", "Output"]).map((node, index) => (
            <div key={node} className="relative text-center">
              {index > 0 ? (
                <span className="absolute right-1/2 top-6 -z-0 h-px w-full bg-white/15" />
              ) : null}
              <span className="relative mx-auto grid size-12 place-items-center rounded-lg border border-white/15 bg-slate-900 text-blue-300">
                {index === 1 ? "AI" : ""}
              </span>
              <span className="mt-3 block text-xs font-semibold text-slate-500">
                {node}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (project.slug === "rentauto") {
    return (
      <div className="relative h-44 overflow-hidden rounded-xl border border-white/10 bg-slate-950 sm:h-56">
        <Image
          src={rentAutoHome}
          alt="RentAuto home page"
          fill
          priority
          sizes={
            caseHero
              ? "(min-width: 1024px) 792px, calc(100vw - 5rem)"
              : "(min-width: 1024px) 420px, calc(100vw - 4rem)"
          }
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/55 via-slate-950/15 to-slate-950/65" />
        <div className="absolute inset-x-5 top-5 flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-slate-200/80">
          <span>{labels.case}</span>
          <span>{labels.menu}</span>
        </div>
        <div className="absolute inset-0 grid place-items-center px-6 text-center">
          <div>
            {caseHero ? null : (
              <p className="mx-auto w-fit rounded-full border border-white/15 bg-slate-950/70 px-4 py-2 text-sm font-black text-white shadow-xl shadow-black/35 backdrop-blur-md sm:text-base">
                {project.previewLabel}
              </p>
            )}
            {actionHref ? (
              <a
                href={actionHref}
                target="_blank"
                rel="noreferrer"
                className={previewButtonClassName}
              >
                {labels.viewProject}
                <span className="ml-2">↗</span>
              </a>
            ) : (
              <span className={previewButtonClassName}>{labels.viewProject}</span>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-44 overflow-hidden rounded-xl border border-white/10 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.25),transparent_30%),linear-gradient(135deg,#171717,#0f172a)] p-5 sm:h-56">
      <div className="absolute inset-x-5 top-5 flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-slate-400">
        <span>{labels.case}</span>
        <span>{labels.menu}</span>
      </div>
      <div className="grid h-full place-items-center text-center">
        <div>
          <p className="font-serif text-2xl font-semibold text-white sm:text-3xl">
            {project.previewLabel}
          </p>
          {actionHref ? (
            <a
              href={actionHref}
              target="_blank"
              rel="noreferrer"
              className={previewButtonClassName}
            >
              {labels.viewProject}
              <span className="ml-2">↗</span>
            </a>
          ) : (
            <span className={previewButtonClassName}>{labels.viewProject}</span>
          )}
        </div>
      </div>
      <div className="absolute bottom-5 left-6 h-16 w-10 rounded-xl border border-white/20 bg-black/40 sm:h-20 sm:w-12" />
    </div>
  );
}
