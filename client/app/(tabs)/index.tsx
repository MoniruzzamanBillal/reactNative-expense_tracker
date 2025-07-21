import {
  HomeSkeleton,
  TotalBalanceCard,
  TransactionCard,
} from "@/components/Home";
import { useGetMonthlyTransaction } from "@/hooks/transaction.hooks";
import { TTransaction } from "@/types/Transaction.tyes";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

const screenHeight = Dimensions.get("window").height;

export default function HomeScreen() {
  const { data: monthlyTransaction, isLoading } = useGetMonthlyTransaction();

  // console.log(monthlyTransaction);

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
      <Text style={{ marginTop: 22, fontSize: 22, fontWeight: "800" }}>
        Recent Transactions :
      </Text>

      {/* Scrollable Transactions */}

      <View style={homePageStyles.scrollableList}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          {!monthlyTransaction?.transactions?.length && (
            <Text style={{ fontWeight: "600", fontSize: 20, color: "red" }}>
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
    marginTop: 5,
    flex: 1,
    maxHeight: screenHeight * 0.5,
  },
});
