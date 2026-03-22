import type { BrandId } from "../data/landingContent";

/** Simple recreated marks for MVP placeholders — not official brand assets. */
type Props = {
  brandId: BrandId;
  className?: string;
};

export function BrandLogoMark({ brandId, className = "" }: Props) {
  const box = `h-12 w-12 shrink-0 text-beely-secondary ${className}`;
  switch (brandId) {
    case "volkswagen":
      return <VW className={box} />;
    case "toyota":
      return <Toyota className={box} />;
    case "bmw":
      return <BMW className={box} />;
    case "mercedes":
      return <Mercedes className={box} />;
    case "volvo":
      return <Volvo className={box} />;
    case "audi":
      return <Audi className={box} />;
    case "skoda":
      return <Skoda className={box} />;
    case "ford":
      return <Ford className={box} />;
  }
}

function VW({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" />
      <path
        d="M16 32 L24 14 L32 32 M19 26h10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Toyota({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <ellipse
        cx="24"
        cy="24"
        rx="18"
        ry="12"
        stroke="currentColor"
        strokeWidth="2"
      />
      <ellipse
        cx="24"
        cy="24"
        rx="11"
        ry="7"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <ellipse cx="24" cy="24" rx="4" ry="2.5" fill="currentColor" />
    </svg>
  );
}

function BMW({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" />
      <path d="M24 4v40M4 24h40" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function Mercedes({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <path
        d="M24 36 V12 M24 12 L10 30 M24 12 L38 30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Volvo({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="19" stroke="currentColor" strokeWidth="2" />
      <path
        d="M16 24h16M24 16v16"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Audi({ className }: { className: string }) {
  const centers = [11, 18, 25, 32];
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      {centers.map((cx) => (
        <circle
          key={cx}
          cx={cx}
          cy="24"
          r="5.5"
          stroke="currentColor"
          strokeWidth="1.75"
        />
      ))}
    </svg>
  );
}

function Skoda({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <path
        d="M10 34 L24 10 L38 34 M17 26h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Ford({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <ellipse
        cx="24"
        cy="26"
        rx="20"
        ry="12"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M14 22 Q24 12 34 22"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
