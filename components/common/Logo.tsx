"use client";

import Link from "next/link";
import { type MouseEvent } from "react";

import { useLocale } from "@/components/LocaleProvider";
import { owner } from "@/data/site";

export function Logo() {
  const { copy } = useLocale();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link
      href="#top"
      onClick={handleClick}
      className="inline-flex items-center gap-3 text-white"
      aria-label={copy.accessibility.home}
    >
      <span className="grid size-9 place-items-center rounded-xl border border-blue-400/30 bg-blue-500/15 font-serif text-sm text-blue-300">
        {owner.initials}
      </span>
      <span className="text-base font-semibold">{owner.name}</span>
    </Link>
  );
}
