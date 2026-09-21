import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

export const buttonStyles = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-brand hover:-translate-y-0.5 hover:bg-primary/90",
        secondary:
          "border border-primary/25 bg-background/85 text-primary shadow-soft backdrop-blur-sm hover:-translate-y-0.5 hover:border-primary hover:bg-accent",
        cream:
          "bg-primary-foreground text-primary shadow-brand hover:-translate-y-0.5 hover:bg-primary-foreground/90",
        ghost:
          "text-foreground hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-10 px-4 text-xs",
        lg: "h-14 px-7 text-base",
        icon: "h-11 w-11 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : "button";
  return (
    <Component
      className={buttonStyles({ variant, size, className })}
      {...props}
    />
  );
}