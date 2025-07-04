import httpStatus from "http-status";
import AppError from "../../Error/AppError";
import { TTransaction } from "./transaction.interface";
import { transactionModel } from "./transaction.model";

// ! for adding new transaction
const addNewTransaction = async (payload: TTransaction) => {
  const result = await transactionModel.create(payload);

  return result;
};

// ! for getting monthly data
const getMonthlyTransactions = async (month?: number, year?: number) => {
  const today = new Date();
  year = year ?? today.getFullYear();
  month = month ?? today.getMonth() + 1;

  const start = new Date(year, month - 1, 1);
  const end = new Date(year, month, 0, 23, 59, 59, 999);

  const transactions = await transactionModel
    .find({
      createdAt: { $gte: start, $lte: end },
    })
    .sort({ createdAt: -1 });

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, curr) => acc + curr.amount, 0);

  return { income, expense, transactions };
};

// ! for updating transaction
const updateTransaction = async (
  transactionId: string,
  payload: Partial<TTransaction>
) => {
  const transactionData = await transactionModel.findById(transactionId);

  if (!transactionData) {
    throw new AppError(httpStatus.BAD_REQUEST, "Invalid transaction id !!!");
  }

  return await transactionModel.findByIdAndUpdate(transactionId, payload, {
    new: true,
  });
};

// ! for deletig transaction data
const deleteTransactionData = async (transactionId: string) => {
  const transactionData = await transactionModel.findById(transactionId);

  if (!transactionData) {
    throw new AppError(httpStatus.BAD_REQUEST, "Invalid transaction id !!!");
  }

  const result = await transactionModel.findByIdAndUpdate(
    transactionId,
    {
      isDeleted: true,
    },
    {
      new: true,
    }
  );

  return result;
};

//
export const transactionServices = {
  addNewTransaction,
  updateTransaction,
  getMonthlyTransactions,
  deleteTransactionData,
};
