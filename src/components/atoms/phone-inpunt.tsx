import PhoneInputNotCustom from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { FORM_INPUTS } from "../consts";

type Props = {
  onChange: (phone: any) => void;
  value: any;
};

const PhoneInput = ({ onChange, value, name }: Props) => {
  const handleOnchage = (value: any) => {
    console.log();

    const event = {
      target: {
        name: FORM_INPUTS.PHONE_NUMBER,
        value,
      },
    };
    onChange(event);
  };

  return (
    <PhoneInputNotCustom
      defaultCountry="CO"
      international
      value={value}
      onChange={handleOnchage}
      className="w-full bg-transparent  rounded-full h-[2.25rem] border-[1px] border-gray-600 px-[1rem]"
    />
  );
};
export default PhoneInput;
