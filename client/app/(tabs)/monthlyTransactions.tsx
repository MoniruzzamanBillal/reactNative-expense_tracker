import {
  HomeSkeleton,
  TotalBalanceCard,
  TransactionAccordion,
} from "@/components/Home";
import { useGetDailyTransactionUpdated } from "@/hooks/transaction.hooks";
import { useState } from "react";
import {
  Dimensions,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { Text } from "react-native-paper";

const screenHeight = Dimensions.get("window").height;

export default function MonthlyTransactionScreen() {
  const [refreshing, setRefreshing] = useState(false);

  const {
    data: monthlyTransaction,
    isLoading,
    refetch,
  } = useGetDailyTransactionUpdated();

  // console.log(transactionsData);
  // console.log(monthlyTransaction?.transactionData);

  const handleRefresh = async () => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  };

  if (isLoading) {
    return <HomeSkeleton />;
  }

  return (
    <View style={PageStyles.mainContainer}>
      {/* Total balance card */}
      {monthlyTransaction && (
        <TotalBalanceCard
          income={monthlyTransaction?.income}
          expense={monthlyTransaction?.expense}
        />
      )}

      {/* Title for transactions */}
      <Text style={{ marginTop: 22, fontSize: 22, fontWeight: "800" }}>
        Recent Transactions :
      </Text>

      {/* Scrollable Transactions */}

      <View style={PageStyles.scrollableList}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
        >
          {!monthlyTransaction?.transactionData?.length && (
            <Text style={{ fontWeight: "600", fontSize: 20, color: "red" }}>
              No transactions yet !!!
            </Text>
          )}

          {monthlyTransaction?.transactionData && (
            <TransactionAccordion
              dailyData={monthlyTransaction?.transactionData}
            />
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const PageStyles = StyleSheet.create({
  mainContainer: {
    width: "90%",
    alignSelf: "center",
    flex: 1,
  },
  scrollableList: {
    marginTop: 12,
    flex: 1,
    maxHeight: screenHeight * 0.5,
  },
});
