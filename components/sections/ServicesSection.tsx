"use client";

import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { useLocale } from "@/components/LocaleProvider";
import { ServiceAccordion } from "@/components/services/ServiceAccordion";

export function ServicesSection() {
  const { copy } = useLocale();

  return (
    <section id="services" className="py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <SectionHeading
              eyebrow={copy.services.eyebrow}
              title={copy.services.title}
              description={copy.services.description}
            />
          </Reveal>
          <Reveal delay={140}>
            <ServiceAccordion services={copy.services.items} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
