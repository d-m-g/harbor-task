import { useState } from "react";
import { navLinks } from "../data/landingContent";
import { Button } from "./ui/Button";
import { MaterialIcon } from "./ui/MaterialIcon";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="glass-nav fixed top-0 z-50 w-full shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-8 py-4">
        <div className="flex items-center gap-8 lg:gap-12">
          <a
            href="#"
            className="text-2xl font-black tracking-tighter text-neutral-900"
          >
            Beely
          </a>
          <div className="hidden gap-8 md:flex">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className={
                  i === 0
                    ? "border-b-2 border-primary-container py-1 font-bold text-neutral-900 transition-all"
                    : "py-1 text-neutral-500 transition-colors hover:text-primary-container"
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden items-center gap-2 rounded-full bg-surface-container-high px-4 py-2 lg:flex">
            <MaterialIcon
              name="search"
              className="text-sm text-on-surface-variant"
            />
            <input
              type="search"
              placeholder="Search brands..."
              className="w-40 border-none bg-transparent text-sm focus:ring-0"
              aria-label="Search brands"
            />
          </div>

          <a href="#cars">
            <Button
              type="button"
              className="hidden px-6 py-2.5 sm:inline-flex"
            >
              Browse Cars
            </Button>
          </a>

          <button
            type="button"
            className="group flex cursor-pointer items-center gap-2 rounded-lg p-1 transition-all hover:bg-neutral-100"
            aria-label="MyBeely account"
          >
            <MaterialIcon
              name="account_circle"
              className="text-neutral-600 group-hover:text-neutral-900"
            />
            <span className="hidden text-sm font-semibold sm:inline">
              MyBeely
            </span>
          </button>

          <button
            type="button"
            className="inline-flex rounded-lg p-2 text-neutral-700 hover:bg-neutral-100 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <MaterialIcon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-neutral-200 bg-white px-8 py-4 md:hidden"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg py-2 font-medium text-neutral-700 hover:bg-neutral-50"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#cars" onClick={() => setOpen(false)}>
              <Button type="button" className="mt-2 w-full">
                Browse Cars
              </Button>
            </a>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
