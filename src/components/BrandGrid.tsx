import { brands } from "../data/landingContent";
import { MaterialIcon } from "./ui/MaterialIcon";

export function BrandGrid() {
  return (
    <section id="cars" className="bg-surface-container-low py-20">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="font-headline text-3xl font-bold tracking-tight">
            {brands.title}
          </h2>
          <a
            href="#cars"
            className="flex items-center gap-1 font-bold text-primary hover:underline underline-offset-8"
          >
            {brands.browseLink}
            <MaterialIcon name="open_in_new" className="text-sm" />
          </a>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
          {brands.items.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center rounded-xl border border-transparent bg-surface-container-lowest p-8 grayscale transition-all hover:border-primary-container hover:grayscale-0"
            >
              <span className="text-xl font-black opacity-30">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
