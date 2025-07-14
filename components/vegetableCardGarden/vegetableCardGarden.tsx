import { Vegetable } from '@/models/models';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native';

type VegetableCardGardenPropsType = {
    vegetableProps: Vegetable
}

export const VegetableCardGarden = ({ vegetableProps }: VegetableCardGardenPropsType) => {


    return (
        <>
            <View style={styles.container}>

            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {

    },
});
