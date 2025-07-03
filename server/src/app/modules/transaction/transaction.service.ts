import { TTransaction } from "./transaction.interface";
import { transactionModel } from "./transaction.model";

// ! for adding new transaction
const addNewTransaction = async (payload: TTransaction) => {
  const result = await transactionModel.create(payload);

  return result;
};

// ! for updating transaction
const updateTransaction = async (
  transactionId: string,
  payload: Partial<TTransaction>
) => {
  return await transactionModel.findByIdAndUpdate(transactionId, payload, {
    new: true,
  });
};

// ! for getting monthly data
const getMonthlyTransactions = async (month?: number, year?: number) => {
  const today = new Date();
  year = year ?? today.getFullYear();
  month = month ?? today.getMonth() + 1;

  const start = new Date(year, month - 1, 1);
  const end = new Date(year, month, 0, 23, 59, 59, 999);

  const transactions = await transactionModel.find({
    createdAt: { $gte: start, $lte: end },
  });

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, curr) => acc + curr.amount, 0);

  return { income, expense, transactions, month, year };
};

//
export const transactionServices = {
  addNewTransaction,
  updateTransaction,
  getMonthlyTransactions,
};
