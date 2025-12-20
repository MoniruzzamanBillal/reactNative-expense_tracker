import { TTransaction } from "@/types/Transaction.tyes";
import axiosInstance from "@/utils/axiosInstance";
import Toast from "react-native-toast-message";

// ! for getting monthly transactions --> legacy function , not in use
export const getMonthlyTransactionLegacy = async () => {
  try {
    const result = await axiosInstance.get(
      `/transactions/monthly-transaction-legacy`
    );

    return result?.data?.data;
  } catch (error: any) {
    console.log(error);
    Toast.show({
      type: "error",
      text1: error?.response?.data?.message,
    });
  }
};

// ! for getting monthly transactions(date , income , expense , transaction)
export const getMonthlyTransaction2 = async (
  params: Record<string, unknown>
) => {
  try {
    const result = await axiosInstance.get(
      `/transactions/monthly-transaction`,
      { params }
    );

    return result?.data?.data;
  } catch (error: any) {
    console.log("monthly error ");
    console.log(error?.response?.data?.message);

    // "Invalid or expired token"

    Toast.show({
      type: "error",
      text1: error?.response?.data?.message,
    });
  }
};
export const getMonthlyTransaction = async (
  params: Record<string, unknown>
) => {
  const result = await axiosInstance.get(`/transactions/monthly-transaction`, {
    params,
  });

  return result?.data?.data;
};

// ! for getting daily transaction
export const getDailyTransaction2 = async () => {
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

export const getDailyTransaction = async () => {
  const result = await axiosInstance.get(`/transactions/daily-transaction`);

  return result?.data?.data;
};

// ! for getting yearly transaction data
export const getYearlyTransaction2 = async () => {
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

export const getYearlyTransaction = async () => {
  const result = await axiosInstance.get(`/transactions/yearly-transaction`);

  return result?.data?.data;
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
