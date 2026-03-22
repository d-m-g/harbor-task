import { ctaBanner } from "../data/landingContent";
import { buttonClass } from "./ui/Button";

export function CtaBanner() {
  return (
    <div className="border-y border-beely-border bg-beely-secondary">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {ctaBanner.title}
          </h2>
          <p className="mt-2 text-neutral-300">{ctaBanner.body}</p>
        </div>
        <a
          href="#cars"
          className={buttonClass(
            "primary",
            "shrink-0 px-6 py-3 text-base"
          )}
        >
          {ctaBanner.primaryCta}
        </a>
      </div>
    </div>
  );
}
