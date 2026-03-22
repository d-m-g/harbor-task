import type { ReactNode } from "react";
import { useRevealInView } from "../../hooks/useRevealInView";

type Props = {
  children: ReactNode;
  className?: string;
};

export function RevealOnScroll({ children, className = "" }: Props) {
  const { ref, visible } = useRevealInView();

  return (
    <div
      ref={ref}
      className={`reveal-on-scroll${visible ? " reveal-on-scroll--visible" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
