import { api } from "../lib/api";

export const getPetsId = async () => {
  const response = await api.get("/api/v1/pets");

  return response;
};
