import { TotalBalanceCard, TransactionCard } from "@/components/Home";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function HomeScreen() {
  return (
    <View style={homePageStyles.mainContainer}>
      {/* Total balance card */}
      <TotalBalanceCard />

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
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
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
