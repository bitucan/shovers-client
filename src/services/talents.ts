import { api } from "../lib/api";

export const getTalentsId = async () => {
  const response = await api.get("/api/v1/talents");

  return response;
};
