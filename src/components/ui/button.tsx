"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-cyan-400 text-zinc-950 hover:bg-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.25)]",
        secondary:
          "border border-white/15 bg-white/5 text-white hover:bg-white/10",
        orange:
          "bg-orange-500 text-white hover:bg-orange-400 shadow-[0_0_30px_rgba(249,115,22,0.24)]",
        green:
          "bg-green-500 text-zinc-950 hover:bg-green-400 shadow-[0_0_30px_rgba(34,197,94,0.24)]",
        dark: "bg-zinc-950 text-white hover:bg-zinc-800",
      },
      size: {
        default: "h-11 px-5",
        lg: "h-13 px-6 text-base",
        icon: "size-11 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
