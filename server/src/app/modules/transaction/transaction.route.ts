import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { transactionControllers } from "./transaction.controller";
import { transactionValidationSchemas } from "./transaction.validation";

const router = Router();

// ! for adding new transaction
router.post(
  "/new-transaction",
  validateRequest(transactionValidationSchemas.createTransactionSchema),
  transactionControllers.addNewTransaction
);

// ! for updating transaction
router.patch(
  "/update/:transactionId",
  validateRequest(transactionValidationSchemas.updateTransactionSchema),
  transactionControllers.updateTransaction
);

// ! Get monthly transactions
router.get(
  "/monthly-transaction",
  transactionControllers.getMonthlyTransactions
);

//
export const transactionRouter = router;
