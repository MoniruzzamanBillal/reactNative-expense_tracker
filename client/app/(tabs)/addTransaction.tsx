import { COLORS } from "@/utils/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

const transactionConstants = {
  income: "income",
  expense: "expense",
};

export default function AddTransactionScreen() {
  const [type, setType] = useState<string>(transactionConstants?.income);
  const [amount, setAmount] = useState<string | null>(null);

  // * for handling the number input
  const handleTextChange = (text: string) => {
    const regex = /^[0-9]*\.?[0-9]*$/;

    if (regex.test(text)) {
      setAmount(text);
    }
  };

  // ! for adding new transaction
  const handleAddTransaction = async () => {
    console.log("transaction added !!!");
  };

  return (
    <View style={addTransactionStyles.mainContainer}>
      <View style={addTransactionStyles.pageWrapper}>
        {/* income , expense button view  */}
        <View style={{ flexDirection: "row", columnGap: 16 }}>
          {/* income button  */}
          <TouchableOpacity
            style={[
              addTransactionStyles.typeButton,
              type === transactionConstants?.income &&
                addTransactionStyles.typeButtonActive,
            ]}
            onPress={() => setType(transactionConstants?.income)}
          >
            <MaterialCommunityIcons
              name="arrow-up"
              size={18}
              color={
                type === transactionConstants?.income ? COLORS.white : "green"
              }
            />
            <Text
              style={[
                addTransactionStyles.typeButtonText,
                type === transactionConstants?.income &&
                  addTransactionStyles.typeButtonTextActive,
              ]}
            >
              Income{" "}
            </Text>
          </TouchableOpacity>

          {/* expense button  */}
          <TouchableOpacity
            style={[
              addTransactionStyles.typeButton,
              type === transactionConstants?.expense &&
                addTransactionStyles.typeButtonActive,
            ]}
            onPress={() => setType(transactionConstants?.expense)}
          >
            <MaterialCommunityIcons
              name="arrow-down"
              size={18}
              color={
                type === transactionConstants?.expense ? COLORS.white : "red"
              }
            />
            <Text
              style={[
                addTransactionStyles.typeButtonText,
                type === transactionConstants?.expense &&
                  addTransactionStyles.typeButtonTextActive,
              ]}
            >
              Expense
            </Text>
          </TouchableOpacity>

          {/*  */}
        </View>

        {/* horizontal line  */}
        <View
          style={{
            height: 1,
            width: "100%",
            backgroundColor: COLORS.border,
            margin: 15,
          }}
        />

        {/* money input field  */}
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: COLORS.border,
          }}
        >
          <TextInput
            placeholder="+৳ 00.0"
            keyboardType="numeric"
            onChangeText={handleTextChange}
            style={{
              borderWidth: 0,
              backgroundColor: "transparent",
              padding: 0,
              fontSize: 22,
            }}
            theme={{
              colors: {
                primary: "transparent",
                background: "transparent",
              },
            }}
          />
        </View>

        {/* title input field  */}
        <View
          style={{
            width: "100%",
            borderBottomWidth: 1,
            borderBottomColor: COLORS.border,
          }}
        >
          <TextInput
            placeholder="Transaction Title "
            style={{
              borderWidth: 0,
              backgroundColor: "transparent",
              padding: 0,
              fontSize: 20,
            }}
            theme={{
              colors: {
                primary: "transparent",
                background: "transparent",
              },
            }}
          />
        </View>

        {/* transaction details input field  */}
        <View
          style={{
            width: "100%",
            borderBottomWidth: 1,
            borderBottomColor: COLORS.border,
          }}
        >
          <TextInput
            placeholder="Transaction Description "
            style={{
              borderWidth: 0,
              backgroundColor: "transparent",
              padding: 0,
              fontSize: 20,
            }}
            theme={{
              colors: {
                primary: "transparent",
                background: "transparent",
              },
            }}
          />
        </View>

        <Button
          mode="contained"
          onPress={handleAddTransaction}
          style={{ marginTop: 20, backgroundColor: COLORS.primary }}
        >
          Save Transaction
        </Button>
      </View>
    </View>
  );
}

const addTransactionStyles = StyleSheet.create({
  mainContainer: {
    width: "90%",
    margin: "auto",
    paddingVertical: 20,
    flex: 1,
  },

  pageWrapper: {
    margin: "auto",
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

  typeButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 3,
    padding: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  typeButtonActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },

  typeButtonText: {
    color: COLORS.text,
    fontSize: 14,
    fontWeight: "500",
  },

  typeButtonTextActive: {
    color: COLORS.white,
  },

  //
});
