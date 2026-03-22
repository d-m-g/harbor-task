import { ctaBanner } from "../data/landingContent";
import { buttonClass } from "./ui/Button";

export function CtaBanner() {
  return (
    <section id="cta" className="px-8 pb-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-on-surface p-12 text-center lg:p-20">
        <div className="absolute right-0 top-0 h-64 w-64 bg-primary-container/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-64 w-64 bg-primary-container/10 blur-[100px]" />
        <div className="relative z-10 space-y-8">
          <h2 className="font-headline text-4xl font-black text-surface lg:text-6xl">
            {ctaBanner.title}
          </h2>
          <p className="mx-auto max-w-xl text-lg text-tertiary-fixed">
            {ctaBanner.body}
          </p>
          <a
            href="#cars"
            className={buttonClass(
              "primary",
              "inline-flex px-12 py-5 text-xl font-black shadow-[0_20px_40px_rgba(247,228,0,0.15)] hover:scale-105"
            )}
          >
            {ctaBanner.primaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}
