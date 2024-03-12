import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type Props = ComponentProps<"input">;

export function Input({ className, ...props }: Props) {
  return (
    <input
      type="text"
      required
      className={twMerge(
        "w-full rounded-full h-[2.25rem] border-[1px] border-gray-600 px-[1rem] bg-transparent",
        className
      )}
      {...props}
    />
  );
}
