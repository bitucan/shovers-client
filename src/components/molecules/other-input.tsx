import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { Label } from "../atoms/label";
import { SpanInput } from "../atoms/span";
import { Input } from "../atoms/input";

type Props = ComponentProps<"input"> & {
  selectOther: boolean;
  label: string;
};

export function InputOther({ selectOther, className, label, ...props }: Props) {
  return (
    <>
      {selectOther && (
        <Label>
          <SpanInput>{label}</SpanInput>
          <Input className={twMerge("", className)} {...props} />
        </Label>
      )}
    </>
  );
}
