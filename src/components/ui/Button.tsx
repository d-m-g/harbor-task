import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-beely-primary text-beely-secondary shadow-sm hover:bg-beely-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-beely-secondary",
  secondary:
    "bg-white text-beely-secondary ring-1 ring-inset ring-beely-border hover:bg-beely-surface",
  ghost:
    "text-beely-support hover:bg-beely-border/40",
};

const baseClass =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200";

export function buttonClass(
  variant: ButtonVariant = "primary",
  className = ""
) {
  return `${baseClass} ${variants[variant]} ${className}`;
}

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

export function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...rest
}: Props) {
  return (
    <button type={type} className={buttonClass(variant, className)} {...rest}>
      {children}
    </button>
  );
}
