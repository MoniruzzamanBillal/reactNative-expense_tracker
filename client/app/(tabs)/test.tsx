import { TransactionAccordion } from "@/components/Home";
import { useGetDailyTransactionUpdated } from "@/hooks/transaction.hooks";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function TestScreen() {
  const [open, setOpen] = useState(false);

  const { data: transactionsData, isLoading } = useGetDailyTransactionUpdated();

  console.log(transactionsData);

  return (
    <View style={styles.container}>
      <TransactionAccordion dailyData={transactionsData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    paddingTop: 10,
  },
});
