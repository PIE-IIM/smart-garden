import { Planning } from "@/components/planning/planning";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import { vegetablesFixture } from "@/vegetables";
import { NavBarGardenSection } from "@/components/navGardenSection/navbar";
import { useState } from "react";
import { VegetableCardGarden } from "@/components/vegetableCardGarden/vegetableCardGarden";
import { Vegetable } from "@/models/models";
import { VegetablesGardenList } from "@/components/vegetableCardGarden/vegetablesGardenList";

export default function Garden() {

  const [currentSection, setCurrentSection] = useState<string>('plantes');

  const vegetable: Vegetable = {
    id: "accfa6d1-f2fa-4e85-94e3-5776e438573f",
    name: "Tomate",
    description:
      "Plante fruitière très populaire, nécessite beaucoup de lumière et de chaleur.",
    specifications: [
      "Besoin ensoleillement élevé",
      "Sensible au mildiou",
      "Croissance verticale",
    ],
    sowing: ["février", "mars", "avril"],
    plantation: ["avril", "mai", "juin"],
    harvest: ["juillet", "août", "septembre", "octobre"],
    affinity: ["Basilic", "Carotte", "Oignon"],
    bad_neighbors: ["Pomme de terre", "Fenouil"],
    images: ["https://sxcwavkyzcytbcdnhceq.supabase.co/storage/v1/object/public/garden//tomate.png"]
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Mon potager</Text>
          <NavBarGardenSection currentSectionProps={currentSection} setCurrentSectionProps={setCurrentSection} />
        </View>
        <ScrollView style={styles.scrollViewContainer}>
          {currentSection === 'plantes' && (
            <View style={styles.gardenContainer}>
              <VegetablesGardenList>
                <VegetableCardGarden vegetableProps={vegetable} />
                <VegetableCardGarden vegetableProps={vegetable} />
              </VegetablesGardenList>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.addVegetableText}>Ajouter une plante</Text>
              </TouchableOpacity>
            </View>
          )}
          {currentSection === 'calendrier' && (
            <>
              <Planning vegetablesOnPlanning={vegetablesFixture} />
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
  gardenContainer: {
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
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
  button: {
    width: "100%",
    paddingTop: 16,
    paddingBottom: 16,
    color: "#345624",
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 50,
    marginBottom: 50,
    marginLeft: "auto",
    marginRight: "auto"
  },
  addVegetableText: {
    fontSize: 18,
    textAlign: "center"
  }
});
