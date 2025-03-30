import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
export type ActionButtonProps = ComponentProps<"button">;
export const ActionButton = ({
  className,
  children,
  ...props
}: ActionButtonProps) => {
  return (
    <button
      className={twMerge(
        "px-2 py-1 rounded-md border border-[#BDBFCB] hover:bg-[#597BC0]/40 transition-colors duration-100",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
