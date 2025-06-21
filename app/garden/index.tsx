// app/index.tsx (mise à jour)
import { Planning } from "@/components/planning/planning";
import { View, StyleSheet, Text } from "react-native";
import { vegetablesFixture } from "@/vegetables";

export default function Garden() {
  return (
    <View style={styles.container}>
      <Planning vegetablesOnPlanning={vegetablesFixture} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
