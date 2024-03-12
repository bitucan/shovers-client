import { useEffect, useState } from "react";
import { getTalentsId } from "../services/talents";

export const useGetTalents = () => {
  const [data, setData] = useState();

  useEffect(() => {
    getTalentsId().then((res) =>
      setData(
        res.data.map((talents: any) => ({
          value: talents.talent_id,
          label: talents.talent_name,
        }))
      )
    );
  }, []);

  return {
    data,
  };
};
