import { useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import Collapsible from "react-native-collapsible";
import { Text } from "react-native-paper";
import TransactionCard from "./TransactionCard";

import { format } from "date-fns";

export default function TransactionAccordion({ dailyData }) {
  const [activeDate, setActiveDate] = useState<string | null>(null);

  const toggleAccordion = (date: string) => {
    setActiveDate(activeDate === date ? null : date);
  };

  return (
    <View>
      {dailyData &&
        dailyData?.map((day) => (
          <View key={day.date} style={styles.accordionItem}>
            {/* Accordion Header */}
            <TouchableOpacity
              onPress={() => toggleAccordion(day.date)}
              style={styles.header}
            >
              <Text style={styles.date}>
                {format(new Date(day.date as string), "d MMMM, yyyy")}
              </Text>
              <View style={styles.amounts}>
                <Text style={styles.income}>+৳{day.income}</Text>
                <Text style={styles.expense}>-৳{day.expense}</Text>
              </View>
            </TouchableOpacity>

            {/* Collapsible Content */}
            <Collapsible collapsed={activeDate !== day.date}>
              <FlatList
                data={day.transactions}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                  <TransactionCard transactionData={item} />
                )}
              />
            </Collapsible>
          </View>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  accordionItem: {
    marginBottom: 10,
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
    backgroundColor: "#f5f5f5",
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
