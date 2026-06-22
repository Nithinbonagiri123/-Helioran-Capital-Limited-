"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/50 disabled:pointer-events-none disabled:opacity-50 overflow-hidden",
  {
    variants: {
      variant: {
        primary:
          "bg-white text-ink-950 hover:bg-white/90 shadow-[0_10px_40px_-12px_rgba(255,255,255,0.35)]",
        accent:
          "bg-gradient-to-b from-brand-400 to-brand-600 text-white shadow-[0_12px_40px_-10px_rgba(31,92,255,0.55)] hover:shadow-[0_18px_50px_-10px_rgba(31,92,255,0.75)]",
        ghost:
          "border border-white/10 bg-white/[0.02] text-white hover:bg-white/[0.06] hover:border-white/20 backdrop-blur",
        link: "text-white underline-offset-4 hover:underline px-0",
      },
      size: {
        sm: "h-9 px-4 text-[13px]",
        md: "h-11 px-5",
        lg: "h-12 px-7 text-[15px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
        {variant === "accent" && (
          <span
            aria-hidden
            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
          />
        )}
      </button>
    );
  }
);
Button.displayName = "Button";

export { buttonVariants };
