import { TTransaction } from "@/types/Transaction.tyes";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addNewTransaction,
  deleteTransactionData,
  getDailyTransaction,
  getMonthlyTransaction,
  getYearlyTransaction,
} from "./transaction.function";

// ! for getting monthly transaction
export const useGetMonthlyTransaction = () => {
  return useQuery({
    queryKey: ["monthly-transaction"],
    queryFn: async () => await getMonthlyTransaction(),
  });
};

// ! for getting daily transaction
export const useGetDailyTransaction = () => {
  return useQuery({
    queryKey: ["daily-transaction"],
    queryFn: async () => await getDailyTransaction(),
  });
};

// ! for getting yearly transaction
export const useGetYearlyTransaction = () => {
  return useQuery({
    queryKey: ["yearly-transaction"],
    queryFn: async () => await getYearlyTransaction(),
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
      queryClient.invalidateQueries({
        queryKey: ["daily-transaction"],
      });
      queryClient.invalidateQueries({
        queryKey: ["monthly-transaction"],
      });
      queryClient.invalidateQueries({
        queryKey: ["yearly-transaction"],
      });
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
      queryClient.invalidateQueries({
        queryKey: ["daily-transaction"],
      });
      queryClient.invalidateQueries({
        queryKey: ["monthly-transaction"],
      });
      queryClient.invalidateQueries({
        queryKey: ["yearly-transaction"],
      });
    },
  });
};
