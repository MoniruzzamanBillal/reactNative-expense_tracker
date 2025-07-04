import { Image, ScrollView, View } from "react-native";
import { Text } from "react-native-paper";

export default function Index() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Text>Edit app/index.tsx to edit this screen.</Text>
        <Text>Adding new text , for testing !!!</Text>
        <Text>Adding new text , for testing !!!</Text>
        <Image
          source={require("@/assets/images/revenue-i1.png")}
          style={{ height: 100, width: 100 }}
        />
      </View>
    </ScrollView>
  );
}
