"use client";
import { useAppSelector } from "@/store/hooks";

const useAuthSession = () => {
  const { token, user } = useAppSelector((state) => state.user);

  if (!token) {
    return { user: { email: "", name: "" }, isAuthenticated: false };
  }

  return { user, isAuthenticated: true };
};

export default useAuthSession;
