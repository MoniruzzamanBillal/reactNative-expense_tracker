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
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionModel = void 0;
const mongoose_1 = require("mongoose");
const transaction_constant_1 = require("./transaction.constant");
const transactionSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User is required !!!"],
    },
    type: {
        type: String,
        enum: Object.values(transaction_constant_1.transactionConstants),
        required: [true, "Transaction type is required !!!"],
    },
    title: {
        type: String,
        required: [true, "Transaction title is required !!!"],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Transaction description is required !!!"],
        trim: true,
    },
    amount: {
        type: Number,
        required: [true, "Transaction amount is required !!!"],
        min: 0,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });
transactionSchema.pre("findOne", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        this.where({ isDeleted: false });
    });
});
transactionSchema.pre("find", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        this.where({ isDeleted: false });
    });
});
//
exports.transactionModel = (0, mongoose_1.model)("Transaction", transactionSchema);
