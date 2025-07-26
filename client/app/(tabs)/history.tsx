import { HistoryCard, HistoryCardSkeleton } from "@/components/History";
import { useGetYearlyTransaction } from "@/hooks/transaction.hooks";
import { TTransactionHistory } from "@/types/Transaction.tyes";
import { ScrollView, View } from "react-native";

export default function YearlyHistoryScreen() {
  const { data: yearlyTransactions, isLoading } = useGetYearlyTransaction();

  //   console.log(yearlyTransactions);

  return (
    <View style={{ width: "92%", alignSelf: "center", marginTop: 10 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {isLoading &&
          Array.from({ length: 8 })?.map((_, ind) => (
            <HistoryCardSkeleton key={ind} />
          ))}

        {yearlyTransactions &&
          yearlyTransactions?.map(
            (historyData: TTransactionHistory, ind: number) => (
              <HistoryCard key={ind} historyData={historyData} />
            )
          )}
      </ScrollView>
    </View>
  );
}
