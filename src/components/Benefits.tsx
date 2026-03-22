import { stitchBenefits } from "../data/landingContent";
import { MaterialIcon } from "./ui/MaterialIcon";

export function Benefits() {
  return (
    <section id="benefits" className="px-8 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {stitchBenefits.cards.map((card) => (
            <div
              key={card.title}
              className="space-y-4 rounded-xl bg-surface-container-lowest p-10 transition-all hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-container">
                <MaterialIcon
                  name={card.icon}
                  className="text-on-primary-fixed"
                />
              </div>
              <h3 className="font-headline text-2xl font-bold">{card.title}</h3>
              <p className="leading-relaxed text-on-surface-variant">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
