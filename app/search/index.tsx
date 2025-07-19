import { Header } from "@/components/header/header";
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

  const moveToVegetableDetails = (vegetable: Vegetable) => {
    router.push(`/vegetable-details/${vegetable.id}`)
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header title="Rechercher" />
      <VegetablesList>
        {vegetables?.map((vegetable, index) => (
          <VegetableCard key={index} vegetable={vegetable} callBack={() => moveToVegetableDetails(vegetable)} />
        ))}
      </VegetablesList>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: "15%",
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#FFFDF0",
  }
});
