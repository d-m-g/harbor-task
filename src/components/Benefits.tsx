import { benefits } from "../data/landingContent";
import { Section } from "./layout/Section";

export function Benefits() {
  return (
    <Section className="bg-white">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-beely-secondary sm:text-4xl">
          {benefits.title}
        </h2>
        <p className="mt-3 text-lg text-beely-support">{benefits.subtitle}</p>
      </div>
      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.cards.map((card) => (
          <li key={card.title}>
            <article className="h-full rounded-2xl border border-beely-border bg-beely-surface/80 p-6 transition-shadow duration-200 hover:shadow-md">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-beely-primary/25 text-beely-secondary">
                <IconSpark />
              </div>
              <h3 className="text-lg font-semibold text-beely-secondary">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-beely-support">
                {card.body}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function IconSpark() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
