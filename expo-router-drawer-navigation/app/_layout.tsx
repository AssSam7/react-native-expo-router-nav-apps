import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerStyle: {
            backgroundColor: "#ffffff",
          },
          headerTintColor: "#8b5cf6",
          drawerStyle: {
            backgroundColor: "#ffffff",
          },
          drawerActiveTintColor: "#8b5cf6",
          drawerInactiveTintColor: "#64748b",
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            title: "Home title",
            drawerLabel: "Home label",
            drawerIcon: ({ color }) => (
              <FontAwesome name="home" color={color} size={24} />
            ),
          }}
        />
        <Drawer.Screen
          name="dashboard"
          options={{
            title: "Dashboard title",
            drawerLabel: "Dashboard label",
            drawerIcon: ({ color }) => (
              <FontAwesome name="dashboard" color={color} size={24} />
            ),
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            title: "Settings title",
            drawerLabel: "Settings label",
            drawerIcon: ({ color }) => (
              <FontAwesome name="cog" color={color} size={24} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
