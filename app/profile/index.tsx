import { Header } from "@/components/header/header";
import useUseCase from "@/hooks/useUseCase";
import { User } from "@/models/models";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import GrinningFace from "../../assets/icons/grinningFace.svg";
import DisconnectIcon from "../../assets/icons/disconnectIcon.svg";
import ArrowMenu from "../../assets/icons/arrow-menu.svg";
import { MenuNavigation } from "@/components/menuNavigation/menuNavigation";
import { UserBanner } from "@/components/userBanner/userBanner";


export default function Profile() {
  const [user, setUser] = useState<User>({
    name: '',
    email: ''
  });
  const { gatewayUseCase } = useUseCase();

  const logout = async () => {
    await gatewayUseCase.userUseCases.logout();
    router.replace('/login');
  }

  useEffect(() => {
    if (gatewayUseCase.userUseCases.user) {
      setUser(gatewayUseCase.userUseCases.user)
    }
  }, [gatewayUseCase.userUseCases.user])

  return (
    <View style={styles.container}>
      <Header title="Mon profil" />
      <UserBanner name={user.name} email={user.email} />
      <MenuNavigation label="Déconnexion" callback={() => logout()}>
        <DisconnectIcon style={styles.disconnectIcon} />
      </MenuNavigation>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: "15%",
    gap: 16,
    backgroundColor: "#FFFDF0",
  },
  disconnectIcon: {
    width: 28,
    height: 28,
  },
});
