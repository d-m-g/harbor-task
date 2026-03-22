import { howItWorks } from "../data/landingContent";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-black px-4 py-24 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="font-headline text-4xl font-black text-white">
            {howItWorks.title}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {howItWorks.steps.map((s) => (
            <div
              key={s.step}
              className="space-y-4 rounded-xl border border-white/10 bg-white/5 p-6 sm:p-8"
            >
              <div className="text-5xl font-black text-primary-container drop-shadow-sm">
                {s.step}
              </div>
              <h4 className="text-xl font-bold text-white">{s.title}</h4>
              <p className="text-sm leading-relaxed text-neutral-300">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
