import { brands } from "../data/landingContent";
import { BrandLogoMark } from "./BrandLogoMark";
import { Section } from "./layout/Section";

export function BrandGrid() {
  return (
    <Section id="cars" className="bg-beely-surface">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-beely-secondary sm:text-4xl">
          {brands.title}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-beely-support">
          {brands.subtitle}
        </p>
      </div>
      <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-5">
        {brands.items.map((item) => (
          <li key={item.id}>
            <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-beely-border bg-white px-4 py-6 shadow-sm transition-shadow hover:shadow-md">
              <BrandLogoMark brandId={item.id} />
              <span className="text-center text-xs font-semibold tracking-wide text-beely-support">
                {item.name}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
