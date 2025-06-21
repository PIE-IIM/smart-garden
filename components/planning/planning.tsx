import { View, StyleSheet, Text, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { Vegetable } from "@/models/models";

type PlanningProps = {
  vegetablesOnPlanning: Vegetable;
};

export const Planning = ({ vegetablesOnPlanning }: PlanningProps) => {
  const [vegetables, setVegetables] = useState<Vegetable>();

  const months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  useEffect(() => {
    setVegetables(vegetablesOnPlanning)
  },[vegetablesOnPlanning])

  return (
    <>
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollContainer}
          showsHorizontalScrollIndicator={true}
        >
          <View style={styles.monthLabelContainer}>
            {months.map((month) => (
              <Text style={styles.monthLabel} key={month}>
                {month}
              </Text>
            ))}
          </View>
          <View style={styles.vegetablesContainer}>
            {vegetables?.map((vegetable) => (
              <View style={styles.vegetableElement}>
                <View style={styles.vegetableLabel}>
                  <Text>{vegetable.name}</Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  monthLabelContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
    paddingTop: 50,
    paddingBottom: 16,
  },
  scrollContainer: {
    height: "auto",
    display: "flex",
    flexDirection: "row",
  },
  monthLabel: {
    fontSize: 14,
    transform: [{ rotate: "-35deg" }],
    textAlign: "left",
  },
  vegetablesContainer: {
    display: "flex",
    flexDirection: "column",
    borderTopColor: "#E2E2E2",
    borderTopWidth: 1,
  },
  vegetableElement: {
    width: "100%",
    height: 100,
    borderBottomColor: "#E2E2E2",
    borderBottomWidth: 1,
  },
  vegetableLabel: {
    width: "15%",
    height: "100%",
    backgroundColor: "FFFDF0",
    borderRightColor: "#E2E2E2",
    borderRightWidth: 1,
    boxShadow: "6px 0px 33px -13px rgba(52, 52, 57, 0.18)",
  },
});
