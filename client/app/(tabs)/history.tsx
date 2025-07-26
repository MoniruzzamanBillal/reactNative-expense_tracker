import { HistoryCard } from "@/components/History";
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
