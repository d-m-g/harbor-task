import { useState } from "react";
import { navLinks } from "../data/landingContent";
import { publicUrl } from "../utils/publicUrl";
import { Button } from "./ui/Button";
import { MaterialIcon } from "./ui/MaterialIcon";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="glass-nav fixed top-0 z-50 w-full border-b border-neutral-200/80 shadow-sm">
      <div className="mx-auto flex min-h-[3.75rem] max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-3.5 lg:px-8">
        <div className="flex items-center gap-6 sm:gap-8 lg:gap-12">
          <a href="#" className="flex shrink-0 items-center" aria-label="Wheely home">
            <img
              src={publicUrl("logos/wheely.png")}
              alt="Wheely"
              className="h-8 w-auto object-contain sm:h-9"
              width={160}
              height={40}
            />
          </a>
          <div className="hidden gap-6 md:flex lg:gap-8">
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

        <div className="flex items-center gap-3 sm:gap-6">
          <a href="#cars">
            <Button type="button" className="hidden px-5 py-2.5 sm:inline-flex">
              Browse Cars
            </Button>
          </a>

          <button
            type="button"
            className="group flex cursor-pointer items-center gap-2 rounded-lg p-1.5 text-neutral-700 transition-all hover:bg-neutral-100"
            aria-label="MyWheely account"
          >
            <MaterialIcon
              name="account_circle"
              className="text-neutral-600 group-hover:text-neutral-900"
            />
            <span className="hidden text-sm font-semibold sm:inline">
              MyWheely
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
          className="border-t border-neutral-200 bg-white/95 px-4 py-4 backdrop-blur-sm sm:px-6 md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg py-2.5 font-medium text-neutral-700 hover:bg-neutral-50"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#cars" onClick={() => setOpen(false)} className="pt-1">
              <Button type="button" className="w-full">
                Browse Cars
              </Button>
            </a>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
