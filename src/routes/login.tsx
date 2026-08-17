import { Link, createFileRoute } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  return (
    <main className="mx-auto flex min-h-[70dvh] max-w-md flex-col justify-center px-5 py-16">
      <p className="text-[0.72rem] uppercase tracking-[0.18em] text-muted">
        Practice access
      </p>
      <h1 className="mt-3 font-display text-3xl tracking-tight">Sign in</h1>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        For Callahan staff. Clients do not need an account to browse the site.
      </p>
      <div className="mt-8 space-y-3">
        {authEnabled ? (
          GROK_PROVIDERS.map((p) => (
            <Button
              key={p.providerId}
              type="button"
              variant="outline"
              className="w-full"
              onClick={() => signIn(p.providerId, { callbackURL: "/" })}
            >
              Continue with {p.label}
            </Button>
          ))
        ) : (
          <p className="text-sm text-muted">Sign-in is disabled.</p>
        )}
      </div>
      <Link to="/" className="mt-8 text-sm text-steel hover:text-fg">
        Back to the site
      </Link>
    </main>
  );
}
