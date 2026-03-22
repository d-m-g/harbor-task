import { includedServices, stitchBenefits } from "../data/landingContent";
import { MaterialIcon } from "./ui/MaterialIcon";

/**
 * Combines the three “fixed monthly payment” style benefit cards with the
 * five “no hidden costs” service tiles. Section title is “No hidden costs. Ever.”
 */
export function NoHiddenBenefitsSection() {
  return (
    <section id="included" className="bg-surface px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-headline mb-14 text-3xl font-black text-on-surface sm:mb-16 sm:text-4xl">
          {includedServices.title}
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-8">
          {stitchBenefits.cards.map((card) => (
            <div
              key={card.title}
              className="space-y-4 rounded-xl bg-surface-container-lowest p-8 shadow-sm transition-all hover:shadow-md sm:p-10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-container">
                <MaterialIcon
                  name={card.icon}
                  className="text-on-primary-fixed"
                />
              </div>
              <h3 className="font-headline text-xl font-bold text-on-surface sm:text-2xl">
                {card.title}
              </h3>
              <p className="leading-relaxed text-on-surface-variant">
                {card.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:mt-20 md:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {includedServices.items.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-4 rounded-xl bg-surface-container-low p-6 text-center"
            >
              <MaterialIcon name={item.icon} className="text-4xl text-primary" />
              <span className="text-xs font-bold uppercase tracking-wider text-on-surface sm:text-sm">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
