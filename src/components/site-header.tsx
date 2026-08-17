import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { nav, site } from "@/content/site";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const inverted = pathname === "/";

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b backdrop-blur-md",
        inverted
          ? "border-border-ink/80 bg-bg-deep/85 text-fg-on-ink"
          : "border-border/80 bg-bg/85 text-fg",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:h-[4.25rem] sm:px-8">
        <Link
          to="/"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span
            className={cn(
              "grid size-8 place-items-center rounded-[5px] border text-[0.7rem] font-medium tracking-[0.14em]",
              inverted
                ? "border-fg-on-ink/25 text-fg-on-ink"
                : "border-fg/20 text-fg",
            )}
            aria-hidden
          >
            C
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[1.15rem] tracking-[-0.03em]">
              Callahan
            </span>
            <span
              className={cn(
                "mt-0.5 hidden text-[0.62rem] uppercase tracking-[0.16em] sm:block",
                inverted ? "text-muted-on-ink" : "text-muted",
              )}
            >
              Manufacturing Consulting
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "text-[0.8rem] uppercase tracking-[0.14em] transition-opacity duration-150 hover:opacity-70",
                pathname.startsWith(item.to) ? "opacity-100" : "opacity-70",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            variant={inverted ? "inverse" : "default"}
            className="hidden sm:inline-flex"
          >
            <Link to="/contact">Start a program</Link>
          </Button>
          <button
            type="button"
            className={cn(
              "grid size-11 place-items-center rounded-sm lg:hidden",
              inverted ? "text-fg-on-ink" : "text-fg",
            )}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          className={cn(
            "border-t px-5 py-5 lg:hidden",
            inverted
              ? "border-border-ink bg-bg-deep"
              : "border-border bg-bg",
          )}
        >
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center font-display text-2xl tracking-tight"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 flex min-h-11 items-center text-sm uppercase tracking-[0.14em]"
            >
              Start a program — {site.email}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
