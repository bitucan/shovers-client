import { ComponentProps } from "react";
import { SpanInput } from "../atoms/span";
import { Input } from "../atoms/input";
import { twMerge } from "tailwind-merge";

type Props = ComponentProps<"input"> & {
  label: string;
};

export function InputText({ label, className, ...props }: Props) {
  return (
    <label className={twMerge("w-full flex gap-[1.25rem]", className)}>
      <SpanInput className="text-white uppercase font-bold px-[1rem]">
        {label}
      </SpanInput>
      <Input type="text" required {...props} />
    </label>
  );
}
