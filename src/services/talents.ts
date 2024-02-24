import { api } from "../lib/api";

export const getTalentsId = async () => {
  const response = await api.get("/talents");

  return response;
};
