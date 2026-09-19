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
  const { copy, locale } = useLocale();
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
      className="hero-stage relative isolate overflow-hidden pt-28 sm:min-h-screen sm:pt-44"
    >
      <div className="hero-base absolute inset-0 -z-10" />
      <div className="hero-glow hero-glow-primary absolute -z-10" />
      <div className="hero-glow hero-glow-secondary absolute -z-10" />
      <div className="hero-grid absolute inset-0 -z-10" />
      <div className="hero-transition pointer-events-none absolute inset-x-0 bottom-0 z-0" />
      <Container className="relative z-10">
        <div className="grid items-center gap-10 sm:gap-14 lg:grid-cols-[minmax(0,1fr)_430px] xl:gap-20">
          <Reveal>
            <div className="mb-9 flex flex-wrap items-center gap-5 sm:mb-12">
              <span className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-base font-semibold text-slate-300">
                <span className="size-2 rounded-full bg-blue-400" />
                {copy.hero.status}
              </span>
            </div>
            <h1 className="max-w-4xl font-serif text-6xl font-bold leading-[0.95] text-white sm:text-8xl">
              <span className="block">{owner.fullName}</span>
              <span className="block">{owner.surname}</span>
            </h1>
            <p className="mt-8 text-2xl font-semibold text-white sm:mt-10">
              {copy.hero.role}
            </p>
            <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-slate-400 sm:mt-6 sm:text-xl sm:leading-9">
              {copy.hero.intro}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:gap-4">
              <ButtonLink href="#contact">{copy.cta.hire} ↗</ButtonLink>
              <ButtonLink href={owner.cvHref[locale]} variant="secondary" target="_blank">
                {copy.cta.cv}
              </ButtonLink>
              <ButtonLink href="#projects" variant="secondary">
                {copy.cta.viewWork}
              </ButtonLink>
            </div>
            <p className="mt-20 hidden text-sm font-bold uppercase tracking-[0.28em] text-slate-500 sm:block">
              ↓ {copy.cta.scroll}
            </p>
          </Reveal>
          <Reveal delay={160} className="lg:justify-self-end">
            <div className="relative w-full max-w-[430px]">
              <HeroPortrait name={owner.name} />
              <div className="mt-5 rounded-3xl border border-white/10 bg-slate-950/68 p-4 shadow-2xl shadow-blue-950/35 backdrop-blur-xl sm:mt-7 sm:p-6">
                <ol className="divide-y divide-white/10">
                  {copy.hero.highlights.map((item, index) => (
                    <li key={item} className="flex gap-4 py-3 sm:gap-5 sm:py-4">
                      <span className="font-mono text-sm text-blue-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base font-bold leading-7 text-slate-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ol>
                <div className="mt-4 sm:mt-5">
                  <SocialLinks />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
