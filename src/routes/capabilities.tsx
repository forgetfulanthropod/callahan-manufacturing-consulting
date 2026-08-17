import { Link, createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { services } from "@/content/services";

export const Route = createFileRoute("/capabilities")({
  component: CapabilitiesPage,
});

function CapabilitiesPage() {
  return (
    <main>
      <PageIntro
        kicker="Capabilities"
        title="We staff the line, not the slide."
        lede="Eight practices. The same people write the standard and stand next to the station until second shift can hold it."
      />
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-16">
        <div className="space-y-20">
          {services.map((service, i) => {
            const Icon = service.icon;
            const reverse = i % 2 === 1;
            return (
              <section
                key={service.slug}
                id={service.slug}
                className="scroll-mt-28 grid items-center gap-8 lg:grid-cols-12 lg:gap-12"
              >
                <div
                  className={
                    reverse
                      ? "overflow-hidden rounded-lg lg:order-2 lg:col-span-6"
                      : "overflow-hidden rounded-lg lg:col-span-6"
                  }
                >
                  <img
                    src={service.image}
                    alt=""
                    className="aspect-[3/2] w-full object-cover"
                  />
                </div>
                <div className="lg:col-span-6">
                  <div className="flex items-center gap-3 text-steel">
                    <Icon className="size-5" strokeWidth={1.5} />
                    <span className="font-mono text-xs tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="mt-4 font-display text-3xl tracking-tight">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted">
                    {service.summary}
                  </p>
                  <ul className="mt-6 space-y-2.5 border-t border-border pt-6">
                    {service.work.map((item) => (
                      <li key={item} className="text-sm leading-snug">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            );
          })}
        </div>

        <div className="mt-20 rounded-lg border border-border bg-surface px-6 py-10 sm:px-10">
          <h2 className="font-display text-2xl tracking-tight">
            Typical engagement
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            Six to twenty-six weeks on site. A principal owns the program. We
            staff former plant managers, launch directors, and process
            engineers. Replace this paragraph with your real commercial model.
          </p>
          <Button asChild className="mt-6">
            <Link to="/contact">Talk about a program</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
