"use client";

import { useState } from "react";

import type { Service } from "@/types/portfolio";

type ServiceAccordionProps = {
  services: Service[];
};

export function ServiceAccordion({ services }: ServiceAccordionProps) {
  const [activeId, setActiveId] = useState(services[0]?.id ?? "");

  return (
    <div className="grid gap-3">
      {services.map((service) => {
        const isOpen = activeId === service.id;

        return (
          <article
            key={service.id}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-950/55 shadow-[0_18px_55px_rgba(2,6,23,0.28)] transition hover:border-blue-400/30 hover:bg-slate-900/65"
            data-open={isOpen}
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-5 p-5 text-left sm:p-6"
              aria-expanded={isOpen}
              aria-controls={`service-panel-${service.id}`}
              onClick={() =>
                setActiveId((currentId) =>
                  currentId === service.id ? "" : service.id,
                )
              }
            >
              <span className="flex min-w-0 gap-4 sm:gap-5">
                <span className="mt-1 font-mono text-sm font-semibold text-blue-400">
                  {service.eyebrow}
                </span>
                <span className="min-w-0">
                  <span className="block text-xl font-bold text-white sm:text-2xl">
                    {service.title}
                  </span>
                  <span className="mt-1 block text-base font-semibold text-slate-400">
                    {service.subtitle}
                  </span>
                </span>
              </span>
              <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-xl leading-none text-slate-400 transition group-data-[open=true]:rotate-45 group-data-[open=true]:border-blue-400/80 group-data-[open=true]:bg-blue-500/10 group-data-[open=true]:text-blue-300">
                +
              </span>
            </button>
            <div
              id={`service-panel-${service.id}`}
              className="grid transition-[grid-template-rows] duration-300 ease-out data-[open=false]:grid-rows-[0fr] data-[open=true]:grid-rows-[1fr]"
              data-open={isOpen}
            >
              <div className="overflow-hidden">
                <div className="border-t border-white/10 bg-gradient-to-br from-blue-500/[0.07] via-white/[0.025] to-transparent p-5 sm:p-6">
                  <div className="grid gap-6 sm:pl-12 lg:grid-cols-[0.95fr_1.05fr]">
                    <p className="max-w-xl text-base leading-8 text-slate-300">
                      {service.description}
                    </p>
                    <ul className="grid gap-4 text-sm font-semibold text-slate-200 sm:grid-cols-2 sm:text-base">
                      {service.includes.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 leading-7"
                        >
                          <span className="mt-3 size-1.5 shrink-0 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,0.85)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
