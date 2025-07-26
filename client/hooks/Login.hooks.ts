import { TLoginPayload, TRegisterPayload } from "@/types/global.types";
import { useMutation } from "@tanstack/react-query";
import { loginUser, registerUser } from "./Login.function";

// ! for login
export const UseUserLogin = () => {
  return useMutation({
    mutationKey: ["user-login"],
    mutationFn: async (payload: TLoginPayload) => await loginUser(payload),
  });
};

// ! for registration
export const useUserRegistration = () => {
  return useMutation({
    mutationKey: ["register-user"],
    mutationFn: async (pyaload: TRegisterPayload) =>
      await registerUser(pyaload),
  });
};
