import { COLORS } from "@/utils/colors";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function TotalBalanceCard() {
  return (
    <View style={cardStyles.container}>
      {/* header , total balance section  */}
      <View style={{ marginBottom: 25 }}>
        <Text style={{ fontSize: 20, color: COLORS.text, fontWeight: "700" }}>
          Total Banalce
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignContent: "center",
            columnGap: 3,
          }}
        >
          <Text style={[cardStyles.title, { fontSize: 23 }]}>৳</Text>
          <Text style={[cardStyles.title, { fontSize: 30 }]}>5555</Text>
        </View>
      </View>
      {/*  */}

      {/* income expense section  */}
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          columnGap: 30,
        }}
      >
        {/* income view  */}
        <View>
          <Text
            style={{
              fontSize: 14,
              color: COLORS.income,
              fontWeight: "500",
              textAlign: "center",
              marginBottom: 4,
            }}
          >
            Income
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignContent: "center",
              columnGap: 3,
            }}
          >
            <Text
              style={{ fontSize: 14, fontWeight: "bold", color: COLORS.income }}
            >
              +৳
            </Text>
            <Text
              style={{ fontSize: 18, fontWeight: "500", color: COLORS.income }}
            >
              5555
            </Text>
          </View>
        </View>

        {/* horizontal line  */}
        <View
          style={{
            height: "100%",
            width: 1,
            backgroundColor: COLORS.border,
          }}
        />

        {/* expense view  */}
        <View>
          <Text
            style={{
              fontSize: 14,
              color: COLORS.expense,
              fontWeight: "500",
              textAlign: "center",
              marginBottom: 4,
            }}
          >
            Expense
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignContent: "center",
              columnGap: 3,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
                color: COLORS.expense,
              }}
            >
              +৳
            </Text>
            <Text
              style={{ fontSize: 18, fontWeight: "500", color: COLORS.expense }}
            >
              5555
            </Text>
          </View>
        </View>

        {/*  */}
      </View>

      {/*  */}
    </View>
  );
}

const cardStyles = StyleSheet.create({
  container: {
    margin: "auto",
    flex: 1,
    flexDirection: "column",
    backgroundColor: COLORS.background,
    padding: 14,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  title: {
    fontWeight: "bold",
    color: COLORS.text,
  },
});
