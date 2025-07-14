import { Planning } from "@/components/planning/planning";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import { vegetablesFixture } from "@/vegetables";
import { NavBarGardenSection } from "@/components/navGardenSection/navbar";
import { useState } from "react";

export default function Garden() {

  const [currentSection, setCurrentSection] = useState<string>('plantes');

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Mon jardin</Text>
          <NavBarGardenSection currentSectionProps={currentSection} setCurrentSectionProps={setCurrentSection} />
        </View>
        <ScrollView>
          {currentSection === 'plantes' && (
            <>
              <Text>hello</Text>
            </>
          )}
          {currentSection === 'calendrier' && (
            <>
              <Planning vegetablesOnPlanning={vegetablesFixture} />
              {/* <TouchableOpacity style={styles.button}>
                <Text style={styles.addVegetableText}>Ajouter une plante</Text>
              </TouchableOpacity> */}
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
    width: "85%",
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
