import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import useUseCase from "@/hooks/useUseCase";
import { useEffect, useState } from "react";
import { Vegetable } from "@/models/models";
import ArrowLeft from "../../../assets/icons/arrow-left.svg";


export default function VegetableDetails() {
    const [currentVegetable, setCurrentVegetable] = useState<Vegetable>();

    const { slug } = useLocalSearchParams();
    const { gatewayUseCase } = useUseCase();

    useEffect(() => {
        const vegetable = gatewayUseCase.vegetablesUseCases.getAllVegetables().find((vegetable => vegetable.id === slug));
        setCurrentVegetable(vegetable);
    }, [])

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => router.back()}>
                    <ArrowLeft style={styles.arrowLeft} />
                </TouchableOpacity>
                <Image source={{ uri: currentVegetable?.images[0] }} style={styles.vegetableImage} />
                <View style={styles.vegetableDescriptionContainer}>
                    <Text style={styles.title}>{currentVegetable?.name}</Text>
                    <View style={styles.section}>
                        <Text style={styles.subTitle}>Description</Text>
                        <Text style={styles.description}>{currentVegetable?.description}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subTitle}>Caractéristiques</Text>
                        <View style={styles.specsContainer}>
                            {currentVegetable?.specifications.map((spec, index) => (
                                <View key={index} style={styles.specsLabel}>
                                    <Text>{spec}</Text>
                                </View>
                            ))}
                        </View>

                    </View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 32,
    },
    backButton: {
        backgroundColor: '#BABABA',
        display: 'flex',
        opacity: 0.8,
        width: 50,
        height: 50,
        position: 'absolute',
        left: 16,
        top: 64,
        borderRadius: '50%',
        zIndex: 2
    },
    arrowLeft: {
        margin: 'auto',
        width: 32,
        height: 32
    },
    vegetableImage: {
        width: '100%',
        height: 500,
        margin: 'auto'
    },
    vegetableDescriptionContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: "#FFFDF0",
        position: 'absolute',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        top: 300,
        padding: 28,
        gap: 16
    },
    title: {
        fontSize: 28,
        fontWeight: 500,
        color: '#5B8E55'
    },
    subTitle: {
        fontSize: 20,
        fontWeight: 500,
        color: '#394434'
    },
    description: {
        fontSize: 13,
        color: '#60655D'
    },
    section: {
        gap: 4
    },
    specsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        gap: 8
    },
    specsLabel: {
        backgroundColor: "#D7DCC7",
        borderRadius: 16,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 4,
        paddingBottom: 4,
    },
});
