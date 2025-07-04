import { TotalBalanceCard, TransactionCard } from "@/components/Home";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function HomeScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={homePageStyles.mainContainer}>
        {/* total balance card  */}
        <TotalBalanceCard />

        {/*  */}
        <Text style={{ marginTop: 38, fontSize: 22, fontWeight: "600" }}>
          Recent Transactions{" "}
        </Text>

        {/* transactions card  */}
        <View style={{ marginTop: 20 }}>
          <TransactionCard />
        </View>
      </View>
    </ScrollView>
  );
}

const homePageStyles = StyleSheet.create({
  mainContainer: {
    width: "92%",
    margin: "auto",
    paddingVertical: 20,
  },
});
