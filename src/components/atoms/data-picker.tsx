/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentProps, useState } from "react";
import DateComponent, { DateValueType } from "react-tailwindcss-datepicker";
import { currentDate } from "../../lib/current-date";

type Props = ComponentProps<"div"> & {
  onSelectDate: (date: DateValueType) => void;
  date: any;
};

export function DataPicker({ date, onSelectDate, ...props }: Props) {
  const { onChange, ...rest } = props;
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue: any) => {
    const event = {
      target: {
        name: "day_of_birth",
        value: newValue.startDate,
      },
    };

    onSelectDate(event as any);
    setValue(newValue);
  };

  return (
    <DateComponent
      asSingle={true}
      useRange={false}
      startFrom={currentDate()}
      toggleClassName="absolute rounded-r-lg text-gray-600 right-0 h-full px-3  focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
      containerClassName="relative w-full h-[2.25rem] flex items-center border-[1px] px-[1rem] border-gray-600 rounded-full cursor-pointer"
      inputClassName="bg-transparent outline-none cursor-pointer text-gray-600 placeholder-gray-600 font-bold"
      value={value}
      onChange={handleValueChange}
      {...rest}
    />
  );
}
