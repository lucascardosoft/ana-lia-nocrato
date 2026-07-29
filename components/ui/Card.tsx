import { cn } from "@/lib/cn";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-ink/[0.06] bg-white p-7 shadow-soft transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:shadow-soft-lg",
        className
      )}
    >
      {children}
    </div>
  );
}
