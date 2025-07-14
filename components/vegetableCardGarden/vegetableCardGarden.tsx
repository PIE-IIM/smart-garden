import { Vegetable } from '@/models/models';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text } from 'react-native';

type VegetableCardGardenPropsType = {
    vegetableProps: Vegetable
}

export const VegetableCardGarden = ({ vegetableProps }: VegetableCardGardenPropsType) => {

    useEffect(() => {
        console.log(vegetableProps)
    }, [])

    return (
        <>
            <TouchableOpacity onPress={() => router.navigate(`/vegetable-details/${vegetableProps.id}`)} style={styles.container}>
                <Image source={{ uri: vegetableProps.images[0] }}
                    style={styles.vegetableImage} />
                <View style={styles.vegetableDescriptionContainer}>
                    <Text style={styles.vegetableName}>{vegetableProps.name}</Text>
                </View>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "auto",
        height: 150,
        backgroundColor: '#EBECD2',
        borderRadius: 16,
        display: 'flex',
        flexDirection: 'row'
    },
    vegetableImage: {
        height: 134,
        aspectRatio: 1,
        borderRadius: 16,
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 8
    },
    vegetableDescriptionContainer: {
        width: '50%',
        margin: 'auto'
    },
    vegetableName: {
        fontSize: 20,
        color: '#60655D'
    }
});
