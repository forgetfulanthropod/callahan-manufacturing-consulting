import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageIntro } from "@/components/site-shell";
import { Input } from "@/components/ui/input";
import {
  problemCategories,
  problems,
  type ProblemCategory,
} from "@/content/problems";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/problems")({ component: ProblemsPage });

type Filter = ProblemCategory | "All";

function ProblemsPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("All");

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return problems.filter((p) => {
      const catOk = filter === "All" || p.category === filter;
      if (!catOk) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.typicalOwner.toLowerCase().includes(q) ||
        String(p.id) === q
      );
    });
  }, [query, filter]);

  return (
    <main>
      <PageIntro
        kicker="Index · 100"
        title="The problems we are actually hired to close."
        lede="A working index of the recurring plant issues we staff — battery through sustainability. Search it, filter it, then replace any line with your own language."
      />

      <div className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-5 sm:px-8">
          <Input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search yield, HVIL, launch, IRA…"
            aria-label="Search problems"
          />
          <div className="flex flex-nowrap gap-2 overflow-x-auto pb-1">
            {(["All", ...problemCategories] as Filter[]).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={cn(
                  "h-9 shrink-0 rounded-full border px-3.5 text-xs uppercase tracking-[0.12em] transition-colors duration-150",
                  filter === cat
                    ? "border-fg bg-fg text-fg-on-ink"
                    : "border-border bg-bg text-muted hover:border-fg/30 hover:text-fg",
                )}
              >
                {cat}
              </button>
            ))}
          </div>
          <p className="text-xs text-muted">
            Showing {list.length} of {problems.length}
          </p>
        </div>
      </div>

      <ol className="mx-auto max-w-6xl px-5 sm:px-8">
        {list.map((problem) => (
          <li
            key={problem.id}
            id={`p-${problem.id}`}
            className="scroll-mt-28 border-b border-border py-8 sm:grid sm:grid-cols-[4.5rem_1fr] sm:gap-8 sm:py-10"
          >
            <p className="font-mono text-sm tabular-nums text-muted">
              {String(problem.id).padStart(3, "0")}
            </p>
            <div>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h2 className="font-display text-xl tracking-tight sm:text-2xl">
                  {problem.title}
                </h2>
                <span className="text-[0.68rem] uppercase tracking-[0.14em] text-muted">
                  {problem.category}
                </span>
              </div>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
                {problem.summary}
              </p>
              <p className="mt-3 text-xs text-steel">
                Typical owner — {problem.typicalOwner}
              </p>
            </div>
          </li>
        ))}
        {list.length === 0 ? (
          <li className="py-16 text-sm text-muted">
            No problems match that search. Clear the filter or try another term.
          </li>
        ) : null}
      </ol>
    </main>
  );
}
