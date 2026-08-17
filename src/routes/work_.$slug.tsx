import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { caseStudies, getCaseStudy } from "@/content/caseStudies";
import { problems } from "@/content/problems";

export const Route = createFileRoute("/work_/$slug")({
  loader: ({ params }) => {
    const study = getCaseStudy(params.slug);
    if (!study) throw notFound();
    return study;
  },
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const study = Route.useLoaderData();
  const related = problems.filter((p) => study.problemsSolved.includes(p.id));
  const others = caseStudies.filter((c) => c.slug !== study.slug).slice(0, 2);

  return (
    <main>
      <article>
        <div className="relative isolate min-h-[52dvh] overflow-hidden bg-bg-deep text-fg-on-ink">
          <img
            src={study.image}
            alt=""
            className="absolute inset-0 size-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-bg-deep/65 to-bg-deep/30" />
          <div className="relative mx-auto flex min-h-[52dvh] max-w-6xl flex-col justify-end px-5 pb-12 pt-20 sm:px-8">
            <Link
              to="/work"
              className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted-on-ink hover:text-fg-on-ink"
            >
              <ArrowLeft className="size-3.5" /> All studies
            </Link>
            <p className="text-[0.72rem] uppercase tracking-[0.18em] text-muted-on-ink">
              {study.category} · {study.location} · {study.year}
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-3xl leading-[1.05] tracking-tight sm:text-3xl">
              {study.title}
            </h1>
            <p className="mt-4 text-sm text-muted-on-ink">
              {study.disclosed ? study.client : `${study.client} · name withheld`}
              {" · "}
              {study.duration}
            </p>
          </div>
        </div>

        <div className="border-b border-border bg-surface">
          <dl className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {study.metrics.map((m) => (
              <div key={m.label} className="px-5 py-8 sm:px-8">
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">
                  {m.label}
                </dt>
                <dd className="mt-2 font-display text-3xl tracking-tight">
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-12">
          <div className="space-y-10 lg:col-span-8">
            <section>
              <h2 className="text-[0.72rem] uppercase tracking-[0.18em] text-muted">
                Situation
              </h2>
              <p className="mt-3 text-base leading-relaxed text-fg">{study.situation}</p>
            </section>
            <section>
              <h2 className="text-[0.72rem] uppercase tracking-[0.18em] text-muted">
                Approach
              </h2>
              <p className="mt-3 text-base leading-relaxed text-fg">{study.approach}</p>
            </section>
            <section>
              <h2 className="text-[0.72rem] uppercase tracking-[0.18em] text-muted">
                Result
              </h2>
              <p className="mt-3 text-base leading-relaxed text-fg">{study.result}</p>
            </section>
          </div>
          <aside className="lg:col-span-4">
            <div className="rounded-lg border border-border bg-surface p-6">
              <p className="text-[0.72rem] uppercase tracking-[0.16em] text-muted">
                Problems closed
              </p>
              <ul className="mt-4 space-y-3">
                {related.map((p) => (
                  <li key={p.id}>
                    <Link
                      to="/problems"
                      hash={`p-${p.id}`}
                      className="text-sm leading-snug hover:text-steel"
                    >
                      <span className="font-mono text-xs text-muted">
                        {String(p.id).padStart(3, "0")}
                      </span>{" "}
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </article>

      {others.length ? (
        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
            <h2 className="font-display text-2xl tracking-tight">Further reading</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {others.map((c) => (
                <Link
                  key={c.slug}
                  to="/work/$slug"
                  params={{ slug: c.slug }}
                  className="group overflow-hidden rounded-lg border border-border bg-surface"
                >
                  <div className="aspect-[16/8] overflow-hidden">
                    <img
                      src={c.image}
                      alt=""
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-[0.68rem] uppercase tracking-[0.14em] text-muted">
                      {c.category}
                    </p>
                    <p className="mt-2 font-display text-xl tracking-tight">{c.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
