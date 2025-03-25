import { useAppSelector, useAppStore } from "@/store/hooks";
import { useRef } from "react";
import { Button, ColorValue, Text, View } from "react-native";
import { Actions } from "@/store/actions/actions";
import { counterValue } from "@/store/selector/counterSelector";
import globalStyle from "@/styles/global";

export default function Index() {

  const value = useAppSelector(counterValue);
  const actionsRef = useRef(new Actions());

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        onPress={() => actionsRef.current.incrementAction()}
        title="Learn More"
        color={"black"}
        accessibilityLabel="Learn more about this purple button"
      />
      <Text>{value}</Text>
    </View>
  );
}
