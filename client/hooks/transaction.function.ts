import { TTransaction } from "@/types/Transaction.tyes";
import axiosInstance from "@/utils/axiosInstance";
import Toast from "react-native-toast-message";

// const baseUrl = "http://localhost:5000/api/transactions";
// const baseUrl = "https://expensetrackerapp-fawn.vercel.app/api/transactions";

// ! for getting monthly transactions
export const getMonthlyTransaction = async () => {
  try {
    // const result = await axios.get(`${baseUrl}/monthly-transaction`);
    const result = await axiosInstance.get(`/transactions/monthly-transaction`);

    return result?.data?.data;
  } catch (error: any) {
    console.log(error);
    Toast.show({
      type: "error",
      text1: error?.response?.data?.message,
    });
  }
};

// ! for getting daily transaction
export const getDailyTransaction = async () => {
  try {
    const result = await axiosInstance.get(`/transactions/daily-transaction`);

    return result?.data?.data;
  } catch (error: any) {
    console.log(error);
    Toast.show({
      type: "error",
      text1: error?.response?.data?.message,
    });
  }
};

// ! for getting yearly transaction data
export const getYearlyTransaction = async () => {
  try {
    const result = await axiosInstance.get(`/transactions/yearly-transaction`);

    return result?.data?.data;
  } catch (error: any) {
    console.log(error);
    Toast.show({
      type: "error",
      text1: error?.response?.data?.message,
    });
  }
};

// !for adding new transaction
export const addNewTransaction = async (payload: TTransaction) => {
  try {
    const result = await axiosInstance.post(
      `/transactions/new-transaction`,
      payload
    );

    return result?.data;
  } catch (error: any) {
    console.log(error);
    Toast.show({
      type: "error",
      text1: error?.response?.data?.message,
    });
  }
};

// ! for deleting a transaction data
export const deleteTransactionData = async (transactionId: string) => {
  try {
    const result = await axiosInstance.patch(
      `/transactions/delete-transaction/${transactionId}`
    );

    return result?.data;
  } catch (error: any) {
    // console.log(error?.response?.data?.message);
    Toast.show({
      type: "error",
      text1: error?.response?.data?.message,
    });
  }
};
