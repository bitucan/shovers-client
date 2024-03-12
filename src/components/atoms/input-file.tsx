import { Upload } from "lucide-react";
import { Input } from "./input";
import { ComponentProps } from "react";

type Props = ComponentProps<"input"> & {
  id: string;
};

export function InputFile({ id, ...props }: Props) {
  return (
    <>
      <Input id={id} type="file" {...props} hidden />
      <label
        htmlFor={id}
        className="text-sm text-gray-600 py-2 px-4
        rounded-full font-bold uppercase 
         cursor-pointer border-gray-600 border-[1px] flex items-center justify-center gap-2"
      >
        <Upload className="h-4 w-4" />
        subir archivo
      </label>
    </>
  );
}
