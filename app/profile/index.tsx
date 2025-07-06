// app/index.tsx (mise à jour)
import useUseCase from "@/hooks/useUseCase";
import { router } from "expo-router";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Profile() {
  const { gatewayUseCase } = useUseCase();

  const logout = async () => {
    await gatewayUseCase.userUseCases.logout();
    router.replace('/login');
  }

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => logout()}>
        <Text style={styles.buttonText}>Se déconnecter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
