import type { ReactNode } from "react";

type Props = {
  id?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
};

export function Section({
  id,
  children,
  className = "",
  innerClassName = "",
}: Props) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-16 sm:py-20 lg:py-24 ${className}`}
    >
      <div className={`mx-auto max-w-7xl px-8 ${innerClassName}`}>
        {children}
      </div>
    </section>
  );
}
