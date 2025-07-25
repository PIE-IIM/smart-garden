import { Planning } from "@/components/planning/planning";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import { NavBarGardenSection } from "@/components/navGardenSection/navbar";
import { useEffect, useState } from "react";
import { GardenVegetable, Vegetable } from "@/models/models";
import useUseCase from "@/hooks/useUseCase";
import GardenSection from "./garden-section";
import { Header } from "@/components/header/header";
import { SensorCard } from "@/components/sensor/sensorCard";

export default function Garden() {

  const [currentSection, setCurrentSection] = useState<string>('plantes');
  const [gardenVegetables, setGardenVegetables] = useState<GardenVegetable[]>([]);
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

  const fakeMeasures = [
    {
      temperature: '25°',
      luminosity: '71%',
      humidity: '50%',
    },
    {
      temperature: '32°',
      luminosity: '75%',
      humidity: '40%',
    }
  ]

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
          {currentSection === 'capteurs' && (
            <View style={styles.sensorsContainer}>
              <SensorCard name='Capteur 1' measures={fakeMeasures[0]} />
              <SensorCard name='Capteur 2' measures={fakeMeasures[1]} />
            </View>
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
  sensorsContainer: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    gap: 16
  }
});
