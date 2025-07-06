import { TotalBalanceCard, TransactionCard } from "@/components/Home";
import { useGetMonthlyTransaction } from "@/hooks/transaction.hooks";
import { TTransaction } from "@/types/Transaction.tyes";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function HomeScreen() {
  const { data: monthlyTransaction, isLoading } = useGetMonthlyTransaction();

  // console.log(monthlyTransaction);

  return (
    <View style={homePageStyles.mainContainer}>
      {/* Total balance card */}
      <TotalBalanceCard
        income={monthlyTransaction?.income}
        expense={monthlyTransaction?.expense}
      />

      {/* Title for transactions */}
      <Text style={{ marginTop: 40, fontSize: 22, fontWeight: "600" }}>
        Recent Transactions
      </Text>

      {/* Scrollable Transactions */}
      <View style={{ marginTop: 20, flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
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
    margin: "auto",
    paddingVertical: 20,
    flex: 1,
  },
});
