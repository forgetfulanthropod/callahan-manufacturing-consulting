import type { ReactNode } from "react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-bg text-fg">
      <SiteHeader />
      <div className="flex-1">{children}</div>
      <SiteFooter />
    </div>
  );
}

export function PageIntro({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <p className="text-[0.72rem] uppercase tracking-[0.18em] text-muted">
          {kicker}
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[var(--leading-tight)] tracking-[var(--tracking-display)] text-fg sm:text-3xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
          {lede}
        </p>
      </div>
    </header>
  );
}
