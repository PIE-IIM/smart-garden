import { StyleSheet, ScrollView, TouchableOpacity, Text, View } from "react-native";
import { VegetablesList } from "@/components/vegetablesList/vegetableList";
import { VegetableCard } from "@/components/vegetablesList/vegetable/vegetable";
import { VegetablesGardenList } from "@/components/vegetableCardGarden/vegetablesGardenList";
import { VegetableCardGarden } from "@/components/vegetableCardGarden/vegetableCardGarden";
import { router } from "expo-router";
import { GardenVegetable, Vegetable } from "@/models/models";
import { useBottomSheet } from "@/app/contexts/bottomSheetContext";
import useUseCase from "@/hooks/useUseCase";
import { useState } from "react";

type GardenSectionPropsType = {
    gardenVegetablesProps: GardenVegetable[]
}

export default function GardenSection({ gardenVegetablesProps }: GardenSectionPropsType) {

    const [error, setError] = useState<string | null>(null)
    const { show, hide } = useBottomSheet()
    const { gatewayUseCase } = useUseCase();


    const openBottomSheet = (vegetableId: string) => {
        show(
            <>
                <TouchableOpacity onPress={() => removeVegetable(vegetableId)} style={styles.removeVegetableBtn}>
                    <Text style={styles.removeVegetable}>Supprimer ce végétal</Text>
                </TouchableOpacity>
            </>
        )
    }

    const loadGardenVegetables = async () => {
        const response = await gatewayUseCase.userUseCases.loadGardenVegetables();
        if (response === "Failure") {
            setError('Erreur de chargement');
        }
    }

    const removeVegetable = async (vegetableId: string) => {
        const response = await gatewayUseCase.userUseCases.removeGardenVegetable(vegetableId);
        if (response === 'Failure') {
            return setError('Erreur')
        }
        loadGardenVegetables()
        hide()
    }


    return (
        <>
            <View style={styles.gardenContainer}>
                {gardenVegetablesProps?.length > 0 && (
                    <VegetablesGardenList>
                        {gardenVegetablesProps.map((vegetable, index) => (
                            <VegetableCardGarden key={index} vegetableProps={vegetable} callback={() => openBottomSheet(vegetable.gardenVegetableId)} />
                        ))}
                    </VegetablesGardenList>
                )}
                <TouchableOpacity onPress={() => router.push('/add-vegetable')} style={styles.button}>
                    <Text style={styles.addVegetableText}>Agrandir mon potager</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    gardenContainer: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
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
    },
    removeVegetableBtn: {
        width: "100%",
        paddingTop: 16,
        paddingBottom: 16,
        color: "#e3381eff",
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 50,
        marginBottom: 50,
        marginLeft: "auto",
        marginRight: "auto"
    },
    removeVegetable: {
        fontSize: 18,
        textAlign: "center",
    }
});
