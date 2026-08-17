import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-sm border border-border bg-surface px-3.5 text-sm text-fg placeholder:text-muted/80 outline-none transition-[border-color,box-shadow] duration-150 focus:border-steel focus:ring-2 focus:ring-steel/20",
        className,
      )}
      {...props}
    />
  );
}

export function Textarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "min-h-36 w-full rounded-md border border-border bg-surface px-3.5 py-3 text-sm text-fg placeholder:text-muted/80 outline-none transition-[border-color,box-shadow] duration-150 focus:border-steel focus:ring-2 focus:ring-steel/20",
        className,
      )}
      {...props}
    />
  );
}
