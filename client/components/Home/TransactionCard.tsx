import { COLORS } from "@/utils/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function TransactionCard() {
  return (
    <View style={cardStyles.container}>
      {/* body section  */}
      <View
        style={{
          flexDirection: "row",
          columnGap: 30,
          justifyContent: "space-between",
        }}
      >
        {/* left title section  */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            columnGap: 12,
          }}
        >
          {/* icon section  */}
          <View>
            <MaterialCommunityIcons
              name="cash-multiple"
              size={35}
              color="green"
            />
            {/* <MaterialCommunityIcons name="cash-minus" size={38} color="red" /> */}
          </View>

          {/* title , description  */}
          <View>
            <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 3 }}>
              description{" "}
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "500" }}>title </Text>
          </View>
        </View>

        {/*  */}
        {/* right money section  */}
        <View>
          {/* money section  */}
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignContent: "center",
              columnGap: 2,
            }}
          >
            <Text
              style={{ fontSize: 14, fontWeight: "bold", color: COLORS.income }}
            >
              +৳
            </Text>
            <Text
              style={{ fontSize: 18, fontWeight: "600", color: COLORS.income }}
            >
              5555
            </Text>
          </View>

          {/* date section  */}
          <Text
            style={{ fontSize: 13, fontWeight: "600", color: COLORS.textLight }}
          >
            4 july , 2025
          </Text>
        </View>

        {/*  */}
      </View>
    </View>
  );
}

const cardStyles = StyleSheet.create({
  container: {
    // margin: "auto",
    // flex: 1,
    flexDirection: "column",
    backgroundColor: COLORS.background,
    padding: 14,
    // justifyContent: "flex-start",
    // alignItems: "flex-start",
    alignSelf: "flex-start",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
});
