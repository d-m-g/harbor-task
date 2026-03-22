import { comparison } from "../data/landingContent";
import { Section } from "./layout/Section";

export function ComparisonSection() {
  return (
    <Section className="bg-beely-surface">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-beely-secondary sm:text-4xl">
          {comparison.title}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-beely-support">
          {comparison.intro}
        </p>
      </div>
      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {comparison.columns.map((col) => (
          <article
            key={col.label}
            className={`rounded-2xl border p-6 transition-shadow duration-200 hover:shadow-md ${
              col.highlight
                ? "border-beely-primary bg-white shadow-md ring-2 ring-beely-primary"
                : "border-beely-border bg-white"
            }`}
          >
            <h3 className="text-lg font-semibold text-beely-secondary">
              {col.label}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-beely-support">
              {col.points.map((p) => (
                <li key={p} className="flex gap-2">
                  <span
                    className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                      col.highlight ? "bg-beely-primary" : "bg-neutral-400"
                    }`}
                    aria-hidden
                  />
                  {p}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
