import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  id,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  id?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-sage-dark">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="font-serif text-[32px] leading-[1.2] text-ink sm:text-[40px]"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-warmgray">{subtitle}</p>
      )}
    </div>
  );
}
