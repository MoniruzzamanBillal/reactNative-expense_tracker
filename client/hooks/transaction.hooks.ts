import { TTransaction } from "@/types/Transaction.tyes";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addNewTransaction,
  deleteTransactionData,
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
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["add-transaction"],
    mutationFn: async (payload: TTransaction) =>
      await addNewTransaction(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["monthly-transaction"] });
    },
  });
};

// ! for deleting transaction data
export const useDeleteTransaction = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["delete-transaction"],
    mutationFn: async (transactionId: string) =>
      await deleteTransactionData(transactionId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["monthly-transaction"] });
    },
  });
};
