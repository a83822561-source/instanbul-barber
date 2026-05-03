export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  const alignment =
    align === "center" ? "text-center mx-auto" : "text-left mr-auto";
  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className="text-xs sm:text-sm tracking-[0.3em] text-gold uppercase mb-4">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-neutral-400 text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
