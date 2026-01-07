"use client";

import cx from "@/utils/cx";
import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const variantClasses: Record<Variant, string> = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-[#F1F5F9] text-[#334155]",
  };

  return (
    <button
      className={cx(
        "px-8 py-2 rounded-lg font-semibold",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
}
