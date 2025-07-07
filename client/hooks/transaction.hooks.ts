import { TTransaction } from "@/types/Transaction.tyes";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addNewTransaction,
  getMonthlyTransaction,
} from "./transaction.function";

// ! for getting all transaction
export const useGetMonthlyTransaction = () => {
  return useQuery({
    queryKey: ["monthly-transaction"],
    queryFn: async () => await getMonthlyTransaction(),
  });
};

// ! for adding new transaction
export const useAddTransaction = () => {
  return useMutation({
    mutationKey: ["add-transaction"],
    mutationFn: async (payload: TTransaction) =>
      await addNewTransaction(payload),
  });
};
