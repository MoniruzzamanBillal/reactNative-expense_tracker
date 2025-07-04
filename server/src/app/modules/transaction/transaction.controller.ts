import httpStatus from "http-status";
import catchAsync from "../../util/catchAsync";
import sendResponse from "../../util/sendResponse";
import { transactionServices } from "./transaction.service";

// ! for adding new transaction
const addNewTransaction = catchAsync(async (req, res) => {
  const result = await transactionServices.addNewTransaction(req.body);

  sendResponse(res, {
    status: httpStatus.CREATED,
    success: true,
    message: "Transaction added successfully!!! ",
    data: result,
  });
});

// ! Update transaction
const updateTransaction = catchAsync(async (req, res) => {
  const result = await transactionServices.updateTransaction(
    req.params?.transactionId,
    req?.body
  );

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Transaction updated successfully",
    data: result,
  });
});

// ! Get monthly transactions (default: current month)
const getMonthlyTransactions = catchAsync(async (req, res) => {
  const month = req.query?.month
    ? parseInt(req.query?.month as string)
    : undefined;
  const year = req.query?.year
    ? parseInt(req.query?.year as string)
    : undefined;

  const result = await transactionServices.getMonthlyTransactions(month, year);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: `Transactions retrived !!!`,
    data: result,
  });
});

// ! for deletig transaction data
const deleteTransactionData = catchAsync(async (req, res) => {
  const result = await transactionServices.deleteTransactionData(
    req.params?.transactionId
  );

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Transaction Deleted successfully",
    data: result,
  });
});

//
export const transactionControllers = {
  addNewTransaction,
  updateTransaction,
  getMonthlyTransactions,
  deleteTransactionData,
};
