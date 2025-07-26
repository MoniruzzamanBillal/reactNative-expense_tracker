import { HistoryCard } from "@/components/History";
import { View } from "react-native";

export default function YearlyHistoryScreen() {
  return (
    <View style={{ width: "94%", alignSelf: "center", marginTop: 10 }}>
      <HistoryCard />
    </View>
  );
}
