import { includedServices } from "../data/landingContent";
import { MaterialIcon } from "./ui/MaterialIcon";

export function IncludedServices() {
  return (
    <section id="included" className="bg-surface px-8 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-headline mb-12 text-3xl font-black">
          {includedServices.title}
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {includedServices.items.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-4 rounded-xl bg-surface-container-low p-6 text-center"
            >
              <MaterialIcon name={item.icon} className="text-4xl text-primary" />
              <span className="text-sm font-bold uppercase tracking-wider">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
