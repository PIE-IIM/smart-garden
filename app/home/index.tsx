import useUseCase from '@/hooks/useUseCase';
import { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Home() {
    const { gatewayUseCase } = useUseCase();
    const loadInit = async () => {
        await gatewayUseCase.vegetablesUseCases.loadAllVegetables();
    }
    useEffect(() => {
        loadInit()
    }, [])
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Smart Garden</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#4CAF50',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginVertical: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
