import { cn } from "@/lib/cn";

export function Badge({
  children,
  className,
  tone = "sage",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "sage" | "terracotta" | "neutral";
}) {
  const toneClasses = {
    sage: "bg-sage-light text-sage-dark",
    terracotta: "bg-terracotta-light text-terracotta-dark",
    neutral: "bg-sand text-ink-soft",
  }[tone];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-pill px-3.5 py-1.5 text-[13px] font-medium tracking-wide",
        toneClasses,
        className
      )}
    >
      {children}
    </span>
  );
}
