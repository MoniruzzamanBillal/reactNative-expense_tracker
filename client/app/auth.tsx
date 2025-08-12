import { useUserContext } from "@/context/user.context";
import { UseUserLogin } from "@/hooks/Login.hooks";
import { COLORS } from "@/utils/colors";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import Toast from "react-native-toast-message";

export default function AuthScreen() {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const router = useRouter();

  const { handleSetUser, handleSetToken } = useUserContext();

  const { mutateAsync: loginUser, isPending } = UseUserLogin();

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

    console.log(result);

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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      // keyboardVerticalOffset={100}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{ flex: 1, justifyContent: "center" }}
        showsVerticalScrollIndicator={false}
      >
        <View style={authStyles.mainContainer}>
          <View style={authStyles.wrapperContainer}>
            {/* image  */}
            <Image
              source={require("@/assets/images/revenue-i4.png")}
              // source={require("https://i.postimg.cc/fL0nJRzn/revenue-i4.png")}
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
              <Button
                mode="contained"
                onPress={handleLogin}
                disabled={isPending}
              >
                {isPending ? "Loggin in..." : "Login"}
              </Button>

              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Text> {"Don't Have any account ?"} </Text>

                <Pressable onPress={() => router.replace("/register")}>
                  <Text
                    style={{ color: "blue", textDecorationLine: "underline" }}
                  >
                    Sign Up{" "}
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const authStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
  },

  wrapperContainer: {
    width: "90%",
    alignSelf: "center",
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
