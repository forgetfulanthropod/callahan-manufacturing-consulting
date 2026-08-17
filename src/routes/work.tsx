import { createFileRoute } from "@tanstack/react-router";
import { CaseCard } from "@/components/case-card";
import { PageIntro } from "@/components/site-shell";
import { caseStudies } from "@/content/caseStudies";

export const Route = createFileRoute("/work")({ component: WorkPage });

function WorkPage() {
  return (
    <main>
      <PageIntro
        kicker="Case studies"
        title="What changed on the floor."
        lede="Eight representative programs. Client names are withheld until you approve disclosure — swap them in src/content/caseStudies.ts and drop your own photography in public/images."
      />
      <div className="mx-auto grid max-w-6xl gap-5 px-5 py-12 sm:px-8 sm:py-16 md:grid-cols-2">
        {caseStudies.map((study, i) => (
          <CaseCard key={study.slug} study={study} featured={i === 0} />
        ))}
      </div>
    </main>
  );
}
