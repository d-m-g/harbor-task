import { lazy, Suspense } from "react";
import { hero } from "../data/landingContent";
import { buttonClass } from "./ui/Button";
import { MaterialIcon } from "./ui/MaterialIcon";

const HeroCarModel = lazy(() =>
  import("./HeroCarModel").then((m) => ({ default: m.HeroCarModel }))
);

export function Hero() {
  return (
    <section className="relative flex min-h-[640px] items-center overflow-hidden bg-surface px-8 pt-10 pb-20 lg:min-h-[870px] lg:px-24 lg:pt-14 lg:pb-24">
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

        <div className="relative mt-2 h-[320px] lg:col-span-6 lg:mt-0 lg:h-[600px]">
          <div className="absolute inset-0 scale-95 rotate-3 rounded-[3rem] bg-primary-container opacity-20" />
          <div className="absolute right-4 top-4 z-20 rounded-full bg-primary-container px-5 py-3 text-sm text-on-primary-fixed shadow-lg ring-1 ring-black/10 lg:right-5 lg:top-5 lg:px-7 lg:py-4 lg:text-base">
            <span className="font-semibold">From </span>
            <span className="text-xl font-black"> 343€ </span>
            <span className="font-semibold">/mo</span>
          </div>
          <div className="animate-pulse absolute bottom-16 right-3 z-20 -rotate-6 rounded-full bg-gradient-to-r from-red-600 via-pink-600 to-orange-500 px-5 py-2 text-xs font-black uppercase tracking-[0.12em] text-white shadow-[0_0_28px_rgba(236,72,153,0.65)] ring-2 ring-white/70 lg:bottom-18 lg:right-4 lg:px-7 lg:py-3 lg:text-base">
            Special Offer
          </div>
          <Suspense
            fallback={
              <div className="absolute inset-0 z-0 grid place-items-center rounded-xl bg-neutral-100 text-neutral-500">
                Loading 3D model...
              </div>
            }
          >
            <HeroCarModel />
          </Suspense>
          <p className="absolute bottom-3 left-3 right-3 z-10 rounded-md bg-white/85 px-2.5 py-2 text-[10px] leading-snug text-neutral-700 backdrop-blur-sm lg:bottom-4 lg:left-4 lg:right-4 lg:px-3 lg:text-xs">
            3D model: 2020 Skoda Kamiq GT by Ddiaz Design (
            <a
              href="https://skfb.ly/psyUV"
              className="underline underline-offset-2 hover:text-neutral-900"
              target="_blank"
              rel="noreferrer"
            >
              Sketchfab
            </a>
            ), licensed under{" "}
            <a
              href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
              className="underline underline-offset-2 hover:text-neutral-900"
              target="_blank"
              rel="noreferrer"
            >
              CC BY-NC-SA 4.0
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
