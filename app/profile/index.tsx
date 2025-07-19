import { Header } from "@/components/header/header";
import useUseCase from "@/hooks/useUseCase";
import { User } from "@/models/models";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import GrinningFace from "../../assets/icons/grinningFace.svg";
import DisconnectIcon from "../../assets/icons/disconnectIcon.svg";


export default function Profile() {
  const [user, setUser] = useState<User>();
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
      <View style={styles.userBanner}>
        <View style={styles.profilPictureContainer}>
          <GrinningFace width={64} height={64} style={{ margin: 'auto' }} />
        </View>
        <View style={styles.infos}>
          <Text style={styles.userName}>{user?.name}</Text>
          <Text style={styles.email}>{user?.email}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.menuBtn} onPress={() => logout()}>
        <DisconnectIcon style={styles.disconnectIcon} />
        <Text style={styles.menuLabel}>Déconnexion</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFDF0",
    paddingTop: "15%",
    gap: 16,
  },
  userBanner: {
    backgroundColor: "#EBECD2",
    width: "85%",
    height: 'auto',
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'row',
    padding: 8,
    gap: 16,
    marginBottom: 28
  },
  profilPictureContainer: {
    width: 100,
    height: 100,
    borderRadius: 16,
  },
  infos: {
    marginTop: 'auto',
    marginBottom: 'auto',
    gap: 8
  },
  userName: {
    fontWeight: 500,
    fontSize: 18,
  },
  email: {
    fontWeight: 400,
    fontSize: 14,
  },
  menuBtn: {
    display: 'flex',
    flexDirection: 'row',
    width: '85%',
    gap: 28
  },
  menuLabel: {
    marginTop: 'auto',
    marginBottom: 'auto',
    fontWeight: 500,
    fontSize: 16
  },
  disconnectIcon: {
    width: 28,
    height: 28,
  }
});
