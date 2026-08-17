import { socialLinks } from "@/data/site";
import { type ReactNode } from "react";

type IconProps = {
  className?: string;
};

const icons: Record<string, (props: IconProps) => ReactNode> = {
  TG: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.7 4.4a1.35 1.35 0 0 0-1.41-.22L3.91 10.12a1.18 1.18 0 0 0 .05 2.22l3.91 1.25 1.52 4.82a1.15 1.15 0 0 0 1.94.42l2.23-2.31 3.95 2.9a1.19 1.19 0 0 0 1.88-.72l2.02-12.98a1.35 1.35 0 0 0-.71-1.32Zm-3.03 3.43-7.1 6.26a.72.72 0 0 0-.24.45l-.28 2.35-.9-2.86 7.76-6.8c.5-.43.26-.76-.33-.4l-9.5 5.85-2.9-.93L18.95 6c.38-.15.73.09.66.49l-1.94 12.28-3.73-2.75a.85.85 0 0 0-1.1.08l-1.32 1.36.22-1.84 6.67-5.89c.52-.46-.03-1.28-.74-.9Z" />
    </svg>
  ),
  IN: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.94 8.9H3.86v10.2h3.08V8.9ZM5.4 4.04a1.78 1.78 0 1 0 0 3.56 1.78 1.78 0 0 0 0-3.56Zm7.05 4.86H9.5v10.2h3.04v-5.35c0-1.43.66-2.32 1.9-2.32 1.1 0 1.63.76 1.63 2.32v5.35h3.07v-5.88c0-3.15-1.68-4.61-3.92-4.61-1.8 0-2.6.99-3.05 1.68h-.04l.02-1.39Z" />
    </svg>
  ),
  GH: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.75a9.25 9.25 0 0 0-2.93 18.03c.46.08.63-.2.63-.44v-1.6c-2.55.56-3.1-1.1-3.1-1.1-.42-1.07-1.02-1.36-1.02-1.36-.84-.57.06-.56.06-.56.93.07 1.42.96 1.42.96.83 1.41 2.17 1 2.7.77.08-.6.32-1 .58-1.23-2.04-.23-4.19-1.02-4.19-4.55 0-1 .36-1.83.95-2.47-.1-.23-.41-1.17.09-2.44 0 0 .78-.25 2.55.95a8.83 8.83 0 0 1 4.64 0c1.77-1.2 2.55-.95 2.55-.95.5 1.27.19 2.21.09 2.44.59.64.95 1.46.95 2.47 0 3.54-2.15 4.31-4.2 4.54.33.29.62.84.62 1.7v2.41c0 .24.17.52.64.44A9.25 9.25 0 0 0 12 2.75Z" />
    </svg>
  ),
  ML: (props) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 6.75h14.5v10.5H4.75V6.75Zm.5.7 6.75 5.1 6.75-5.1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.9"
      />
    </svg>
  ),
};

export function SocialLinks() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {socialLinks.map((link) => {
        const Icon = icons[link.icon];
        const isExternal = !link.href.startsWith("mailto:");

        return (
          <a
            key={link.label}
            href={link.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noreferrer" : undefined}
            className="group grid size-12 place-items-center rounded-full border border-white/10 bg-white/[0.025] text-slate-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition hover:-translate-y-0.5 hover:border-blue-400 hover:bg-blue-500/10 hover:text-white hover:shadow-[0_0_0_4px_rgba(59,130,246,0.14),0_0_26px_rgba(59,130,246,0.28)] focus:outline-none focus-visible:border-blue-300 focus-visible:text-white focus-visible:ring-2 focus-visible:ring-blue-400/70"
            aria-label={link.label}
          >
            {Icon ? (
              <Icon className="size-5 transition group-hover:scale-105" />
            ) : (
              <span className="text-xs font-bold">{link.icon}</span>
            )}
          </a>
        );
      })}
    </div>
  );
}
