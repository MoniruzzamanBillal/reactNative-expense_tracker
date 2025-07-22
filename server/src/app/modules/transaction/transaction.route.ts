import { Router } from "express";
import authCheck from "../../middleware/authCheck";
import validateRequest from "../../middleware/validateRequest";
import { transactionControllers } from "./transaction.controller";
import { transactionValidationSchemas } from "./transaction.validation";

const router = Router();

// ! Get monthly transactions
router.get(
  "/monthly-transaction",
  authCheck,
  transactionControllers.getMonthlyTransactions
);

// ! for adding new transaction
router.post(
  "/new-transaction",
  authCheck,
  validateRequest(transactionValidationSchemas.createTransactionSchema),
  transactionControllers.addNewTransaction
);

// ! for updating transaction
router.patch(
  "/update-transaction/:transactionId",
  authCheck,
  validateRequest(transactionValidationSchemas.updateTransactionSchema),
  transactionControllers.updateTransaction
);

// ! for deletig transaction data
router.patch(
  "/delete-transaction/:transactionId",
  authCheck,
  transactionControllers.deleteTransactionData
);

//
export const transactionRouter = router;
