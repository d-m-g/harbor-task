import { ctaBanner } from "../data/landingContent";
import { buttonClass } from "./ui/Button";

export function CtaBanner() {
  return (
    <section id="cta" className="bg-surface px-4 py-24 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-surface-container-high bg-surface-container-lowest p-10 text-center shadow-sm sm:p-14 lg:p-20">
        <div className="absolute right-0 top-0 h-48 w-48 bg-primary-container/15 blur-[80px]" />
        <div className="absolute bottom-0 left-0 h-48 w-48 bg-primary-container/10 blur-[80px]" />
        <div className="relative z-10 space-y-8">
          <h2 className="font-headline text-4xl font-black text-on-surface lg:text-6xl">
            {ctaBanner.title}
          </h2>
          <p className="mx-auto max-w-xl text-lg text-on-surface-variant">
            {ctaBanner.body}
          </p>
          <a
            href="#cars"
            className={buttonClass(
              "primary",
              "inline-flex px-12 py-5 text-xl font-black shadow-[0_12px_32px_rgba(247,228,0,0.25)] hover:scale-[1.02]"
            )}
          >
            {ctaBanner.primaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}
