"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { defaultLocale, siteCopy } from "@/data/site";
import type { Locale } from "@/types/portfolio";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  copy: (typeof siteCopy)[Locale];
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") {
      return defaultLocale;
    }

    let savedLocale: string | null = null;

    try {
      savedLocale = window.localStorage.getItem("portfolio-locale");
    } catch {
      savedLocale = null;
    }

    if (savedLocale === "en" || savedLocale === "es" || savedLocale === "uk") {
      return savedLocale;
    }

    return defaultLocale;
  });

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);

    try {
      window.localStorage.setItem("portfolio-locale", nextLocale);
    } catch {
      return;
    }
  };

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      copy: siteCopy[locale],
    }),
    [locale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used inside LocaleProvider");
  }

  return context;
}
