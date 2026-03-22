import { faqTeaser, footer } from "../data/landingContent";

export function Footer() {
  return (
    <footer className="border-t border-beely-border bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {footer.columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-beely-secondary">
                {col.title}
              </p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-beely-support transition-colors hover:text-beely-secondary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          id={faqTeaser.id}
          className="mt-14 border-t border-beely-border pt-12 scroll-mt-20"
        >
          <h2 className="text-xl font-bold tracking-tight text-beely-secondary sm:text-2xl">
            {faqTeaser.title}
          </h2>
          <ul className="mt-8 space-y-8">
            {faqTeaser.items.map((item) => (
              <li key={item.q}>
                <h3 className="font-semibold text-beely-secondary">{item.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-beely-support">
                  {item.a}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-12 border-t border-beely-border pt-8 text-center text-sm text-beely-support/75">
          {footer.legal}
        </p>
      </div>
    </footer>
  );
}
