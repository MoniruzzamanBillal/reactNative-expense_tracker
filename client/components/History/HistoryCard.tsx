import { COLORS } from "@/utils/colors";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function HistoryCard() {
  return (
    <View style={historyCardStyle.container}>
      <Text style={{ fontWeight: 700, fontSize: 20, marginBottom: 5 }}>
        {" "}
        January{" "}
      </Text>

      {/* money section  */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          columnGap: 6,
        }}
      >
        {/* income section  */}
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "700",
              color: COLORS.income,
              //   color:
              //     transactionData.type === typeOptions.income
              //       ? COLORS.income
              //       : COLORS.expense,
            }}
          >
            Income :
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              color: COLORS.income,
              //   color:
              //     transactionData.type === typeOptions.income
              //       ? COLORS.income
              //       : COLORS.expense,
            }}
          >
            ৳
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              color: COLORS.income,
              //   color:
              //     transactionData.type === typeOptions.income
              //       ? COLORS.income
              //       : COLORS.expense,
            }}
          >
            200
          </Text>
        </View>

        {/* expense section  */}
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
            columnGap: 1,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "700",
              color: COLORS.income,
              //   color:
              //     transactionData.type === typeOptions.income
              //       ? COLORS.income
              //       : COLORS.expense,
            }}
          >
            Expense :
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              color: COLORS.income,
              //   color:
              //     transactionData.type === typeOptions.income
              //       ? COLORS.income
              //       : COLORS.expense,
            }}
          >
            ৳
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              color: COLORS.income,
              //   color:
              //     transactionData.type === typeOptions.income
              //       ? COLORS.income
              //       : COLORS.expense,
            }}
          >
            200
          </Text>
        </View>

        {/* total balance section  */}
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "700",

              //   color:
              //     transactionData.type === typeOptions.income
              //       ? COLORS.income
              //       : COLORS.expense,
            }}
          >
            Balance :
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              color: COLORS.income,
              //   color:
              //     transactionData.type === typeOptions.income
              //       ? COLORS.income
              //       : COLORS.expense,
            }}
          >
            ৳
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",

              //   color:
              //     transactionData.type === typeOptions.income
              //       ? COLORS.income
              //       : COLORS.expense,
            }}
          >
            200
          </Text>
        </View>

        {/*  */}
      </View>
    </View>
  );
}

const historyCardStyle = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: "column",
    backgroundColor: COLORS.background,
    padding: 10,
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
});
