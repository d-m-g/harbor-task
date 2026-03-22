import { includedServices } from "../data/landingContent";
import { Section } from "./layout/Section";

const icons = [IconWrench, IconShield, IconCheck, IconTire, IconPhone];

export function IncludedServices() {
  return (
    <Section id="services" className="bg-white">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-beely-secondary sm:text-4xl">
          {includedServices.title}
        </h2>
        <p className="mt-3 text-lg text-beely-support">
          {includedServices.subtitle}
        </p>
      </div>
      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {includedServices.items.map((item, i) => {
          const Icon = icons[i % icons.length];
          return (
            <li key={item.title}>
              <article className="flex h-full gap-4 rounded-2xl border border-beely-border bg-beely-surface/50 p-5 transition-colors hover:border-beely-support/30">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-beely-secondary shadow-sm ring-1 ring-beely-border">
                  <Icon />
                </div>
                <div>
                  <h3 className="font-semibold text-beely-secondary">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-beely-support">
                    {item.body}
                  </p>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

function IconWrench() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconShield() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconTire() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 3v2M12 19v2M3 12h2M19 12h2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
