import { brands } from "../data/landingContent";
import { MaterialIcon } from "./ui/MaterialIcon";

export function BrandGrid() {
  return (
    <section id="cars" className="bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-white">
            {brands.title}
          </h2>
          <a
            href="#cars"
            className="flex items-center gap-1 font-bold text-primary-container hover:underline underline-offset-8"
          >
            {brands.browseLink}
            <MaterialIcon name="open_in_new" className="text-sm text-primary-container" />
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 lg:grid-cols-6">
          {brands.items.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-6 sm:p-8 grayscale transition-all hover:border-primary-container hover:bg-white/10 hover:grayscale-0"
            >
              <span className="text-center text-lg font-black text-neutral-400 sm:text-xl">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
