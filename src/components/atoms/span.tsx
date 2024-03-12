import { ComponentProps, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type Props = ComponentProps<"span"> & PropsWithChildren;

export function SpanInput({ children, className, ...props }: Props) {
  return (
    <div className="flex justify-center  px-4 items-center bg-[#ff0000] rounded-full  h-[2.25rem] ">
      <span
        {...props}
        className={twMerge(
          "text-sm whitespace-nowrap text-white capitalize font-bold",
          className
        )}
      >
        {children}
      </span>
    </div>
  );
}
