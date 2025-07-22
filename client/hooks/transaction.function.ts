import { TTransaction } from "@/types/Transaction.tyes";
import axiosInstance from "@/utils/axiosInstance";
import axios from "axios";

// const baseUrl = "http://localhost:5000/api/transactions";
const baseUrl = "https://expensetrackerapp-fawn.vercel.app/api/transactions";

// ! for getting monthly transactions
export const getMonthlyTransaction = async () => {
  try {
    // const result = await axios.get(`${baseUrl}/monthly-transaction`);
    const result = await axiosInstance.get(`/transactions/monthly-transaction`);

    return result?.data?.data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
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
    throw new Error(error);
  }
};

// ! for deleting a transaction data
export const deleteTransactionData = async (transactionId: string) => {
  try {
    const result = await axios.patch(
      `${baseUrl}/delete-transaction/${transactionId}`
    );

    return result?.data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};
