import { StyleSheet, ScrollView, TouchableOpacity, Text, View } from "react-native";
import { VegetablesList } from "@/components/vegetablesList/vegetableList";
import { VegetableCard } from "@/components/vegetablesList/vegetable/vegetable";
import { VegetablesGardenList } from "@/components/vegetableCardGarden/vegetablesGardenList";
import { VegetableCardGarden } from "@/components/vegetableCardGarden/vegetableCardGarden";
import { router } from "expo-router";
import { Vegetable } from "@/models/models";

type GardenSectionPropsType = {
    gardenVegetablesProps: Vegetable[]
}

export default function GardenSection({ gardenVegetablesProps }: GardenSectionPropsType) {


    return (
        <>
            <View style={styles.gardenContainer}>
                {gardenVegetablesProps?.length > 0 && (
                    <VegetablesGardenList>
                        {gardenVegetablesProps.map((vegetable, index) => (
                            <VegetableCardGarden key={index} vegetableProps={vegetable} />
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
        width: '85%',
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
    }
});
