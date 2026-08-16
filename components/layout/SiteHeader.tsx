"use client";

import { ButtonLink } from "@/components/common/ButtonLink";
import { Container } from "@/components/common/Container";
import { Logo } from "@/components/common/Logo";
import { useLocale } from "@/components/LocaleProvider";
import { localeLabels, locales } from "@/data/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const { copy, locale, setLocale } = useLocale();

  return (
    <header className="fixed left-0 right-0 top-4 z-50">
      <Container>
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-5 rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 shadow-2xl shadow-blue-950/20 backdrop-blur-xl">
          <Logo />
          <nav className="hidden items-center gap-9 text-base font-semibold text-slate-400 lg:flex">
            {copy.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <select
              className="h-10 rounded-full border border-white/10 bg-white/[0.04] px-3 text-sm font-bold uppercase text-slate-200 outline-none sm:hidden"
              value={locale}
              onChange={(event) => setLocale(event.target.value as typeof locale)}
              aria-label={copy.accessibility.languageSwitcher}
            >
              {locales.map((item) => (
                <option key={item} value={item}>
                  {localeLabels[item]}
                </option>
              ))}
            </select>
            <div
              className="hidden rounded-full border border-white/10 bg-white/[0.04] p-1 sm:flex"
              aria-label={copy.accessibility.languageSwitcher}
            >
              {locales.map((item) => (
                <button
                  key={item}
                  className={cn(
                    "h-9 rounded-full px-4 text-sm font-bold uppercase transition",
                    locale === item
                      ? "bg-white text-slate-950"
                      : "text-slate-400 hover:text-white",
                  )}
                  type="button"
                  onClick={() => setLocale(item)}
                  aria-pressed={locale === item}
                >
                  {localeLabels[item]}
                </button>
              ))}
            </div>
            <ButtonLink
              href="#contact"
              className="hidden min-h-11 px-5 text-sm sm:inline-flex"
            >
              {copy.cta.hire}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </header>
  );
}
