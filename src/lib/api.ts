import axios from "axios";

export const api = axios.create({
  baseURL: "https://tucan-shovers-hakrlu77ba-uc.a.run.app",
  //   timeout: 5000,
  //   headers: {
  //     Authorization: "Bearer TOKEN",
  //   },
});
