import { HistoryCard, HistoryCardSkeleton } from "@/components/History";
import { useGetYearlyTransaction } from "@/hooks/transaction.hooks";
import { TTransactionHistory } from "@/types/Transaction.tyes";
import { useState } from "react";
import { RefreshControl, ScrollView, View } from "react-native";

export default function YearlyHistoryScreen() {
  const [refreshing, setRefreshing] = useState(false);

  const {
    data: yearlyTransactions,
    isLoading,
    refetch,
  } = useGetYearlyTransaction();

  const handleRefresh = async () => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  };

  return (
    <View style={{ width: "92%", alignSelf: "center", marginTop: 10 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      >
        {isLoading &&
          !refreshing &&
          Array.from({ length: 8 })?.map((_, ind) => (
            <HistoryCardSkeleton key={ind} />
          ))}
        {refreshing &&
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
