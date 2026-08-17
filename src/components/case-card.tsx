import { Link } from "@tanstack/react-router";
import type { CaseStudy } from "@/content/caseStudies";

export function CaseCard({ study, featured = false }: { study: CaseStudy; featured?: boolean }) {
  return (
    <Link
      to="/work/$slug"
      params={{ slug: study.slug }}
      className="group block overflow-hidden rounded-lg border border-border bg-surface transition-[border-color,transform] duration-200 ease-[var(--ease-out)] hover:border-fg/25"
    >
      <div className={featured ? "aspect-[16/9] overflow-hidden" : "aspect-[3/2] overflow-hidden"}>
        <img
          src={study.image}
          alt=""
          className="size-full object-cover transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-5 sm:p-6">
        <p className="text-[0.68rem] uppercase tracking-[0.16em] text-muted">
          {study.category} · {study.year}
        </p>
        <h3 className="mt-2 font-display text-xl leading-snug tracking-tight text-fg sm:text-2xl">
          {study.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{study.summary}</p>
        <p className="mt-4 text-xs uppercase tracking-[0.14em] text-steel">
          {study.disclosed ? study.client : `${study.client} · unnamed`}
        </p>
      </div>
    </Link>
  );
}
