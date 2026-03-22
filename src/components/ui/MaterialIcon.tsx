type Props = {
  name: string;
  className?: string;
  /** When false, hide from assistive tech (decorative) */
  decorative?: boolean;
};

export function MaterialIcon({
  name,
  className = "",
  decorative = true,
}: Props) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      aria-hidden={decorative ? true : undefined}
    >
      {name}
    </span>
  );
}
