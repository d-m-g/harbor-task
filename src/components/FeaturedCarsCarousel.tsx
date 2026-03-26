import { useRef } from "react";
import { featuredCars } from "../data/landingContent";
import { MaterialIcon } from "./ui/MaterialIcon";

export function FeaturedCarsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (direction: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.82;
    el.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-surface px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-headline text-3xl font-black text-on-surface sm:text-4xl">
              {featuredCars.title}
            </h2>
            <p className="mt-2 text-sm text-on-surface-variant sm:text-base">
              {featuredCars.subtitle}
            </p>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              aria-label="Previous cars"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-700 transition-colors hover:border-primary-container hover:text-on-surface"
              onClick={() => scrollByAmount("left")}
            >
              <MaterialIcon name="chevron_left" />
            </button>
            <button
              type="button"
              aria-label="Next cars"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-700 transition-colors hover:border-primary-container hover:text-on-surface"
              onClick={() => scrollByAmount("right")}
            >
              <MaterialIcon name="chevron_right" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {featuredCars.items.map((car) => (
            <article
              key={car.name}
              className="group relative min-w-[84%] snap-start overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all hover:shadow-lg sm:min-w-[55%] lg:min-w-[32%]"
            >
              <img
                src={car.image}
                alt={car.name}
                className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
              {car.specialOffer ? (
                <span className="absolute left-3 top-3 rounded-full bg-primary-container px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.08em] text-on-primary-fixed">
                  Special Offer
                </span>
              ) : null}
              <div className="space-y-2 p-5">
                <h3 className="text-xl font-black text-on-surface">{car.name}</h3>
                <p className="text-sm font-bold text-on-surface-variant">
                  {car.priceLabel}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
