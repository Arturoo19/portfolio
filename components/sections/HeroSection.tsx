"use client";

import { useRef, type PointerEvent } from "react";

import { ButtonLink } from "@/components/common/ButtonLink";
import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { SocialLinks } from "@/components/common/SocialLinks";
import { useLocale } from "@/components/LocaleProvider";
import { HeroPortrait } from "@/components/sections/HeroPortrait";
import { owner } from "@/data/site";

export function HeroSection() {
  const { copy } = useLocale();
  const sectionRef = useRef<HTMLElement>(null);

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const rect = section.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    section.style.setProperty("--cursor-x", `${x.toFixed(2)}%`);
    section.style.setProperty("--cursor-y", `${y.toFixed(2)}%`);
  };

  return (
    <section
      ref={sectionRef}
      id="top"
      onPointerMove={handlePointerMove}
      className="hero-stage relative min-h-screen overflow-hidden pt-36 sm:pt-44"
    >
      <div className="hero-base absolute inset-0 -z-10" />
      <div className="hero-glow hero-glow-primary absolute -z-10" />
      <div className="hero-glow hero-glow-secondary absolute -z-10" />
      <div className="hero-grid absolute inset-0 -z-10" />
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.78fr]">
          <Reveal>
            <div className="mb-12 flex flex-wrap items-center gap-5">
              <HeroPortrait name={owner.name} />
              <span className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-base font-semibold text-slate-300">
                <span className="size-2 rounded-full bg-blue-400" />
                {copy.hero.status}
              </span>
            </div>
            <h1 className="max-w-4xl font-serif text-6xl font-bold leading-[0.95] text-white sm:text-8xl">
              <span className="block">{owner.fullName}</span>
              <span className="block">{owner.surname}</span>
            </h1>
            <p className="mt-10 text-2xl font-semibold text-white">
              {copy.hero.role}
            </p>
            <p className="mt-6 max-w-2xl text-xl font-medium leading-9 text-slate-400">
              {copy.hero.intro}
            </p>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="#contact">{copy.cta.discuss} ↗</ButtonLink>
              <ButtonLink href="#projects" variant="secondary">
                {copy.cta.viewWork}
              </ButtonLink>
            </div>
            <p className="mt-20 text-sm font-bold uppercase tracking-[0.28em] text-slate-500">
              ↓ {copy.cta.scroll}
            </p>
          </Reveal>
          <Reveal delay={160} className="lg:justify-self-end">
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-8 shadow-2xl shadow-blue-950/25 backdrop-blur-md">
              <ol className="divide-y divide-white/10">
                {copy.hero.highlights.map((item, index) => (
                  <li key={item} className="flex gap-5 py-6">
                    <span className="font-mono text-sm text-blue-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xl font-bold text-slate-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
              <div className="mt-8">
                <SocialLinks />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
