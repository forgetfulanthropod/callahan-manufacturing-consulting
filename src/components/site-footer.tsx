import { Link } from "@tanstack/react-router";
import { nav, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border-ink bg-bg-deep text-fg-on-ink">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-5">
          <p className="font-display text-3xl tracking-tight">Callahan</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-on-ink">
            {site.footerBlurb}
          </p>
          <p className="mt-6 text-sm text-muted-on-ink">
            {site.hq}
            <br />
            <a className="underline-offset-4 hover:underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <br />
            {site.phone}
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.16em] text-muted-on-ink">
              Practice
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-muted-on-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.16em] text-muted-on-ink">
              Offices
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {site.offices.map((o) => (
                <li key={o.city}>
                  {o.city}
                  <span className="text-muted-on-ink"> — {o.note}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.16em] text-muted-on-ink">
              Edit this site
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-on-ink">
              Company copy lives in{" "}
              <span className="text-fg-on-ink">src/content/</span>. Drop photos
              in <span className="text-fg-on-ink">public/images/</span>. See
              CONTENT.md in the repo.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-border-ink">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-muted-on-ink sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {site.legalName}
          </p>
          <p>Independent. On the floor.</p>
        </div>
      </div>
    </footer>
  );
}
