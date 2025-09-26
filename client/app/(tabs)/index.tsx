import {
  HomeSkeleton,
  TotalBalanceCard,
  TransactionCard,
} from "@/components/Home";
import { useGetDailyTransaction } from "@/hooks/transaction.hooks";
import { TTransaction } from "@/types/Transaction.tyes";
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

export default function HomeScreen() {
  const [refreshing, setRefreshing] = useState(false);

  const {
    data: monthlyTransaction,
    isLoading,
    refetch,
  } = useGetDailyTransaction();

  // console.log(monthlyTransaction);

  const handleRefresh = async () => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  };

  if (isLoading) {
    return <HomeSkeleton />;
  }

  return (
    <View style={homePageStyles.mainContainer}>
      {/* Total balance card */}
      {monthlyTransaction && (
        <TotalBalanceCard
          income={monthlyTransaction?.income}
          expense={monthlyTransaction?.expense}
        />
      )}

      {/* Title for transactions */}
      <Text style={{ marginTop: 12, fontSize: 22, fontWeight: "800" }}>
        Transactions :
      </Text>

      {/* Scrollable Transactions */}

      <View style={homePageStyles.scrollableList}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
        >
          {!monthlyTransaction?.transactions?.length && (
            <Text style={{ fontWeight: "600", fontSize: 24, color: "red" }}>
              No transactions yet !!!
            </Text>
          )}

          {monthlyTransaction?.transactions &&
            monthlyTransaction?.transactions?.map(
              (transaction: TTransaction) => (
                <TransactionCard
                  key={transaction?._id}
                  transactionData={transaction}
                />
              )
            )}
        </ScrollView>
      </View>
    </View>
  );
}

const homePageStyles = StyleSheet.create({
  mainContainer: {
    width: "90%",
    alignSelf: "center",
    flex: 1,
  },
  scrollableList: {
    marginTop: 4,
    flex: 1,
    maxHeight: screenHeight * 0.7,
  },
});
