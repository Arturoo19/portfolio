import type { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
};

export function Tag({ children }: TagProps) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-sm font-semibold text-slate-400">
      {children}
    </span>
  );
}
