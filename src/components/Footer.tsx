import { useState } from "react";
import { footer } from "../data/landingContent";
import { MaterialIcon } from "./ui/MaterialIcon";

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="mt-20 border-t border-white/10 bg-beely-support px-8 py-16 text-neutral-200">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-4">
        <div className="space-y-6">
          <span className="text-xl font-black text-white">Beely</span>
          <p className="text-sm leading-relaxed text-neutral-300">
            {footer.blurb}
          </p>
          <div className="flex gap-4">
            <MaterialIcon
              name="public"
              className="cursor-pointer text-neutral-400 transition-colors hover:text-primary-container"
            />
            <MaterialIcon
              name="share"
              className="cursor-pointer text-neutral-400 transition-colors hover:text-primary-container"
            />
          </div>
        </div>

        {footer.columns.map((col) =>
          "newsletter" in col && col.newsletter ? (
            <div key={col.title} className="space-y-4">
              <h5 className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                {col.title}
              </h5>
              <p className="text-sm text-neutral-300">{col.body}</p>
              <form
                className="flex rounded-lg border border-white/15 bg-white/5 p-1"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-grow border-none bg-transparent px-3 text-sm text-white placeholder:text-neutral-500 focus:ring-0"
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="rounded-md bg-primary-container px-4 py-2 text-xs font-bold text-on-primary-fixed"
                >
                  Join
                </button>
              </form>
            </div>
          ) : (
            <div
              key={col.title}
              id={"id" in col ? col.id : undefined}
              className="space-y-4"
            >
              <h5 className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                {col.title}
              </h5>
              <ul className="space-y-2 text-neutral-300">
                {"links" in col &&
                  col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="transition-colors hover:text-primary-container"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          )
        )}
      </div>
      <div className="mx-auto mt-16 max-w-7xl border-t border-white/10 pt-8">
        <p className="text-center text-xs text-neutral-500">{footer.legal}</p>
      </div>
    </footer>
  );
}
