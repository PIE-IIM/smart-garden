import { Planning } from "@/components/planning/planning";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import { vegetablesFixture } from "@/vegetables";
import { NavBarGardenSection } from "@/components/navGardenSection/navbar";
import { useEffect, useState } from "react";
import { VegetableCardGarden } from "@/components/vegetableCardGarden/vegetableCardGarden";
import { Vegetable } from "@/models/models";
import { VegetablesGardenList } from "@/components/vegetableCardGarden/vegetablesGardenList";
import useUseCase from "@/hooks/useUseCase";
import { router } from "expo-router";
import GardenSection from "./garden-section";

export default function Garden() {

  const [currentSection, setCurrentSection] = useState<string>('plantes');
  const [gardenVegetables, setGardenVegetables] = useState<Vegetable[]>([]);
  const [error, setError] = useState<string | null>(null);

  const { gatewayUseCase } = useUseCase();

  const loadGardenVegetables = async () => {
    const response = await gatewayUseCase.userUseCases.loadGardenVegetables();
    if (response === "Failure") {
      setError('Erreur de chargement');
    }
  }

  useEffect(() => {
    loadGardenVegetables()
  }, [])

  useEffect(() => {
    if (gatewayUseCase.userUseCases.gardenVegetables) {
      setGardenVegetables(gatewayUseCase.userUseCases.gardenVegetables)
    }
  }, [gatewayUseCase.userUseCases.gardenVegetables])

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Mon potager</Text>
          <NavBarGardenSection currentSectionProps={currentSection} setCurrentSectionProps={setCurrentSection} />
        </View>
        <ScrollView style={styles.scrollViewContainer}>
          {error && (
            <Text style={styles.error}>{error}</Text>
          )}
          {currentSection === 'plantes' && (
            <GardenSection gardenVegetablesProps={gardenVegetables} />
          )}
          {currentSection === 'calendrier' && (
            <>
              <Planning vegetablesOnPlanning={gardenVegetables} />
            </>
          )}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFDF0",
    paddingTop: "15%"
  },
  scrollViewContainer: {
    width: '100%',
  },
  header: {
    paddingBottom: 16
  },
  title: {
    fontSize: 22,
    textAlign: "left",
    width: "85%",
    marginBottom: 16,
    fontWeight: 500
  },
  error: {
    fontSize: 18,
    textAlign: "center",
    width: "85%",
    marginBottom: 16,
    fontWeight: 500,
    color: "red",
  },
});
