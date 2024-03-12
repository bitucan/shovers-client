import { ComponentProps, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type Props = ComponentProps<"button"> & PropsWithChildren;
export function Button({ children, className, ...props }: Props) {
  return (
    <button
      className={twMerge(
        "bg-[#ff0000] text-white rounded-full uppercase font-bold",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
