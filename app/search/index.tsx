import useUseCase from "@/hooks/useUseCase";
import { Vegetable } from "@/models/models";
import { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";


export default function Search() {

  const [vegetables, setVegetables] = useState<Vegetable[]>();
  const [error, setError] = useState<string>();
  const { gatewayUseCase } = useUseCase();

  const loadVegetables = async () => {
    const response = await gatewayUseCase.vegetablesUseCases.loadAllVegetables();
    if (response === "Failure") {
      setError(response);
    }
    const vegetables = await gatewayUseCase.vegetablesUseCases.getAllVegetables();
    setVegetables(vegetables);
  }

  useEffect(() => {
    loadVegetables()
  }, [])

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {error}
      <View style={styles.vegetablesContainer}>
        {vegetables?.map((vegetable, index) => (
          <View key={index} style={styles.vegetable}>
            <Image source={{ uri: vegetable.images[0] }}
              style={styles.vegetableImage} />
            <Text style={styles.vegetableText}>{vegetable.name}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 50,
  },
  vegetablesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
    rowGap: "16"
  },
  vegetable: {
    width: '48%',
    height: '48%',
    aspectRatio: 1,
    display: 'flex'
  },
  vegetableImage: {
    width: '100%',
    height: '95%',
    borderRadius: 8,
    margin: 'auto'
  },
  vegetableText: {
    fontWeight: 500
  }
});
