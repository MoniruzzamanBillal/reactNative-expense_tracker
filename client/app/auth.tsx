import { useUserContext } from "@/context/user.context";
import { userUserLogin } from "@/hooks/Login.hooks";
import { COLORS } from "@/utils/colors";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import Toast from "react-native-toast-message";

export default function AuthScreen() {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const router = useRouter();

  const { handleSetUser, handleSetToken, user } = useUserContext();

  const { mutateAsync: loginUser } = userUserLogin();

  console.log(user);

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

    const result = await loginUser(payload);

    if (result?.success) {
      const successMessage = result?.message;

      const userData = result?.data;
      const token = result?.token;

      const userPayload = {
        _id: userData?._id,
        name: userData?.name,
        email: userData?.email,
      };

      handleSetToken(token);
      handleSetUser(userPayload);

      Toast.show({
        type: "success",
        text1: successMessage,
        position: "top",
      });

      router.replace("/");
    }
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
    alignSelf: "center",
    // justifyContent: "center",
    // alignItems: "center",
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
