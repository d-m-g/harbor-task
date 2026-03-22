import { hero } from "../data/landingContent";
import { Button, buttonClass } from "./ui/Button";

export function Hero() {
  return (
    <div className="border-b border-beely-border bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:py-24">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-beely-secondary">
            Car subscription
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-beely-secondary sm:text-5xl lg:text-[3.25rem] lg:leading-tight">
            {hero.headline}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-beely-support">
            {hero.subheadline}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#cars" className={buttonClass("primary")}>
              {hero.primaryCta}
            </a>
            <Button type="button" variant="secondary">
              {hero.secondaryCta}
            </Button>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-beely-support">
            {hero.trustBadges.map((badge) => (
              <li key={badge} className="flex items-center gap-2">
                <span
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-beely-primary/35 text-beely-secondary"
                  aria-hidden
                >
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                    <path
                      d="M1 5l3.5 3.5L11 1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {badge}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-100 via-beely-surface to-beely-primary/20 ring-1 ring-beely-border"
          aria-hidden
        >
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <CarIllustration className="h-auto w-full max-w-md text-neutral-300" />
          </div>
          <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-4 shadow-lg ring-1 ring-beely-border backdrop-blur-sm">
            <p className="text-xs font-medium uppercase tracking-wide text-beely-support/70">
              Example price
            </p>
            <p className="mt-1 text-2xl font-bold text-beely-secondary">
              from €449 / mo
            </p>
            <p className="mt-0.5 text-sm text-beely-support">
              Includes servicing and inspections (example)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CarIllustration({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="200" cy="160" rx="160" ry="12" fill="currentColor" opacity="0.35" />
      <path
        d="M60 120c0-20 25-40 80-45h120c55 5 80 25 80 45v25H60v-25z"
        fill="currentColor"
        opacity="0.5"
      />
      <path
        d="M85 115c8-35 45-55 115-55s107 20 115 55"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.6"
      />
      <circle cx="115" cy="145" r="22" fill="white" stroke="currentColor" strokeWidth="3" />
      <circle cx="285" cy="145" r="22" fill="white" stroke="currentColor" strokeWidth="3" />
      <rect x="130" y="88" width="140" height="38" rx="6" fill="currentColor" opacity="0.25" />
    </svg>
  );
}
