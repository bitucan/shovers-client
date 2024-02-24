import { api } from "../lib/api";

export const getPetsId = async () => {
  const response = await api.get("/pets");

  return response;
};
