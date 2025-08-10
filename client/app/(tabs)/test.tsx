import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function TestScreen() {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setOpen(!open)} style={styles.header}>
        <Text style={styles.headerText}>Product Information</Text>
      </Pressable>

      {open && (
        <View style={styles.content}>
          <Text>Our flagship product combines cutting-edge technology...</Text>
          <Text>Key features include advanced processing capabilities...</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 10, borderWidth: 1, borderColor: "#ccc" },
  header: { padding: 10, backgroundColor: "#f5f5f5" },
  headerText: { fontWeight: "bold" },
  content: { padding: 10, backgroundColor: "#fff" },
});
