import {
  HomeSkeleton,
  TotalBalanceCard,
  TransactionAccordion,
} from "@/components/Home";

import { useGetMonthlyTransactionUpdated } from "@/hooks/transaction.hooks";

import { useState } from "react";
import {
  Dimensions,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { Text } from "react-native-paper";

import { COLORS } from "@/utils/colors";
import { Picker } from "@react-native-picker/picker";

const screenHeight = Dimensions.get("window").height;

const monthsData = [
  { label: "January", value: 1 },
  { label: "February", value: 2 },
  { label: "March", value: 3 },
  { label: "April", value: 4 },
  { label: "May", value: 5 },
  { label: "June", value: 6 },
  { label: "July", value: 7 },
  { label: "August", value: 8 },
  { label: "September", value: 9 },
  { label: "October", value: 10 },
  { label: "November", value: 11 },
  { label: "December", value: 12 },
];

export default function MonthlyTransactionScreen() {
  const [refreshing, setRefreshing] = useState(false);

  const currentMonth = new Date().getMonth() + 1;
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  const {
    data: monthlyTransaction,
    isLoading,
    refetch,
  } = useGetMonthlyTransactionUpdated();

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

      {/* month select input  */}

      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18 }}>Current Month : </Text>

        <Picker
          style={{
            fontSize: 18,
            padding: 4,
            borderColor: COLORS?.border,
            borderRadius: 4,
          }}
          selectedValue={selectedMonth}
          onValueChange={(value) => setSelectedMonth(value)}
        >
          {monthsData.map((month) => (
            <Picker.Item
              key={month.value}
              label={month.label}
              value={month.value}
            />
          ))}
        </Picker>
      </View>

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
