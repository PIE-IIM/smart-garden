// app/index.tsx (mise à jour)
import useUseCase from '@/hooks/useUseCase';
import { router } from 'expo-router';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Home() {

    const { gatewayUseCase } = useUseCase();

    const logout = async () => {
        await gatewayUseCase.userUseCases.logout();
        router.replace('/login');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Smart Garden</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => logout()}>
                <Text style={styles.buttonText}>Créer un compte</Text>
            </TouchableOpacity>
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
