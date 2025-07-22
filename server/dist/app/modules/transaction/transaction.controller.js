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
exports.transactionControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../util/catchAsync"));
const sendResponse_1 = __importDefault(require("../../util/sendResponse"));
const transaction_service_1 = require("./transaction.service");
// ! for adding new transaction
const addNewTransaction = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const result = yield transaction_service_1.transactionServices.addNewTransaction(req.body, (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.userId);
    (0, sendResponse_1.default)(res, {
        status: http_status_1.default.CREATED,
        success: true,
        message: "Transaction added successfully!!! ",
        data: result,
    });
}));
// ! Update transaction
const updateTransaction = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const result = yield transaction_service_1.transactionServices.updateTransaction((_b = req.params) === null || _b === void 0 ? void 0 : _b.transactionId, req === null || req === void 0 ? void 0 : req.body);
    (0, sendResponse_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: "Transaction updated successfully",
        data: result,
    });
}));
// ! Get monthly transactions (default: current month)
const getMonthlyTransactions = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c, _d, _e, _f, _g;
    const month = ((_c = req.query) === null || _c === void 0 ? void 0 : _c.month)
        ? parseInt((_d = req.query) === null || _d === void 0 ? void 0 : _d.month)
        : undefined;
    const year = ((_e = req.query) === null || _e === void 0 ? void 0 : _e.year)
        ? parseInt((_f = req.query) === null || _f === void 0 ? void 0 : _f.year)
        : undefined;
    const result = yield transaction_service_1.transactionServices.getMonthlyTransactions((_g = req === null || req === void 0 ? void 0 : req.user) === null || _g === void 0 ? void 0 : _g.userId, month, year);
    (0, sendResponse_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: `Transactions retrived !!!`,
        data: result,
    });
}));
// ! for deletig transaction data
const deleteTransactionData = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _h;
    const result = yield transaction_service_1.transactionServices.deleteTransactionData((_h = req.params) === null || _h === void 0 ? void 0 : _h.transactionId);
    (0, sendResponse_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: "Transaction Deleted successfully",
        data: result,
    });
}));
//
exports.transactionControllers = {
    addNewTransaction,
    updateTransaction,
    getMonthlyTransactions,
    deleteTransactionData,
};
