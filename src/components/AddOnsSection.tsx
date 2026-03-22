import { addOns, stitchImages } from "../data/landingContent";
import { MaterialIcon } from "./ui/MaterialIcon";

export function AddOnsSection() {
  return (
    <section id="addons" className="overflow-hidden bg-surface px-8 py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row">
        <div className="space-y-8 lg:w-1/2">
          <h2 className="font-headline text-4xl font-black">{addOns.title}</h2>
          <p className="text-lg leading-relaxed text-on-surface-variant">
            {addOns.intro}
          </p>
          <div className="space-y-4">
            {addOns.items.map((item) => (
              <div
                key={item.title}
                className={`flex items-center gap-4 rounded-xl bg-surface-container-low p-6 ${
                  item.accent ? "border-l-4 border-primary-container" : ""
                }`}
              >
                <MaterialIcon name={item.icon} className="text-3xl text-primary" />
                <div>
                  <h5 className="font-bold">{item.title}</h5>
                  <p className="text-sm text-on-surface-variant">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative lg:w-1/2">
          <div className="relative flex h-96 w-full items-center justify-center overflow-hidden rounded-xl bg-surface-container-highest">
            <img
              src={stitchImages.addOnInterior}
              alt="Luxury car interior dashboard"
              className="h-full w-full rounded-xl object-cover opacity-80"
            />
            <div className="absolute bottom-8 right-8 flex items-center gap-3 rounded-xl bg-surface p-4 shadow-2xl">
              <span className="h-3 w-3 animate-pulse rounded-full bg-green-500" />
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface">
                {addOns.availabilityBadge}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
