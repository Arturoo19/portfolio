"use client";

import { Container } from "@/components/common/Container";
import { Logo } from "@/components/common/Logo";
import { SocialLinks } from "@/components/common/SocialLinks";
import { useLocale } from "@/components/LocaleProvider";
import { owner } from "@/data/site";

export function SiteFooter() {
  const { copy } = useLocale();

  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <Logo />
          <nav className="flex flex-wrap gap-5 text-sm font-semibold text-slate-400">
            {copy.navigation.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
          <SocialLinks />
        </div>
        <p className="mt-8 text-sm text-slate-500">
          © 2026 {owner.name}. {copy.footer}
        </p>
      </Container>
    </footer>
  );
}
