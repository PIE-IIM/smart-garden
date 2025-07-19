import { Stack, useRouter } from "expo-router";
import StoreProvider from "./StoreProvider";
import { Navbar } from "@/components/navbar/navbar";
import * as NavigationBar from "expo-navigation-bar";
import { useEffect, useState } from "react";
import { StorageActions } from "@/store/actions/storageActions";

export default function RootLayout() {

  const [isMounted, setIsMounted] = useState<boolean>(false);
  const router = useRouter();
  const storageActions = new StorageActions

  const userIsConnected: () => Promise<void> = async () => {
    const token = await storageActions.getToken('authToken'); //I don't call usecase architecture because layout is not wrap by Provider
    if (token === null) {
      router.replace('/login');
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      userIsConnected()
    }
  }, [isMounted])

  useEffect(() => {
    NavigationBar.setVisibilityAsync("hidden");
  }, []);
  return (
    <StoreProvider>
      <>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="search" />
          <Stack.Screen name="garden" />
          <Stack.Screen name="profile" />
        </Stack>
        <Navbar />
      </>
    </StoreProvider >
  );
}