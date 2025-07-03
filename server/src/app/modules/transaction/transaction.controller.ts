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

//
export const transactionControllers = {
  addNewTransaction,
};
