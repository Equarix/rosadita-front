"use client";

import cx from "@/utils/cx";
import { ButtonHTMLAttributes } from "react";

export default function Button({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cx(
        "px-8 py-2 bg-blue-500 text-white rounded-lg font-semibold",
        className
      )}
      {...props}
    />
  );
}
