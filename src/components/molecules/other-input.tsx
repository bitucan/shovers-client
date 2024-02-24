import { ComponentProps } from "react";
import { InputText } from "./input-text";

type Props = ComponentProps<"input"> & {
  selectOther: boolean;
  label: string;
};

export function InputOther({ selectOther, label, ...props }: Props) {
  return <>{selectOther && <InputText label={label} {...props} />}</>;
}
