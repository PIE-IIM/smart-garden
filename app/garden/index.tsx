// app/index.tsx (mise à jour)
import { Planning } from "@/components/planning/planning";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { vegetablesFixture } from "@/vegetables";
import { NavBarGardenSection } from "@/components/navGardenSection/navbar";
import { useState } from "react";

export default function Garden() {

  const [currentSection, setCurrentSection] = useState<string>('calendrier');



  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Mon jardin</Text>
        <NavBarGardenSection currentSectionProps={currentSection} setCurrentSectionProps={setCurrentSection} />
        {currentSection === 'calendrier' && (
          <>
            <Planning vegetablesOnPlanning={vegetablesFixture} />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.addVegetableText}>Ajouter une plante</Text>
            </TouchableOpacity>
          </>
        )}
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
  title: {
    fontSize: 22,
    textAlign: "left",
    width: "85%",
    marginBottom: 16,
    fontWeight: 500
  },
  button: {
    width: "85%",
    paddingTop: 16,
    paddingBottom: 16,
    color: "#345624",
    borderWidth: 1,
    position: "absolute",
    bottom: 28,
    borderRadius: 8,
  },
  addVegetableText: {
    fontSize: 18,
    textAlign: "center"
  }
});
