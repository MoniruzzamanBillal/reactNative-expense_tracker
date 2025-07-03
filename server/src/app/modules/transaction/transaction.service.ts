import { TTransaction } from "./transaction.interface";
import { transactionModel } from "./transaction.model";

// ! for adding new transaction
const addNewTransaction = async (payload: TTransaction) => {
  const result = await transactionModel.create(payload);

  return result;
};

//
export const transactionServices = {
  addNewTransaction,
};
