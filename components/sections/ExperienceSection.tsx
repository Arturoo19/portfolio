"use client";

import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Tag } from "@/components/common/Tag";
import { useLocale } from "@/components/LocaleProvider";

export function ExperienceSection() {
  const { copy } = useLocale();

  return (
    <section
      id="experience"
      className="flow-stage relative overflow-hidden py-16 sm:py-32"
    >
      <Container className="relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow={copy.experience.eyebrow}
            title={copy.experience.title}
            description={copy.experience.description}
          />
        </Reveal>
        <div className="mt-12 grid gap-5">
          {copy.experience.items.map((item, index) => (
            <Reveal key={`${item.company}-${item.period}`} delay={80 * index}>
              <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 transition hover:border-blue-400/40 hover:bg-slate-900 sm:p-8">
                <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                  <div>
                    <p className="font-mono text-sm font-semibold text-blue-400">
                      {item.period}
                    </p>
                    <h3 className="mt-4 font-serif text-3xl font-semibold text-white">
                      {item.company}
                    </h3>
                    <p className="mt-3 text-lg font-bold text-slate-300">
                      {item.role}
                    </p>
                    <p className="mt-5 text-base leading-7 text-slate-400">
                      {item.summary}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                  </div>
                  <ul className="grid gap-4 text-base font-semibold leading-7 text-slate-300">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-4">
                        <span className="mt-3 size-1.5 shrink-0 rounded-full bg-blue-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
