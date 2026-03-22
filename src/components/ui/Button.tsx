import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-container text-on-primary-fixed shadow-sm hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-surface",
  secondary:
    "bg-surface-container-highest text-on-surface hover:bg-surface-container-high",
  ghost: "text-on-surface-variant hover:bg-surface-container-low",
};

const baseClass =
  "inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-bold transition-all active:scale-95";

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
