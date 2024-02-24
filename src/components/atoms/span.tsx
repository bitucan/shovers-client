import { ComponentProps, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
type Props = ComponentProps<"span"> & PropsWithChildren;

export function SpanInput({ children, className, ...props }: Props) {
  return (
    <div
      className={twMerge(
        "h-[2.5rem] rounded-full font-[1.05rem] flex items-center justify-center bg-[#ff0000]",
        className
      )}
    >
      <span {...props} className="text-white uppercase font-bold px-[1rem]">
        {children}
      </span>
    </div>
  );
}
