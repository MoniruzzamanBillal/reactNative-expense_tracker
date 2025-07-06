import { TTransaction } from "@/types/Transaction.tyes";
import { COLORS } from "@/utils/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { format } from "date-fns";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

const typeOptions = {
  income: "income",
  expense: "expense",
};

export default function TransactionCard({
  transactionData,
}: {
  transactionData: TTransaction;
}) {
  // console.log(transactionData);

  return (
    <View style={cardStyles.container}>
      {/* body section  */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* left title section  */}
        <View
          style={{
            flex: 1,
            flexDirection: "row",

            alignItems: "center",
            width: "80%",
            columnGap: 14,
          }}
        >
          {/* icon section  */}
          <View>
            {transactionData?.type === typeOptions?.income ? (
              <MaterialCommunityIcons
                name="cash-multiple"
                size={35}
                color="green"
              />
            ) : (
              <MaterialCommunityIcons name="cash-minus" size={38} color="red" />
            )}
          </View>

          {/* title , description  */}
          <View>
            <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 3 }}>
              {transactionData?.description}
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "500" }}>
              {" "}
              {transactionData?.title}{" "}
            </Text>
          </View>
        </View>

        {/*  */}
        {/* right money section  */}
        <View
          style={{
            alignItems: "flex-end",
            width: "20%",
          }}
        >
          {/* money section  */}
          <View
            style={{
              flexDirection: "row",
              alignContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
                color:
                  transactionData.type === typeOptions.income
                    ? COLORS.income
                    : COLORS.expense,
              }}
            >
              +৳
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                color:
                  transactionData.type === typeOptions.income
                    ? COLORS.income
                    : COLORS.expense,
              }}
            >
              {transactionData?.amount}
            </Text>
          </View>

          {/* date section  */}
          <Text
            style={{ fontSize: 13, fontWeight: "600", color: COLORS.textLight }}
          >
            {format(new Date(transactionData?.createdAt), "d MMMM, yyyy")}
          </Text>
        </View>

        {/*  */}
      </View>
    </View>
  );
}

const cardStyles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: "column",
    backgroundColor: COLORS.background,
    width: "45%",
    padding: 14,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
});
