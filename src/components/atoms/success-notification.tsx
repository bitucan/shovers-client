import { toast } from "react-toastify";

type Props = {
  message: string;
};

export const successNofication = ({ message }: Props) => {
  toast.success(message, {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
