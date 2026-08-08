import type { Service } from "@/types/portfolio";

type ServiceAccordionProps = {
  services: Service[];
};

export function ServiceAccordion({ services }: ServiceAccordionProps) {
  return (
    <div className="divide-y divide-white/10 rounded-3xl border border-white/10 bg-slate-900/60">
      {services.map((service, index) => (
        <details
          key={service.id}
          className="group p-6 open:bg-white/[0.03] sm:p-8"
          open={index === 0}
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-5">
            <span className="flex gap-5">
              <span className="font-mono text-sm text-blue-400">
                {service.eyebrow}
              </span>
              <span>
                <span className="block text-2xl font-bold text-white">
                  {service.title}
                </span>
                <span className="mt-1 block text-base font-semibold text-slate-400">
                  {service.subtitle}
                </span>
              </span>
            </span>
            <span className="grid size-10 shrink-0 place-items-center rounded-full border border-white/10 text-slate-400 transition group-open:rotate-45 group-open:border-blue-400 group-open:text-blue-300">
              +
            </span>
          </summary>
          <div className="mt-7 grid gap-8 pl-0 sm:pl-12 lg:grid-cols-[0.9fr_1.1fr]">
            <p className="text-lg leading-8 text-slate-400">
              {service.description}
            </p>
            <ul className="grid gap-3 text-base font-semibold text-slate-300 sm:grid-cols-2">
              {service.includes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </details>
      ))}
    </div>
  );
}
