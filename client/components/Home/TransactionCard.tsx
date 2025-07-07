import { useDeleteTransaction } from "@/hooks/transaction.hooks";
import { TTransaction } from "@/types/Transaction.tyes";
import { COLORS } from "@/utils/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { format } from "date-fns";
import { Animated, StyleSheet, TouchableOpacity, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { Text } from "react-native-paper";
import Toast from "react-native-toast-message";

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

  const { mutateAsync: deleteTransactionData } = useDeleteTransaction();

  // ! for deleting transaction data
  const handleDeleteTransaction = async (transactionData: TTransaction) => {
    console.log("delete transaction !!!");

    const result = await deleteTransactionData(transactionData?._id!);

    if (result?.success) {
      const successMessage = result?.message;

      Toast.show({
        type: "success",
        text1: successMessage,
        position: "bottom",
      });
    }
  };

  // ! for updating transaction data
  const handleUpdateTransaction = () => {
    console.log("update transaction !!!");
  };

  // Left action for swipe right (left-to-right)
  const renderLeftActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: "clamp",
    });
    return (
      <Animated.View
        style={[cardStyles.leftAction, { transform: [{ scale }] }]}
      >
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => handleDeleteTransaction(transactionData)}
        >
          <MaterialCommunityIcons name="delete" size={30} color="white" />
        </TouchableOpacity>
      </Animated.View>
    );
  };

  // Right action for swipe left (right-to-left)
  const renderRightActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });

    return (
      <Animated.View
        style={[cardStyles.rightAction, { transform: [{ scale }] }]}
      >
        <TouchableOpacity activeOpacity={0.6}>
          <MaterialCommunityIcons name="pencil" size={30} color="white" />
        </TouchableOpacity>
      </Animated.View>
    );
  };
  return (
    <Swipeable
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}
      overshootLeft={false}
      overshootRight={false}
    >
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
                <MaterialCommunityIcons
                  name="cash-minus"
                  size={38}
                  color="red"
                />
              )}
            </View>

            {/* title , description  */}
            <View>
              <Text
                style={{ fontSize: 18, fontWeight: "600", marginBottom: 3 }}
              >
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
              style={{
                fontSize: 13,
                fontWeight: "600",
                color: COLORS.textLight,
              }}
            >
              {format(
                new Date(transactionData?.createdAt as string),
                "d MMMM, yyyy"
              )}
            </Text>
          </View>

          {/*  */}
        </View>
      </View>
    </Swipeable>
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

  leftAction: {
    width: 70,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },

  rightAction: {
    width: 70,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
});
