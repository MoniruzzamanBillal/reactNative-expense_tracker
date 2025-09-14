import { TTransaction } from "@/types/Transaction.tyes";
import { COLORS } from "@/utils/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { format } from "date-fns";
import { useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import Collapsible from "react-native-collapsible";
import { Text } from "react-native-paper";
import TransactionCard from "./TransactionCard";

type TDailyData = {
  date: string;
  expense: number;
  income: number;
  transactions: TTransaction[];
};

type TProps = {
  dailyData: TDailyData[];
};

export default function TransactionAccordion({ dailyData }: TProps) {
  const [activeDate, setActiveDate] = useState<string | null>(null);

  // console.log(dailyData);

  const toggleAccordion = (date: string) => {
    setActiveDate(activeDate === date ? null : date);
  };

  return (
    <View>
      {dailyData &&
        dailyData?.map((day: TDailyData) => {
          const isActive = activeDate === day?.date;

          return (
            <View key={day?.date} style={styles.accordionItem}>
              {/* Accordion Header */}

              <TouchableOpacity
                onPress={() => toggleAccordion(day?.date)}
                style={styles.header}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.date}>
                    {format(new Date(day?.date as string), "d MMMM, yyyy")}
                  </Text>
                  <Text
                    style={{
                      fontSize: 8,
                      fontWeight: 700,
                      color: COLORS.primary,
                    }}
                  >
                    {" , "}
                    {format(
                      new Date(day?.transactions[0]?.createdAt as string),
                      "EEEE"
                    )}
                  </Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View style={styles.amounts}>
                    <Text style={styles.income}>+৳{day?.income}</Text>
                    <Text style={styles.expense}>-৳{day?.expense}</Text>
                  </View>
                  <MaterialCommunityIcons
                    name={isActive ? "chevron-up" : "chevron-down"}
                    size={24}
                    color="#333"
                    style={{ marginLeft: 8 }}
                  />
                </View>
              </TouchableOpacity>

              {/* Collapsible Content */}
              <Collapsible collapsed={activeDate !== day?.date}>
                <FlatList
                  style={{ paddingHorizontal: 10 }}
                  data={day?.transactions}
                  keyExtractor={(item, index) => item?._id ?? index.toString()}
                  renderItem={({ item }) => (
                    <TransactionCard transactionData={item} />
                  )}
                />
              </Collapsible>
            </View>
          );
        })}
    </View>
  );
}

const styles = StyleSheet.create({
  accordionItem: {
    marginBottom: 12,
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 4,
    padding: 2,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  header: {
    padding: 12,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  date: {
    fontSize: 16,
    fontWeight: "bold",
  },
  amounts: {
    flexDirection: "row",
    columnGap: 12,
  },
  income: {
    color: "green",
    fontWeight: "bold",
  },
  expense: {
    color: "red",
    fontWeight: "bold",
  },
});
