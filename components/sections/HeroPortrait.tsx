import Image from "next/image";

import portrait from "@/app/images/photo_2025-11-14_22-31-06.jpg";

type HeroPortraitProps = {
  name: string;
};

export function HeroPortrait({ name }: HeroPortraitProps) {
  return (
    <div className="hero-portrait relative mx-auto w-full max-w-[430px] pb-3">
      <div className="relative mx-auto size-[210px] sm:mx-0 sm:size-[292px]">
        <div className="absolute -inset-8 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute -inset-3 rounded-full border border-blue-300/15" />
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_32%_25%,rgba(147,197,253,0.9),rgba(59,130,246,0.58)_34%,rgba(79,70,229,0.35)_68%,rgba(15,23,42,0.08)_100%)] shadow-2xl shadow-blue-950/45" />
        <div className="absolute inset-4 overflow-hidden rounded-full border border-white/15 bg-slate-950">
          <Image
            src={portrait}
            alt={`${name} portrait`}
            fill
            priority
            sizes="(min-width: 640px) 292px, 250px"
            placeholder="blur"
            className="scale-110 object-cover object-[50%_23%]"
          />
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_14%,transparent_44%,rgba(2,6,23,0.22)_100%)]" />
        </div>
      </div>

      <div className="relative z-20 mx-auto mt-4 hidden w-full max-w-[230px] rounded-2xl border border-blue-300/20 bg-slate-950/82 p-4 shadow-2xl shadow-blue-950/45 backdrop-blur-xl sm:absolute sm:left-[255px] sm:top-24 sm:mx-0 sm:mt-0 sm:block">
        <div className="mb-3 flex items-center gap-2 border-b border-white/10 pb-3">
          <span className="size-2 rounded-full bg-blue-400" />
          <span className="text-xs font-bold text-blue-100">code.ts</span>
          <span className="ml-auto size-2 rounded-full bg-emerald-400" />
        </div>
        <pre className="font-mono text-[11px] font-semibold leading-5 text-slate-300">
          <code>
            <span className="text-blue-300">const</span>{" "}
            <span className="text-slate-50">developer</span>{" "}
            <span className="text-violet-300">=</span>{" "}
            <span className="text-slate-400">{"{"}</span>
            {"\n  "}
            <span className="text-orange-300">name</span>
            <span className="text-slate-400">:</span>{" "}
            <span className="text-emerald-300">{JSON.stringify(name)}</span>
            <span className="text-slate-400">,</span>
            {"\n  "}
            <span className="text-orange-300">stack</span>
            <span className="text-slate-400">:</span>{" "}
            <span className="text-slate-400">[</span>
            <span className="text-cyan-300">{'"TS"'}</span>
            <span className="text-slate-400">, </span>
            <span className="text-cyan-300">{'"Node.js"'}</span>
            <span className="text-slate-400">,</span>
            {"\n    "}
            <span className="text-cyan-300">{'"Python"'}</span>
            <span className="text-slate-400">, </span>
            <span className="text-cyan-300">{'"Java"'}</span>
            <span className="text-slate-400">],</span>
            {"\n  "}
            <span className="text-orange-300">status</span>
            <span className="text-slate-400">:</span>{" "}
            <span className="text-emerald-300">{'"available"'}</span>
            {"\n"}
            <span className="text-slate-400">{"}"}</span>
          </code>
        </pre>
      </div>
    </div>
  );
}
