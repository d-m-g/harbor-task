import { hero, stitchImages } from "../data/landingContent";
import { buttonClass } from "./ui/Button";
import { MaterialIcon } from "./ui/MaterialIcon";

export function Hero() {
  return (
    <section className="relative flex min-h-[640px] items-center overflow-hidden bg-surface px-8 pt-28 lg:min-h-[870px] lg:px-24">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="z-10 space-y-8 lg:col-span-6">
          <h1 className="font-headline text-5xl font-black leading-[1.1] tracking-tighter text-on-surface lg:text-7xl">
            {hero.headlineBefore}
            <span className="bg-on-surface px-2 text-primary-container">
              {hero.headlineHighlight}
            </span>
            {hero.headlineAfter}
          </h1>
          <p className="max-w-lg text-xl leading-relaxed text-on-surface-variant">
            {hero.subheadline}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#cars"
              className={buttonClass(
                "primary",
                "gap-2 px-8 py-4 text-lg font-black shadow-lg hover:shadow-xl"
              )}
            >
              {hero.primaryCta}
              <MaterialIcon name="arrow_forward" />
            </a>
            <a
              href="#how-it-works"
              className={buttonClass(
                "secondary",
                "px-8 py-4 text-lg font-bold"
              )}
            >
              {hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="relative hidden h-[400px] lg:col-span-6 lg:block lg:h-[600px]">
          <div className="absolute inset-0 scale-95 rotate-3 rounded-[3rem] bg-primary-container opacity-20" />
          <img
            src={stitchImages.heroCar}
            alt="Modern luxury car front view"
            className="absolute inset-0 z-0 h-full w-full rounded-xl object-cover shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
}
