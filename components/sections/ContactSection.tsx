"use client";

import { ButtonLink } from "@/components/common/ButtonLink";
import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { SocialLinks } from "@/components/common/SocialLinks";
import { useLocale } from "@/components/LocaleProvider";
import { owner } from "@/data/site";

export function ContactSection() {
  const { copy } = useLocale();

  return (
    <section id="contact" className="flow-stage relative overflow-hidden py-16 sm:py-32">
      <Container className="relative z-10">
        <Reveal>
          <div className="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_82%_20%,rgba(59,130,246,0.24),transparent_30%),rgba(15,23,42,0.72)] p-8 shadow-2xl shadow-blue-950/20 sm:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-400">
                {copy.contact.eyebrow}
              </span>
              <h2 className="mt-4 max-w-3xl font-serif text-5xl font-semibold leading-tight text-white sm:text-7xl">
                {copy.contact.title}
              </h2>
              <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-400">
                {copy.contact.description}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                {copy.contact.primaryContact}
              </p>
              <a
                href={owner.telegram}
                target="_blank"
                rel="noreferrer"
                className="mt-4 block text-2xl font-bold text-white hover:text-blue-300"
              >
                {owner.telegramUsername}
              </a>
              <a
                href={`mailto:${owner.email}`}
                className="mt-3 block text-base font-semibold text-slate-400 hover:text-blue-300"
              >
                {owner.email}
              </a>
              <a
                href={`tel:${owner.phone.replaceAll(" ", "")}`}
                className="mt-2 block text-base font-semibold text-slate-400 hover:text-blue-300"
              >
                {owner.phone}
              </a>
              <div className="mt-8 flex flex-col gap-3">
                <ButtonLink href={owner.telegram}>{copy.contact.telegram}</ButtonLink>
                <ButtonLink href={`mailto:${owner.email}`} variant="secondary">
                  {copy.contact.email}
                </ButtonLink>
              </div>
              <div className="mt-8">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
        </Reveal>
      </Container>
    </section>
  );
}
