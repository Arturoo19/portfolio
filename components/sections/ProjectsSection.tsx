"use client";

import { useMemo, useState } from "react";

import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { useLocale } from "@/components/LocaleProvider";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { cn } from "@/lib/utils";
import type { ProjectCategory } from "@/types/portfolio";

export function ProjectsSection() {
  const { copy } = useLocale();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const visibleProjects = useMemo(() => {
    if (activeCategory === "all") {
      return copy.projects.items;
    }

    return copy.projects.items.filter((project) => project.category === activeCategory);
  }, [activeCategory, copy.projects.items]);

  return (
    <section
      id="projects"
      className="projects-stage relative overflow-hidden py-16 sm:py-32"
    >
      <Container className="relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow={copy.projects.eyebrow}
            title={copy.projects.title}
            description={copy.projects.description}
          />
        </Reveal>
        <Reveal delay={120} className="mt-12 flex flex-wrap gap-3">
          {copy.projects.categories.map((category) => {
            const count =
              category.id === "all"
                ? copy.projects.items.length
                : copy.projects.items.filter((project) => project.category === category.id)
                    .length;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "rounded-full border px-5 py-3 text-base font-bold transition",
                  activeCategory === category.id
                    ? "border-white bg-white text-slate-950"
                    : "border-white/10 bg-transparent text-slate-400 hover:border-blue-400/60 hover:text-white",
                )}
              >
                {category.label}
                <span className="ml-2 text-slate-500">{count}</span>
              </button>
            );
          })}
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <Reveal key={project.slug} delay={80 * Math.min(index, 5)}>
              <ProjectCard
                project={project}
                detailsLabel={copy.cta.details}
                previewLabels={{
                  case: copy.cta.previewCase,
                  menu: copy.cta.previewMenu,
                  viewProject: copy.cta.viewProject,
                }}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
