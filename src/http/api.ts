import axios from "axios";
import { useAppSelector } from "@/store/hooks";

const api = axios.create({
  // todo: move this value to env variable.
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

// api.interceptors.request.use((config) => {
//   const { token } = useAppSelector((state) => {
//     return state.user;
//   });
//   if (token) {
//     config.headers.Authorization = token;
//   }
//   return config;
// });

export const login = async (data: { email: string; password: string }) =>
  api.post("/api/user/login", data);

export const getUserDetails = async (headers: any) =>
  api.get("/api/user/me", {
    headers: { ...headers },
  });
