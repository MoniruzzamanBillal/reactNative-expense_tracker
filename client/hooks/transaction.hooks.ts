import { useQuery } from "@tanstack/react-query";
import { getMonthlyTransaction } from "./transaction.function";

// ! for getting all transaction
export const useGetMonthlyTransaction = () => {
  return useQuery({
    queryKey: ["monthly-transaction"],
    queryFn: async () => await getMonthlyTransaction(),
  });
};
