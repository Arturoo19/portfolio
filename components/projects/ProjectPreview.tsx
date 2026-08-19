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

  if (project.slug === "ai-chat-assistant") {
    return (
      <div
        className="relative h-40 overflow-hidden rounded-xl border border-white/10 bg-slate-950 sm:h-48 data-[case=true]:aspect-[16/9] data-[case=true]:h-auto data-[case=true]:bg-black/40"
        data-case={caseHero}
      >
        <Image
          src="/projects/rentauto-chat-assistant-full.png"
          alt="RentAuto embedded AI chat assistant"
          fill
          sizes={
            caseHero
              ? "(min-width: 1024px) 792px, calc(100vw - 5rem)"
              : "(min-width: 1024px) 420px, calc(100vw - 4rem)"
          }
          className={caseHero ? "object-contain" : "object-cover object-top"}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-transparent to-slate-950/70" />
        {caseHero ? null : (
          <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3">
            <span className="rounded-full border border-red-300/25 bg-slate-950/75 px-3 py-1.5 text-xs font-black text-white shadow-lg shadow-black/30 backdrop-blur-md">
              {project.previewLabel}
            </span>
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-200 backdrop-blur-md">
              RentAuto
            </span>
          </div>
        )}
      </div>
    );
  }

  if (project.slug === "obsidian-second-brain-agent") {
    return (
      <div
        className="relative h-40 overflow-hidden rounded-xl border border-white/10 bg-slate-950 sm:h-48 data-[case=true]:aspect-video data-[case=true]:h-auto"
        data-case={caseHero}
      >
        <video
          src="/projects/obsidian-second-brain-agent.mp4"
          className="h-full w-full object-cover object-top"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-transparent to-slate-950/75" />
        <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3">
          <span className="rounded-full border border-blue-300/25 bg-slate-950/75 px-3 py-1.5 text-xs font-black text-white shadow-lg shadow-black/30 backdrop-blur-md">
            {project.previewLabel}
          </span>
          <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-200 backdrop-blur-md">
            Obsidian
          </span>
        </div>
      </div>
    );
  }

  if (project.preview === "chat") {
    return (
      <div className="h-40 rounded-xl border border-white/10 bg-slate-950/70 p-4 sm:h-48">
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

  if (project.slug === "portfolio-site") {
    return (
      <div
        className="relative h-40 overflow-hidden rounded-xl border border-white/10 bg-slate-950 sm:h-48 data-[case=true]:aspect-video data-[case=true]:h-auto"
        data-case={caseHero}
      >
        <Image
          src="/projects/portfolio-site-cover.png"
          alt="Personal portfolio home page"
          fill
          sizes={
            caseHero
              ? "(min-width: 1024px) 792px, calc(100vw - 5rem)"
              : "(min-width: 1024px) 420px, calc(100vw - 4rem)"
          }
          className={caseHero ? "object-contain" : "object-cover object-top"}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/5 via-slate-950/10 to-slate-950/80" />
        {caseHero ? null : (
          <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3">
            <span className="rounded-full border border-blue-300/25 bg-slate-950/75 px-3 py-1.5 text-xs font-black text-white shadow-lg shadow-black/30 backdrop-blur-md">
              {project.previewLabel}
            </span>
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-black uppercase text-slate-200 backdrop-blur-md">
              Next.js
            </span>
          </div>
        )}
      </div>
    );
  }

  if (project.slug === "girex-support-agent") {
    return (
      <div className="relative h-40 overflow-hidden rounded-xl border border-white/10 bg-slate-950 sm:h-48">
        <Image
          src="/projects/girex-cover.png"
          alt="Girex marketplace landing page"
          fill
          sizes={
            caseHero
              ? "(min-width: 1024px) 792px, calc(100vw - 5rem)"
              : "(min-width: 1024px) 420px, calc(100vw - 4rem)"
          }
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/10 to-slate-950/70" />
        {caseHero ? null : (
          <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3">
            <span className="rounded-full border border-blue-300/25 bg-slate-950/75 px-3 py-1.5 text-xs font-black text-white shadow-lg shadow-black/30 backdrop-blur-md">
              {project.previewLabel}
            </span>
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-200 backdrop-blur-md">
              Girex
            </span>
          </div>
        )}
      </div>
    );
  }

  if (project.slug === "openclaw-community-digest") {
    const nodes = project.nodes ?? ["Chats", "AI", "Digest"];

    return (
      <div className="relative h-40 overflow-hidden rounded-xl border border-white/10 bg-slate-950 sm:h-48">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(59,130,246,0.22),transparent_28%),radial-gradient(circle_at_84%_20%,rgba(96,165,250,0.14),transparent_22%)]" />
        <div className="relative flex h-full flex-col justify-between p-4 sm:p-5">
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-200">
              OpenClaw
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-slate-300">
              {project.previewLabel}
            </span>
          </div>
          <div className="relative grid grid-cols-3 items-start gap-5">
            <span className="absolute left-[16%] right-[16%] top-6 h-px bg-white/15" />
            <span className="absolute left-[16%] top-6 size-1 -translate-y-1/2 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,0.9)] motion-safe:animate-[openclaw-signal-start_2.2s_linear_infinite]" />
            <span className="absolute left-1/2 top-6 size-1 -translate-y-1/2 rounded-full bg-blue-300 shadow-[0_0_14px_rgba(147,197,253,0.9)] motion-safe:animate-[openclaw-signal-end_2.2s_linear_infinite] [animation-delay:250ms]" />
            {nodes.map((node, index) => (
              <div key={node} className="relative z-10 text-center">
                <span
                  className={`mx-auto grid size-12 place-items-center rounded-xl border ${
                    index === 1
                      ? "border-blue-400/60 bg-blue-500/15 shadow-[0_0_24px_rgba(59,130,246,0.25)]"
                      : "border-white/15 bg-slate-900/90"
                  }`}
                >
                  <span
                    className={`size-2 rounded-full ${
                      index === 1
                        ? "bg-blue-400 shadow-[0_0_16px_rgba(96,165,250,0.9)]"
                        : "bg-slate-500"
                    }`}
                  />
                </span>
                <span className="mt-3 block text-xs font-semibold text-slate-400">
                  {node}
                </span>
              </div>
            ))}
          </div>
          <style>{`
            @keyframes openclaw-signal-start {
              0% {
                left: 16%;
                transform: translateY(-50%);
                opacity: 0;
              }
              12% {
                opacity: 1;
              }
              88% {
                opacity: 1;
              }
              100% {
                left: 47%;
                transform: translateY(-50%);
                opacity: 0;
              }
            }

            @keyframes openclaw-signal-end {
              0% {
                left: 50%;
                transform: translateY(-50%);
                opacity: 0;
              }
              12% {
                opacity: 1;
              }
              88% {
                opacity: 1;
              }
              100% {
                left: 81%;
                transform: translateY(-50%);
                opacity: 0;
              }
            }
          `}</style>
        </div>
      </div>
    );
  }

  if (project.preview === "workflow") {
    return (
      <div className="h-40 rounded-xl border border-white/10 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:28px_28px] p-4 sm:h-48 sm:p-5">
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
      <div className="relative h-40 overflow-hidden rounded-xl border border-white/10 bg-slate-950 sm:h-48">
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
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/10 to-slate-950/70" />
        {caseHero ? null : (
          <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3">
            <span className="rounded-full border border-blue-300/25 bg-slate-950/75 px-3 py-1.5 text-xs font-black text-white shadow-lg shadow-black/30 backdrop-blur-md">
              {project.previewLabel}
            </span>
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-200 backdrop-blur-md">
              RentAuto
            </span>
          </div>
        )}
        {caseHero && actionHref ? (
          <div className="absolute inset-0 grid place-items-center px-6 text-center">
            <a
              href={actionHref}
              target="_blank"
              rel="noreferrer"
              className={previewButtonClassName}
            >
              {labels.viewProject}
              <span className="ml-2">↗</span>
            </a>
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div className="relative h-40 overflow-hidden rounded-xl border border-white/10 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.25),transparent_30%),linear-gradient(135deg,#171717,#0f172a)] p-5 sm:h-48">
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
