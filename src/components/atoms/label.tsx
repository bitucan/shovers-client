import { ComponentProps, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type Props = ComponentProps<"label"> & PropsWithChildren;

export function Label({ children, className, ...props }: Props) {
  return (
    <label
      className={twMerge(
        "w-full flex justify-center items-center gap-2",
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
}
