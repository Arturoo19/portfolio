import { socialLinks } from "@/data/site";

export function SocialLinks() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="grid size-12 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-xs font-bold text-slate-300 transition hover:border-blue-400/70 hover:text-white"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
