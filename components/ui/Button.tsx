import { cn } from "@/lib/cn";
import { MessageCircle } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "inverse";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-sage-dark text-white hover:opacity-90 shadow-soft hover:shadow-soft-lg",
  secondary:
    "bg-transparent text-ink border border-ink/15 hover:border-ink/30 hover:bg-white",
  ghost: "bg-transparent text-sage-dark hover:bg-sage-light",
  inverse:
    "bg-white text-sage-dark hover:opacity-90 shadow-soft hover:shadow-soft-lg",
};

type CommonProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
  withWhatsappIcon?: boolean;
};

type AnchorProps = CommonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type NativeButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button(props: AnchorProps | NativeButtonProps) {
  const { variant = "primary", className, children, withWhatsappIcon, ...rest } = props;

  const base = cn(
    "inline-flex items-center justify-center gap-2 rounded-pill px-6 py-3.5 text-[15px] font-medium",
    "transition-all duration-200 ease-out active:scale-[0.98]",
    "focus-visible:outline-2 focus-visible:outline-sage-dark focus-visible:outline-offset-2",
    variantClasses[variant],
    className
  );

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={base} {...anchorRest}>
        {withWhatsappIcon && <MessageCircle className="size-[18px]" strokeWidth={2} aria-hidden />}
        {children}
      </a>
    );
  }

  return (
    <button className={base} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {withWhatsappIcon && <MessageCircle className="size-[18px]" strokeWidth={2} aria-hidden />}
      {children}
    </button>
  );
}
