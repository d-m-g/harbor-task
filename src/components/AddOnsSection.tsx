import { addOns } from "../data/landingContent";
import { Section } from "./layout/Section";

export function AddOnsSection() {
  return (
    <Section id="addons" className="bg-beely-surface">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-beely-secondary sm:text-4xl">
          {addOns.title}
        </h2>
        <p className="mt-3 text-lg text-beely-support">{addOns.subtitle}</p>
      </div>
      <ul className="mt-14 grid gap-5 md:grid-cols-3">
        {addOns.items.map((item) => (
          <li key={item.title}>
            <article className="h-full rounded-2xl border border-beely-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="text-lg font-semibold text-beely-secondary">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-beely-support">
                {item.body}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
