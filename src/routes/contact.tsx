import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageIntro } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { site } from "@/content/site";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <main>
      <PageIntro
        kicker="Contact"
        title="Tell us the plant, the constraint, and the date."
        lede="We reply within one business day. For live programs, we can be on site the following week."
      />

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-12">
        <aside className="space-y-8 lg:col-span-4">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.16em] text-muted">
              Inquiries
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 block text-lg hover:text-steel"
            >
              {site.email}
            </a>
            <p className="mt-1 text-sm text-muted">{site.phone}</p>
            <p className="mt-1 text-sm text-muted">{site.hours}</p>
          </div>
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.16em] text-muted">
              Offices
            </p>
            <ul className="mt-3 space-y-3">
              {site.offices.map((o) => (
                <li key={o.city}>
                  <p className="text-sm">
                    {o.city}, {o.region}
                  </p>
                  <p className="text-xs text-muted">{o.note}</p>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xs leading-relaxed text-muted">
            Wire this form to your inbox or CRM later. Until then it composes
            an email to {site.email}. Update the address in src/content/site.ts.
          </p>
        </aside>

        <div className="lg:col-span-8">
          {sent ? (
            <div className="rounded-lg border border-border bg-surface p-8">
              <h2 className="font-display text-2xl tracking-tight">
                Your mail client should be open.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                If nothing appeared, write us directly at {site.email}. Mention
                the plant, the constraint, and when you need us on the floor.
              </p>
            </div>
          ) : (
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const name = String(data.get("name") ?? "");
                const company = String(data.get("company") ?? "");
                const email = String(data.get("email") ?? "");
                const plant = String(data.get("plant") ?? "");
                const message = String(data.get("message") ?? "");
                const body = [
                  `Name: ${name}`,
                  `Company: ${company}`,
                  `Email: ${email}`,
                  `Plant / program: ${plant}`,
                  "",
                  message,
                ].join("\n");
                window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Program inquiry — ${company || name}`)}&body=${encodeURIComponent(body)}`;
                setSent(true);
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-xs uppercase tracking-[0.12em] text-muted">
                  Name
                  <Input name="name" required className="mt-2" />
                </label>
                <label className="block text-xs uppercase tracking-[0.12em] text-muted">
                  Company
                  <Input name="company" required className="mt-2" />
                </label>
                <label className="block text-xs uppercase tracking-[0.12em] text-muted">
                  Work email
                  <Input name="email" type="email" required className="mt-2" />
                </label>
                <label className="block text-xs uppercase tracking-[0.12em] text-muted">
                  Plant or program
                  <Input name="plant" className="mt-2" />
                </label>
              </div>
              <label className="block text-xs uppercase tracking-[0.12em] text-muted">
                What is red?
                <Textarea
                  name="message"
                  required
                  className="mt-2"
                  placeholder="Constraint, timing, and whether we can be on the floor."
                />
              </label>
              <Button type="submit" size="lg">
                Send inquiry
              </Button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
