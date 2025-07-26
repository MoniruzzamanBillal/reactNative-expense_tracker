import { TLoginPayload, TRegisterPayload } from "@/types/global.types";
import axios from "axios";
import Toast from "react-native-toast-message";

const baseUrl = "https://expensetrackerapp-fawn.vercel.app/api/auth";

export const loginUser = async (payload: TLoginPayload) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, payload);
    return response.data;
  } catch (error: any) {
    console.log(error);
    Toast.show({
      type: "error",
      text1: error?.response?.data?.message || "Failed to login",
    });
  }
};

export const registerUser = async (payload: TRegisterPayload) => {
  try {
    const response = await axios.post(`${baseUrl}/register`, payload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
