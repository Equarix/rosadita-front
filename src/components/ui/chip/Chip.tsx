import cx from "@/utils/cx";
import { HTMLAttributes } from "react";

interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  className?: string;
  isActive?: boolean;
}

export default function Chip({
  className,
  children,
  isActive,
  ...props
}: ChipProps) {
  return (
    <span
      className={cx(
        "py-2 px-3 border rounded-full text-xs font-semibold flex items-center gap-2",
        className,
        isActive && "bg-blue-700 text-white"
      )}
      {...props}
    >
      {children}
    </span>
  );
}
