import { TTransaction } from "@/types/Transaction.tyes";
import axios from "axios";

const baseUrl = "http://localhost:5000/api/transactions";

// ! for getting monthly transactions
export const getMonthlyTransaction = async () => {
  try {
    const result = await axios.get(`${baseUrl}/monthly-transaction`);

    return result?.data?.data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

// !for adding new transaction
export const addNewTransaction = async (payload: TTransaction) => {
  try {
    const result = await axios.post(`${baseUrl}/new-transaction`, payload);

    return result?.data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};
