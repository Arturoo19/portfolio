"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import rentAutoScreenshotOne from "@/app/images/rentAuto/image.png";
import rentAutoScreenshotTwo from "@/app/images/rentAuto/1778759105510.jpg";
import { Tag } from "@/components/common/Tag";
import { ProjectPreview } from "@/components/projects/ProjectPreview";
import type { Project } from "@/types/portfolio";

type ProjectCaseModalProps = {
  project: Project;
  labels: {
    screenshots: string;
    overview: string;
    focus: string;
    stack: string;
    highlights: string;
    openOriginal: string;
    closeCase: string;
    previewCase: string;
    previewMenu: string;
    viewProject: string;
  };
  onClose: () => void;
};

export function ProjectCaseModal({
  project,
  labels,
  onClose,
}: ProjectCaseModalProps) {
  const screenshots = getProjectScreenshots(project);
  const [activeScreenshotIndex, setActiveScreenshotIndex] = useState<number | null>(
    null,
  );
  const isLightboxOpen = activeScreenshotIndex !== null;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (isLightboxOpen) {
          setActiveScreenshotIndex(null);
          return;
        }

        onClose();
      }

      if (!isLightboxOpen || screenshots.length < 2) {
        return;
      }

      if (event.key === "ArrowLeft") {
        setActiveScreenshotIndex((current) =>
          current === null
            ? current
            : (current - 1 + screenshots.length) % screenshots.length,
        );
      }

      if (event.key === "ArrowRight") {
        setActiveScreenshotIndex((current) =>
          current === null ? current : (current + 1) % screenshots.length,
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen, onClose, screenshots.length]);

  const closeLightbox = () => {
    setActiveScreenshotIndex(null);
  };

  const showPreviousScreenshot = () => {
    setActiveScreenshotIndex((current) =>
      current === null ? current : (current - 1 + screenshots.length) % screenshots.length,
    );
  };

  const showNextScreenshot = () => {
    setActiveScreenshotIndex((current) =>
      current === null ? current : (current + 1) % screenshots.length,
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 px-4 py-5 backdrop-blur-xl sm:px-6 sm:py-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${project.slug}-case-title`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="mx-auto min-h-full w-full max-w-[52.5rem]">
        <article className="relative overflow-hidden rounded-[1.6rem] border border-blue-300/20 bg-slate-950 p-4 shadow-2xl shadow-black/50 sm:p-6">
          <button
            type="button"
            onClick={onClose}
            aria-label={labels.closeCase}
            className="absolute right-3 top-3 z-20 grid size-10 place-items-center rounded-full border border-blue-300/40 bg-slate-950/85 text-xl leading-none text-slate-300 shadow-lg shadow-blue-950/30 transition hover:border-blue-300 hover:text-white sm:right-4 sm:top-4 sm:size-11"
          >
            <span className="-translate-y-px">×</span>
          </button>

          <div className="overflow-hidden rounded-2xl">
            <ProjectPreview
              project={project}
              labels={{
                case: labels.previewCase,
                menu: labels.previewMenu,
                viewProject: labels.openOriginal,
              }}
              actionHref={project.href}
              caseHero
            />
          </div>

          {screenshots.length > 0 ? (
            <div className="mt-7">
              <div className="flex items-center justify-between gap-4">
                <h4 className="text-sm font-black uppercase tracking-[0.28em] text-slate-500">
                  {labels.screenshots}
                </h4>
                <span className="text-sm font-bold text-slate-500">
                  {screenshots.length}
                </span>
              </div>
              <div className="mt-4 grid max-w-md grid-cols-2 gap-3">
                {screenshots.map((screenshot, index) => (
                  <ScreenshotButton
                    key={screenshot.src}
                    screenshot={screenshot}
                    onOpen={() => setActiveScreenshotIndex(index)}
                  />
                ))}
              </div>
            </div>
          ) : null}

          <div className="mt-8 flex items-center gap-4">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-slate-500">
              {project.caseStudy.type}
            </p>
            <span className="h-px flex-1 bg-white/10" />
            <span className="text-sm font-bold text-slate-500">{project.year}</span>
          </div>

          <div className="mt-4">
            <h3
              id={`${project.slug}-case-title`}
              className="font-serif text-4xl font-semibold text-white sm:text-5xl"
            >
              {project.title}
            </h3>
          </div>

          <CaseBlock title={labels.overview} body={project.caseStudy.overview} />

          <div className="mt-8 grid gap-7 border-t border-white/10 pt-7 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <h4 className="text-sm font-black uppercase tracking-[0.22em] text-slate-500">
                {labels.focus}
              </h4>
              <p className="mt-4 text-base font-semibold leading-7 text-slate-300">
                {project.caseStudy.focus}
              </p>
              <div className="mt-6">
                <h4 className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-slate-500">
                  {labels.stack}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.caseStudy.stack.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-black uppercase tracking-[0.22em] text-blue-400">
                {labels.highlights}
              </h4>
              <ul className="mt-4 space-y-3">
                {project.caseStudy.highlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-base font-semibold leading-7 text-slate-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </div>
      {isLightboxOpen ? (
        <ScreenshotLightbox
          screenshots={screenshots}
          activeIndex={activeScreenshotIndex}
          onClose={closeLightbox}
          onPrevious={showPreviousScreenshot}
          onNext={showNextScreenshot}
          onSelect={setActiveScreenshotIndex}
        />
      ) : null}
    </div>
  );
}

function getProjectScreenshots(project: Project) {
  if (project.slug === "rentauto") {
    return [
      {
        src: rentAutoScreenshotOne.src,
        alt: "RentAuto booking and vehicle interface",
      },
      {
        src: rentAutoScreenshotTwo.src,
        alt: "RentAuto project screen",
      },
      {
        src: "/projects/rentauto-n8n-workflows.png",
        alt: "RentAuto n8n automation workflows",
      },
    ];
  }

  return project.caseStudy.screenshots;
}

function ScreenshotButton({
  screenshot,
  onOpen,
}: {
  screenshot: Project["caseStudy"]["screenshots"][number];
  onOpen: () => void;
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <button
      type="button"
      onClick={onOpen}
      className="block overflow-hidden rounded-xl border border-white/10 bg-slate-900 text-left transition hover:-translate-y-0.5 hover:border-blue-300/50 focus:outline-none focus-visible:border-blue-300 focus-visible:ring-2 focus-visible:ring-blue-400/70"
    >
      {hasError ? (
        <span className="block aspect-[16/10] bg-white/[0.03]" />
      ) : (
        <Image
          src={screenshot.src}
          alt={screenshot.alt}
          width={640}
          height={400}
          onError={() => setHasError(true)}
          className="aspect-[16/10] w-full object-cover"
        />
      )}
    </button>
  );
}

function ScreenshotLightbox({
  screenshots,
  activeIndex,
  onClose,
  onPrevious,
  onNext,
  onSelect,
}: {
  screenshots: Array<Project["caseStudy"]["screenshots"][number]>;
  activeIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
}) {
  const activeScreenshot = screenshots[activeIndex];
  const hasMultipleScreenshots = screenshots.length > 1;

  return (
    <div
      className="fixed inset-0 z-[60] bg-slate-950/95 px-4 py-6 backdrop-blur-xl"
      role="dialog"
      aria-modal="true"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="pointer-events-none absolute left-5 top-5 text-sm font-bold text-slate-300">
        {activeIndex + 1} / {screenshots.length}
      </div>
      <button
        type="button"
        onClick={onClose}
        aria-label="Close screenshot"
        className="absolute right-5 top-5 z-10 grid size-11 place-items-center rounded-full border border-white/15 bg-slate-950/80 text-2xl leading-none text-slate-300 transition hover:border-blue-300/50 hover:text-white"
      >
        <span className="-translate-y-px">×</span>
      </button>

      {hasMultipleScreenshots ? (
        <>
          <button
            type="button"
            onClick={onPrevious}
            aria-label="Previous screenshot"
            className="absolute left-4 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-blue-300/20 bg-blue-500/10 text-2xl text-slate-200 transition hover:border-blue-300/50 hover:bg-blue-500/20 sm:left-8"
          >
            ←
          </button>
          <button
            type="button"
            onClick={onNext}
            aria-label="Next screenshot"
            className="absolute right-4 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-blue-300/20 bg-blue-500/10 text-2xl text-slate-200 transition hover:border-blue-300/50 hover:bg-blue-500/20 sm:right-8"
          >
            →
          </button>
        </>
      ) : null}

      <div className="flex h-full items-center justify-center pb-24 pt-12">
        <div className="relative h-full max-h-[78vh] w-full max-w-6xl">
          <Image
            src={activeScreenshot.src}
            alt={activeScreenshot.alt}
            fill
            sizes="100vw"
            className="object-contain"
          />
        </div>
      </div>

      {hasMultipleScreenshots ? (
        <div className="absolute inset-x-4 bottom-5 flex justify-center gap-3">
          {screenshots.map((screenshot, index) => (
            <button
              key={screenshot.src}
              type="button"
              onClick={() => onSelect(index)}
              className={
                index === activeIndex
                  ? "overflow-hidden rounded-lg border border-blue-300 bg-blue-400/10"
                  : "overflow-hidden rounded-lg border border-white/10 bg-slate-900/80 opacity-60 transition hover:opacity-100"
              }
            >
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                width={96}
                height={60}
                className="aspect-[16/10] w-20 object-cover sm:w-24"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function CaseBlock({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="mt-7 border-t border-white/10 pt-7">
      <h4 className="text-sm font-black uppercase tracking-[0.22em] text-blue-400">
        {title}
      </h4>
      <p className="mt-4 text-lg font-semibold leading-8 text-slate-300">
        {body}
      </p>
    </div>
  );
}
