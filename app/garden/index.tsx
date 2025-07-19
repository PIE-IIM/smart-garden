import { Planning } from "@/components/planning/planning";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import { NavBarGardenSection } from "@/components/navGardenSection/navbar";
import { useEffect, useState } from "react";
import { Vegetable } from "@/models/models";
import useUseCase from "@/hooks/useUseCase";
import GardenSection from "./garden-section";
import { Header } from "@/components/header/header";

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
        <View>
          <Header title={"Mon potager"} />
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
    paddingTop: "15%",
    gap: 16,
    backgroundColor: "#FFFDF0",
  },
  scrollViewContainer: {
    width: '100%',
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
