"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionRouter = void 0;
const express_1 = require("express");
const authCheck_1 = __importDefault(require("../../middleware/authCheck"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const transaction_controller_1 = require("./transaction.controller");
const transaction_validation_1 = require("./transaction.validation");
const router = (0, express_1.Router)();
// ! Get monthly transactions
router.get("/monthly-transaction", authCheck_1.default, transaction_controller_1.transactionControllers.getMonthlyTransactions);
// ! for adding new transaction
router.post("/new-transaction", authCheck_1.default, (0, validateRequest_1.default)(transaction_validation_1.transactionValidationSchemas.createTransactionSchema), transaction_controller_1.transactionControllers.addNewTransaction);
// ! for updating transaction
router.patch("/update-transaction/:transactionId", authCheck_1.default, (0, validateRequest_1.default)(transaction_validation_1.transactionValidationSchemas.updateTransactionSchema), transaction_controller_1.transactionControllers.updateTransaction);
// ! for deletig transaction data
router.patch("/delete-transaction/:transactionId", authCheck_1.default, transaction_controller_1.transactionControllers.deleteTransactionData);
//
exports.transactionRouter = router;
