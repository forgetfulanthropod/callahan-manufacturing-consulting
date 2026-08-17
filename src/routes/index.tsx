import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { CaseCard } from "@/components/case-card";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/content/caseStudies";
import { problems } from "@/content/problems";
import { services } from "@/content/services";
import { site } from "@/content/site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const featured = caseStudies.slice(0, 3);
  const previewProblems = problems.slice(0, 8);

  return (
    <main>
      <section className="relative isolate min-h-[88dvh] overflow-hidden bg-bg-deep text-fg-on-ink">
        <img
          src="/images/hero-line.jpg"
          alt=""
          className="absolute inset-0 size-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-bg-deep/70 to-bg-deep/35" />
        <div className="relative mx-auto flex min-h-[88dvh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20">
          <p className="text-[0.72rem] uppercase tracking-[0.2em] text-muted-on-ink">
            {site.hq} · Est. {site.founded}
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl leading-[0.98] tracking-[var(--tracking-display)] sm:text-3xl">
            Plant-floor counsel for the OEMs building the next decade of EVs.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-on-ink sm:text-lg">
            {site.lede}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild variant="inverse" size="lg">
              <Link to="/contact">
                Start a program <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-fg-on-ink/25 text-fg-on-ink hover:bg-fg-on-ink/10">
              <Link to="/problems">Read the 100 problems</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-border sm:grid-cols-4">
          {site.stats.map((stat) => (
            <div key={stat.label} className="px-5 py-8 sm:px-8 sm:py-10">
              <p className="font-display text-3xl tracking-tight sm:text-2xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs leading-snug text-muted sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.18em] text-muted">
              Capabilities
            </p>
            <h2 className="mt-3 max-w-xl font-display text-3xl tracking-tight">
              From cell lot to curb.
            </h2>
          </div>
          <Link
            to="/capabilities"
            className="inline-flex items-center gap-1.5 text-sm text-steel hover:text-fg"
          >
            All capabilities <ArrowUpRight className="size-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {services.slice(0, 4).map((service) => (
            <Link
              key={service.slug}
              to="/capabilities"
              hash={service.slug}
              className="group overflow-hidden rounded-lg border border-border bg-surface"
            >
              <div className="aspect-[16/8] overflow-hidden">
                <img
                  src={service.image}
                  alt=""
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-display text-xl tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-[0.72rem] uppercase tracking-[0.18em] text-muted">
                Index
              </p>
              <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-tight">
                One hundred problems we are hired to close.
              </h2>
            </div>
            <Link
              to="/problems"
              className="inline-flex items-center gap-1.5 text-sm text-steel hover:text-fg"
            >
              Full index <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <ol className="mt-10 divide-y divide-border border-y border-border">
            {previewProblems.map((problem) => (
              <li key={problem.id}>
                <Link
                  to="/problems"
                  hash={`p-${problem.id}`}
                  className="grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 py-4 sm:grid-cols-[4rem_1fr_8rem]"
                >
                  <span className="font-mono text-xs tabular-nums text-muted">
                    {String(problem.id).padStart(2, "0")}
                  </span>
                  <span className="text-sm sm:text-base">{problem.title}</span>
                  <span className="hidden text-right text-xs uppercase tracking-[0.12em] text-muted sm:block">
                    {problem.category}
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.18em] text-muted">
              Selected work
            </p>
            <h2 className="mt-3 max-w-xl font-display text-3xl tracking-tight">
              Case studies. Names withheld until you say otherwise.
            </h2>
          </div>
          <Link
            to="/work"
            className="inline-flex items-center gap-1.5 text-sm text-steel hover:text-fg"
          >
            All studies <ArrowUpRight className="size-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {featured.map((study) => (
            <CaseCard key={study.slug} study={study} />
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-bg-deep text-fg-on-ink">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-[0.72rem] uppercase tracking-[0.18em] text-muted-on-ink">
              Clients
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight">
              Programs across the volume, premium, and new-energy OEMs.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-on-ink">
              {site.oemNote}
            </p>
          </div>
          <ul className="divide-y divide-border-ink lg:col-span-5">
            {site.clients.map((c) => (
              <li
                key={c.name}
                className="flex items-baseline justify-between gap-4 py-3.5 text-sm"
              >
                <span>{c.name}</span>
                <span className="text-right text-muted-on-ink">{c.role}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
