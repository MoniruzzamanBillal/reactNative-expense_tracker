import { transactionConstants } from "./transaction.constant";

export interface TTransaction {
  type: keyof typeof transactionConstants;
  title: string;
  description: string;
  amount: number;
  isDeleted: boolean;
}
