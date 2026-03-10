import cx from "@/utils/cx";
import { InputHTMLAttributes, Ref } from "react";

interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className"
> {
  label?: string;
  ref?: Ref<HTMLInputElement>;
  className?: {
    input?: string;
    label?: string;
    container?: string;
  };
  error?: string;
}

export default function Input({
  label,
  ref,
  className,
  error,
  ...props
}: InputProps) {
  return (
    <div className={cx("flex flex-col w-full gap-1", className?.container)}>
      {label && (
        <h1 className={cx("font-medium", className?.label)}>{label}</h1>
      )}
      <input
        type="text"
        ref={ref}
        className={cx(
          "w-full border border-gray-300 bg-white z-2 rounded-md p-2 mt-2 mb-4",
          className?.input,
        )}
        {...props}
      />

      {error && <span className="text-sm text-red-500 mt-1">{error}</span>}
    </div>
  );
}
