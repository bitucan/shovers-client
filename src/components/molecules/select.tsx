import { useState, ComponentProps } from "react";
import { SpanInput } from "../atoms/span";

type Props = ComponentProps<"select"> & {
  options: any;
  label: string;
};

function Select({ label, options, onChange, ...props }: Props) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event: any) => {
    const { name, value } = event.target;

    console.log(name, value);

    setSelectedOption(value);
    if (onChange) {
      const e = {
        target: {
          name,
          value,
        },
      };
      onChange(e as any);
    }
  };

  return (
    <div className="w-full flex gap-2">
      <SpanInput>{label}</SpanInput>
      <select
        value={selectedOption}
        className="w-full rounded-full px-4"
        onChange={handleSelectChange}
        {...props}
      >
        {options?.map((option: any) => (
          <option
            key={option.value}
            value={option.value}
            defaultValue={option.label}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
