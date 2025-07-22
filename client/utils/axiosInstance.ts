import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const serverUrl = "https://expensetrackerapp-fawn.vercel.app/api";
// const serverUrl = "http://localhost:5000/api";
// const serverUrl = " 192.168.0.109:5000/api";

const axiosInstance = axios.create({
  baseURL: serverUrl,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log(error);
    Promise.reject(error);
  }
);

export default axiosInstance;
