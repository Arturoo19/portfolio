"use client";

import { Container } from "@/components/common/Container";
import { Logo } from "@/components/common/Logo";
import { useLocale } from "@/components/LocaleProvider";
import { owner } from "@/data/site";

export function SiteFooter() {
  const { copy } = useLocale();

  return (
    <footer className="site-footer border-t border-white/10 py-10">
      <Container className="relative z-10">
        <div className="grid gap-8 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <Logo />
          <nav className="flex flex-wrap gap-5 text-sm font-semibold text-slate-400 md:justify-center md:gap-10 lg:gap-12">
            {copy.navigation.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <p className="mt-8 text-sm text-slate-500">
          © 2026 {owner.name}. {copy.footer}
        </p>
      </Container>
    </footer>
  );
}
