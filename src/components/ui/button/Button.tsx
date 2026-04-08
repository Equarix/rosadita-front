"use client";

import cx from "@/utils/cx";
import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  buttonType?: "button";
}

interface LinkButtonProps extends Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> {
  variant?: "primary" | "secondary";
  buttonType?: "link";
  href: LinkProps["href"];
}

type Props = ButtonProps | LinkButtonProps;
export default function Button({
  className,
  variant = "primary",
  buttonType = "button",
  ...props
}: Props) {
  const variantClasses: Record<Variant, string> = {
    primary: "bg-blue-500 text-white hover:bg-blue-700",
    secondary: "bg-[#F1F5F9] text-[#334155] hover:bg-gray-100 transition",
  };

  if (buttonType === "link") {
    return (
      <Link
        className={cx(
          "px-8 py-2 rounded-lg font-semibold transition cursor-pointer inline-block",
          variantClasses[variant],
          className,
        )}
        {...(props as LinkButtonProps)}
      />
    );
  }

  return (
    <button
      className={cx(
        "px-8 py-2 rounded-lg font-semibold transition cursor-pointer",
        variantClasses[variant],
        className,
      )}
      {...(props as ButtonProps)}
    />
  );
}
