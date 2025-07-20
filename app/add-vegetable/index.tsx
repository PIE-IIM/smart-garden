import { StyleSheet, ScrollView, View } from "react-native";
import { useEffect, useState } from "react";
import { Vegetable } from "@/models/models";
import useUseCase from "@/hooks/useUseCase";
import { VegetablesList } from "@/components/vegetablesList/vegetableList";
import { VegetableCard } from "@/components/vegetablesList/vegetable/vegetable";
import { router } from "expo-router";

export default function AddVegetable() {

    const [vegetables, setVegetables] = useState<Vegetable[]>([]);
    const { gatewayUseCase } = useUseCase();
    const [error, setError] = useState<string | null>(null);

    const loadGardenVegetables = async () => {
        const response = await gatewayUseCase.userUseCases.loadGardenVegetables();
        if (response === "Failure") {
            setError('Erreur de chargement');
        }
    }

    const chooseVegetable = async (vegetable: Vegetable): Promise<void> => {
        if (!vegetable.id) {
            return
        }
        const response = await gatewayUseCase.userUseCases.putVegetableToGarden(vegetable.id);
        if (response === 'Failure') {
            setError('Error');
            return
        }
        loadGardenVegetables()
        router.back();
    }

    useEffect(() => {
        if (gatewayUseCase.vegetablesUseCases.getAllVegetables.length > 0) {
            setVegetables(gatewayUseCase.vegetablesUseCases.getAllVegetables);
        }
    }, [gatewayUseCase.vegetablesUseCases.getAllVegetables])

    return (
        <>
            <ScrollView contentContainerStyle={styles.container}>
                <VegetablesList>
                    {vegetables?.map((vegetable, index) => (
                        <VegetableCard key={index} vegetable={vegetable} callBack={() => chooseVegetable(vegetable)} />
                    ))}
                </VegetablesList>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingTop: 50,
        paddingLeft: 16,
        paddingRight: 16
    },
});
