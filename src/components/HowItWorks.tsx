import { howItWorks } from "../data/landingContent";
import { Section } from "./layout/Section";

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-white">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-beely-secondary sm:text-4xl">
          {howItWorks.title}
        </h2>
      </div>
      <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
        {howItWorks.steps.map((s) => (
          <li key={s.step}>
            <div className="flex flex-col items-center text-center md:block md:text-left">
              <div className="flex items-center gap-4 md:block">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-beely-primary text-lg font-bold text-beely-secondary shadow-md">
                  {s.step}
                </span>
                <div className="md:mt-5">
                  <h3 className="text-lg font-semibold text-beely-secondary">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-beely-support md:max-w-none">
                    {s.body}
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
