import { useEffect, useState } from "react";
import { getPetsId } from "../services/pets";

export const useGetPets = () => {
  const [data, setData] = useState();

  useEffect(() => {
    getPetsId().then((res) =>
      setData(
        res.data.map((pet: any) => ({
          value: pet.pet_id,
          label: pet.type_of_pet,
        }))
      )
    );
  }, []);

  return {
    data,
  };
};
