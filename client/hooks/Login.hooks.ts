import { TLoginPayload } from "@/types/global.types";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "./Login.function";

// ! for login
export const userUserLogin = () => {
  return useMutation({
    mutationKey: ["user-login"],
    mutationFn: async (payload: TLoginPayload) => await loginUser(payload),
  });
};
