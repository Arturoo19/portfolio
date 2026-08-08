type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <span className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-400">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-serif text-4xl font-semibold text-white sm:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-8 text-slate-400">{description}</p>
      ) : null}
    </div>
  );
}
