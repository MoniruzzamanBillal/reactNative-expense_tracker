"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../Error/AppError"));
const transaction_model_1 = require("./transaction.model");
// ! for adding new transaction
const addNewTransaction = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield transaction_model_1.transactionModel.create(payload);
    return result;
});
// ! for getting monthly data
const getMonthlyTransactions = (month, year) => __awaiter(void 0, void 0, void 0, function* () {
    const today = new Date();
    year = year !== null && year !== void 0 ? year : today.getFullYear();
    month = month !== null && month !== void 0 ? month : today.getMonth() + 1;
    const start = new Date(year, month - 1, 1);
    const end = new Date(year, month, 0, 23, 59, 59, 999);
    const transactions = yield transaction_model_1.transactionModel
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
});
// ! for updating transaction
const updateTransaction = (transactionId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const transactionData = yield transaction_model_1.transactionModel.findById(transactionId);
    if (!transactionData) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Invalid transaction id !!!");
    }
    return yield transaction_model_1.transactionModel.findByIdAndUpdate(transactionId, payload, {
        new: true,
    });
});
// ! for deletig transaction data
const deleteTransactionData = (transactionId) => __awaiter(void 0, void 0, void 0, function* () {
    const transactionData = yield transaction_model_1.transactionModel.findById(transactionId);
    if (!transactionData) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Invalid transaction id !!!");
    }
    const result = yield transaction_model_1.transactionModel.findByIdAndUpdate(transactionId, {
        isDeleted: true,
    }, {
        new: true,
    });
    return result;
});
//
exports.transactionServices = {
    addNewTransaction,
    updateTransaction,
    getMonthlyTransactions,
    deleteTransactionData,
};
