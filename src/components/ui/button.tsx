import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans text-sm font-medium tracking-tight transition-[transform,background-color,color,border-color,opacity] duration-150 ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-40 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-fg text-fg-on-ink hover:bg-steel",
        ink: "bg-bg-deep text-fg-on-ink hover:bg-surface-ink",
        outline:
          "border border-border bg-transparent text-fg hover:border-fg/40 hover:bg-surface",
        ghost: "text-fg hover:bg-fg/5",
        inverse:
          "bg-fg-on-ink text-bg-deep hover:bg-surface",
      },
      size: {
        default: "h-11 rounded-sm px-5",
        sm: "h-9 rounded-sm px-3.5 text-xs",
        lg: "h-12 rounded-md px-6",
        icon: "size-11 rounded-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
