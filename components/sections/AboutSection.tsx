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
    <section id="about" className="py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
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
              <div className="flex flex-wrap gap-3">
                {copy.about.stack.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {copy.about.cards.map((card, index) => (
              <Reveal key={card.title} delay={80 * index}>
                <Link
                  href={card.href}
                  className="group flex min-h-72 flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/70 p-6 transition hover:border-blue-400/50 hover:bg-slate-900"
                >
                  <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
                    {card.eyebrow}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-white">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-base font-semibold leading-7 text-slate-400">
                      {card.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
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
