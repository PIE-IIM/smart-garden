import { Stack } from "expo-router";
import StoreProvider from "./StoreProvider";
import { Navbar } from "@/components/navbar/navbar";
import * as SystemUI from "expo-system-ui";
import * as NavigationBar from "expo-navigation-bar";
import { useEffect } from "react";

export default function RootLayout() {
  useEffect(() => {
    NavigationBar.setVisibilityAsync("hidden");
  }, []);
  return (
    <StoreProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="search" />
        <Stack.Screen name="garden" />
        <Stack.Screen name="profile" />
      </Stack>
      <Navbar />
    </StoreProvider>
  );
}
