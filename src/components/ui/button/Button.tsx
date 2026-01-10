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
    primary: "bg-blue-500 text-white hover:bg-blue-700",
    secondary: "bg-[#F1F5F9] text-[#334155] hover:bg-gray-100 transition",
  };

  return (
    <button
      className={cx(
        "px-8 py-2 rounded-lg font-semibold transition cursor-pointer",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
}
