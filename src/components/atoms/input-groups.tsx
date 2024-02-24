import { ComponentProps, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type Props = ComponentProps<"div"> & PropsWithChildren;

export function InputGroups({ children, className, ...props }: Props) {
  return (
    <div {...props} className={twMerge("flex gap-8", className)}>
      {children}
    </div>
  );
}
