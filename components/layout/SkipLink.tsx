"use client";

import { useLocale } from "@/components/LocaleProvider";

export function SkipLink() {
  const { copy } = useLocale();

  return (
    <a href="#main" className="skip-link">
      {copy.accessibility.skipToContent}
    </a>
  );
}
