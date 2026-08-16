"use client";

import Link from "next/link";

import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Tag } from "@/components/common/Tag";
import { useLocale } from "@/components/LocaleProvider";

export function AboutSection() {
  const { copy } = useLocale();

  return (
    <section id="about" className="flow-stage relative overflow-hidden py-16 sm:py-32">
      <Container className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow={copy.about.eyebrow}
                title={copy.about.title}
                description={copy.about.description}
              />
            </Reveal>
            <Reveal delay={100} className="mt-10">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-slate-500">
                {copy.about.stackLabel}
              </p>
              <div className="flex max-w-2xl flex-wrap gap-2.5">
                {copy.about.stack.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {copy.about.cards.map((card, index) => (
              <Reveal key={card.title} delay={80 * index}>
                <Link
                  href={card.href}
                  className="group flex min-h-52 flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/65 p-5 transition hover:-translate-y-0.5 hover:border-blue-400/50 hover:bg-slate-900"
                >
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-400">
                      {card.eyebrow}
                    </span>
                    <h3 className="mt-2 font-serif text-xl font-semibold text-white">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm font-semibold leading-7 text-slate-400">
                      {card.description}
                    </p>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
