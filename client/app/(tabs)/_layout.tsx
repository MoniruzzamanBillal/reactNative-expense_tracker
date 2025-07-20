import { COLORS } from "@/utils/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    // <AuthGuard>

    // </AuthGuard>

    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textLight,
        headerTitleAlign: "center",
        headerTitleStyle: {
          color: COLORS.primary,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="addTransaction"
        options={{
          title: "Add Transaction",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
