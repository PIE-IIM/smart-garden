// app/index.tsx (mise à jour)
import { View, StyleSheet, Text } from "react-native";

export default function Garden() {
  return (
    <View style={styles.container}>
      <Text>Garden</Text>
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
});
