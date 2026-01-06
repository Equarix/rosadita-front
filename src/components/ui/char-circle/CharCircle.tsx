import cx from "@/utils/cx";
import { PropsWithChildren } from "react";

interface CharCircleProps extends PropsWithChildren {
  className?: string;
}

export default function CharCircle({ className, children }: CharCircleProps) {
  return (
    <span
      className={cx(
        "size-8 flex items-center justify-center bg-[#F3F4F6] rounded-full text-xs",
        className
      )}
    >
      {children}
    </span>
  );
}
