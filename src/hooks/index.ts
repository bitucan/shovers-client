import { useState } from "react";
import { api } from "../lib/api";
import { ErrorNotification } from "../components/atoms/error-notification";
import { SuccessNofication } from "../components/atoms/success-notification";
import { uuid } from "../lib/uuid";

const initialState = {
  name: "",
  email: "",
  phone: "",
  day_of_birth: "",
  gender: "",
  talent: "",
  pet: "",
  images: null || [],
  video: null,
  other_gender: "",
  other_talent: "",
  other_pet: "",
};

const ShoverObject = (shover: any) => ({
  id: uuid(),
  talent: {
    id: uuid(),
    type_of_pet: shover.talent,
    other_talent: shover.other_talent,
  },
  pet: {
    id: uuid(),
    type_of_pet: shover.pet,
    other_pet: shover.other_pet,
  },
  full_name: shover.name,
  email: shover.email,
  phone_number: shover.phone,
  gender: shover.gender,
  day_of_birth: shover.day_of_birth,
  images: shover.images,
  video: shover.video,
});

export const useShover = () => {
  const [shover, setShover] = useState(initialState);

  const handleImageChange = (file: any) => {
    setShover({ ...shover, file });
  };

  const handleVideoChange = (video: any) => {
    setShover({ ...shover, video });
  };

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setShover((prev: any) => ({ ...shover, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await api.post("/person", {
        data: ShoverObject(shover),
      });

      if (response.status === 200) {
        SuccessNofication({
          message: "",
        });
      }
    } catch (error: any) {
      if (error.response.data.status === 400) {
        ErrorNotification({
          message: "",
        });
      }
    }
  };
  return {
    shover,
    handleImageChange,
    handleVideoChange,
    handleOnChange,
    handleSubmit,
  };
};
