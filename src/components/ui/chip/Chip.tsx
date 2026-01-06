import cx from "@/utils/cx";
import { PropsWithChildren } from "react";

interface ChipProps extends PropsWithChildren {
  className?: string;
}

export default function Chip({ className, children }: ChipProps) {
  return (
    <span
      className={cx(
        "py-2 px-3 border rounded-full text-xs font-semibold flex items-center gap-2",
        className
      )}
    >
      {children}
    </span>
  );
}
