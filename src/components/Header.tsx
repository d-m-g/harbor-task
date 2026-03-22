import { useState } from "react";
import { headerCta, navLinks } from "../data/landingContent";
import { Button } from "./ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-beely-border bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-beely-secondary transition-opacity hover:opacity-80"
        >
          Beely
        </a>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-beely-support transition-colors hover:text-beely-secondary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button type="button">{headerCta}</Button>
        </div>

        <button
          type="button"
          className="inline-flex rounded-lg p-2 text-beely-support hover:bg-beely-border/50 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-beely-border bg-white px-4 py-4 md:hidden"
        >
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-2 py-2 text-sm font-medium text-beely-support hover:bg-beely-surface"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button type="button" className="mt-2 w-full">
              {headerCta}
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function IconMenu() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 6h16M4 12h16M4 18h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
