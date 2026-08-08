import Image from "next/image";

import portrait from "@/app/images/photo_2025-11-14_22-31-06.jpg";

type HeroPortraitProps = {
  name: string;
};

export function HeroPortrait({ name }: HeroPortraitProps) {
  return (
    <div className="relative size-20 overflow-hidden rounded-full border border-blue-400/50 bg-slate-900 shadow-2xl shadow-blue-500/20">
      <Image
        src={portrait}
        alt={`${name} portrait`}
        fill
        priority
        sizes="80px"
        placeholder="blur"
        className="object-cover object-[50%_27%]"
      />
    </div>
  );
}
