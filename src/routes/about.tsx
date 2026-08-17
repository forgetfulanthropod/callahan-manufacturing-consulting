import { Link, createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { method, principals } from "@/content/team";
import { site } from "@/content/site";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <main>
      <PageIntro
        kicker="The practice"
        title="Callahan is a plant-floor firm."
        lede="We were built for the decade when every serious OEM is an EV OEM. The work is still manufacturing: yield, takt, leak, torque, software, and the people who run the night shift."
      />

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-12">
          <div className="overflow-hidden rounded-lg lg:col-span-6">
            <img
              src="/images/plant-walk.jpg"
              alt="Consultants walking an EV assembly aisle"
              className="aspect-[3/2] w-full object-cover"
            />
          </div>
          <div className="lg:col-span-6 lg:py-4">
            <p className="text-[0.72rem] uppercase tracking-[0.18em] text-muted">
              Why we exist
            </p>
            <p className="mt-4 text-base leading-relaxed">
              EV programs fail in familiar places: a leak tester that does not
              correlate, a hairpin weld that passes vision, a war room that is
              green while the last forty stations are red. The industry hired
              strategy firms for a factory problem. We are the other kind of
              firm.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Replace this section with your origin story — who founded
              Callahan, which plants you came from, and why the practice is
              independent of any OEM or equipment vendor.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">
                  Founded
                </dt>
                <dd className="mt-1 font-display text-2xl">{site.founded}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">
                  Headquarters
                </dt>
                <dd className="mt-1 font-display text-2xl">{site.hq}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <h2 className="font-display text-3xl tracking-tight">How we work</h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2">
            {method.map((m) => (
              <li
                key={m.step}
                className="rounded-lg border border-border bg-bg p-6"
              >
                <p className="font-mono text-xs text-muted">{m.step}</p>
                <h3 className="mt-3 font-display text-xl tracking-tight">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {m.copy}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="font-display text-3xl tracking-tight">Principals</h2>
            <p className="max-w-md text-sm text-muted">
              Placeholder cards. Put real names, bios, and headshots here —
              edit src/content/team.ts.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {principals.map((p) => (
              <article
                key={p.role}
                className="rounded-lg border border-border bg-surface p-6"
              >
                <p className="text-[0.68rem] uppercase tracking-[0.14em] text-muted">
                  {p.role}
                </p>
                <h3 className="mt-2 font-display text-2xl tracking-tight">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm text-steel">{p.focus}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {p.bio}
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.12em] text-muted">
                  {p.prior}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-bg-deep text-fg-on-ink">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-14 sm:flex-row sm:items-center sm:px-8">
          <div>
            <h2 className="font-display text-3xl tracking-tight">
              Bring us the station that is red.
            </h2>
            <p className="mt-2 text-sm text-muted-on-ink">{site.engagementNote}</p>
          </div>
          <Button asChild variant="inverse">
            <Link to="/contact">Start a program</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
