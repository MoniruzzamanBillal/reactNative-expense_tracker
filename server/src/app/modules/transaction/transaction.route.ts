import { Router } from "express";
import { transactionControllers } from "./transaction.controller";

const router = Router();

// ! for adding new transaction
router.post("/new-transaction", transactionControllers.addNewTransaction);

//
export const transactionRouter = router;
