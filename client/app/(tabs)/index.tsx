import { TotalBalanceCard } from "@/components/Home";
import { ScrollView, StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={homePageStyles.mainContainer}>
        {/* total balance card  */}
        <TotalBalanceCard />
      </View>
    </ScrollView>
  );
}

const homePageStyles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 20,
  },
});
