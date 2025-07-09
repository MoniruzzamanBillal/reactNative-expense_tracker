import { COLORS } from "@/utils/colors";
import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import Toast from "react-native-toast-message";

export default function AuthScreen() {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  // ! for login
  const handleLogin = async () => {
    if (!email?.trim() || !password?.trim()) {
      Toast.show({
        type: "error",
        text1: "Missing Fields",
        text2: "Please enter both email and password",
        position: "top",
      });
      return;
    }

    const payload = { email, password };

    console.log(payload);
  };

  return (
    <View style={authStyles.mainContainer}>
      <View style={authStyles.wrapperContainer}>
        {/* image  */}
        <Image
          source={require("@/assets/images/revenue-i4.png")}
          style={authStyles.imageStyle}
        />

        <Text
          style={{
            fontWeight: "600",
            fontSize: 30,
            color: COLORS.text,
            textAlign: "center",
            paddingVertical: 10,
          }}
        >
          Welcome Back
        </Text>

        {/* login form  */}
        <View style={authStyles.loginForm}>
          <TextInput
            placeholder="Enter Email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={setEmail}
            value={email || ""}
          />
          <TextInput
            placeholder="Enter Password"
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password || ""}
          />
          <Button mode="contained" onPress={handleLogin}>
            Login{" "}
          </Button>
        </View>
      </View>
    </View>
  );
}

const authStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  wrapperContainer: {
    backgroundColor: "#f3f4f6",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderColor: "#d1d5db",
    borderWidth: 1,
    borderRadius: 8,
  },

  imageStyle: {
    height: 300,
    width: 300,
    marginVertical: 5,
  },

  loginForm: {
    marginTop: 20,
    flexDirection: "column",
    rowGap: 12,
  },

  //
});
