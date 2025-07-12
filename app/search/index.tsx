import { VegetableCard } from "@/components/vegetablesList/vegetable/vegetable";
import { VegetablesList } from "@/components/vegetablesList/vegetableList";
import useUseCase from "@/hooks/useUseCase";
import { Vegetable } from "@/models/models";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from "react-native";


export default function Search() {

  const [vegetables, setVegetables] = useState<Vegetable[]>();
  const { gatewayUseCase } = useUseCase();

  const getVegetables = async () => {
    const vegetables = await gatewayUseCase.vegetablesUseCases.getAllVegetables();
    setVegetables(vegetables);
  }

  useEffect(() => {
    getVegetables()
  }, [])

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <VegetablesList>
        {vegetables?.map((vegetable, index) => (
          <VegetableCard key={index} vegetable={vegetable} />
        ))}
      </VegetablesList>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 50,
  }
});
