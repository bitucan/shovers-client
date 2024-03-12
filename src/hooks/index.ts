import { useState } from "react";
import { api } from "../lib/api";
import { ErrorNotification } from "../components/atoms/error-notification";
import { successNofication } from "../components/atoms/success-notification";
import { uuid } from "../lib/uuid";

const initialState = {
  full_name: "",
  email: "",
  phone_number: "",
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

function addSpaceAfterCountryCode(number: string): string {
  if (number.startsWith("+57") && number.length >= 10) {
    return number.replace(/^(\+57)(\d{3})/, "$1 $2");
  } else {
    return number;
  }
}

const getPetValue = (pet: any, other_pet: any) => {
  console.log(pet, other_pet);

  if (pet !== "") {
    return pet;
  } else {
    if (other_pet) {
      return other_pet;
    }

    if (pet === "") {
      return "gato";
    }
  }
};

const getGenderValue = (gender: any, other_gender: any) => {
  console.log(gender, other_gender);

  if (gender !== "") {
    return gender;
  } else {
    if (other_gender) {
      return other_gender;
    }

    if (gender === "") {
      return "femenino";
    }
  }
};

const getTalentValue = (talent: any, other_talent: any) => {
  console.log(talent, other_talent);

  if (talent !== "") {
    return talent;
  } else {
    if (other_talent) {
      return other_talent;
    }

    if (talent === "") {
      return "bailarín";
    }
  }
};

const Images = (image: any, shoverId: string) => ({
  id: uuid(),
  person_id: shoverId,
  file_name: image.name,
  type_of_file: image.type,
  file_size_MB: image.size,
});

const Video = (video: any, shoverId: string) => ({
  id: uuid(),
  person_id: shoverId,
  file_name: video.name,
  type_of_file: video.type,
  file_size_MB: video.size,
});

const Shover = (shover: any) => ({
  id: shover.id,
  talent_id: uuid(),
  pet_id: uuid(),
  full_name: shover.full_name,
  email: shover.email,
  phone_number: addSpaceAfterCountryCode(shover.phone_number),
  gender: getGenderValue(shover.gender, shover.other_gender),
  day_of_birth: shover.day_of_birth,

  // },
  // pet_schema: {
  //   type_of_pet: getPetValue(shover.pet, shover.other_pet),
  // },
  // talent: {
  //   type_of_talent: getTalentValue(shover.talent, shover.other_talent),
  // },
  // images_schema: {
  //   images: shover?.images.map((image: any) => Images(image, shover.id)),
  // },
  // multimedia_schema: {
  //   ...Video(shover.video, shover.id),
  // },
});

export const useShover = () => {
  const [shover, setShover] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (images: any) => {
    setShover({ ...shover, images });
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

    setIsLoading(true);

    const person_id = uuid();

    try {
      const response = await api.post("/api/v1/persons", {
        ...Shover({
          id: person_id,
          ...shover,
        }),
      });

      console.log("reponse", response);

      successNofication({
        message: response.data,
      });
    } catch (error: any) {
      console.log("error message", error);

      if (error.response.data.status === 400) {
        ErrorNotification({
          message: "",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    shover,
    handleImageChange,
    handleVideoChange,
    handleOnChange,
    handleSubmit,
    isLoading,
  };
};
