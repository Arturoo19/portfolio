import Link from "next/link";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary: "border-blue-500 bg-blue-500 text-slate-950 hover:bg-blue-400",
  secondary:
    "border-white/15 bg-white/5 text-white hover:border-blue-400 hover:bg-white/10",
  ghost: "border-transparent text-slate-300 hover:text-white",
};

export function ButtonLink({
  className,
  children,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-3 rounded-full border px-6 text-base font-semibold transition",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
