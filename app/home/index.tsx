import { Header } from '@/components/header/header';
import { SensorCard } from '@/components/sensor/sensorCard';
import { VegetableCardGarden } from '@/components/vegetableCardGarden/vegetableCardGarden';
import useUseCase from '@/hooks/useUseCase';
import { User } from '@/models/models';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Home() {
    const { gatewayUseCase } = useUseCase();

    const [user, setUser] = useState<User>();

    const loadInit = async () => {
        await gatewayUseCase.vegetablesUseCases.loadAllVegetables();
    }

    const loadGardenVegetables = async () => {
        const response = await gatewayUseCase.userUseCases.loadGardenVegetables();
    }

    useEffect(() => {
        loadGardenVegetables()
        loadGardenVegetables()
    }, [])


    const fakeMeasures = [
        {
            temperature: '25°',
            luminosity: '71%',
            humidity: '50%',
        },
        {
            temperature: '32°',
            luminosity: '75%',
            humidity: '40%',
        }
    ]

    useEffect(() => {
        loadInit()
    }, [])

    useEffect(() => {
        if (gatewayUseCase.userUseCases.user) {
            setUser(gatewayUseCase.userUseCases.user)
        }
    }, [gatewayUseCase.userUseCases.user])
    return (
        <View style={styles.container}>
            <Header title={`Bonjour ${user?.name}`} />
            <VegetableCardGarden
                label="Mon potager" image={require('../../assets/images/garden.jpg')}
                subLabel={`${gatewayUseCase.userUseCases.gardenVegetables.length.toString()} plantes`}
                onLongPressCallback={() => () => console.log("hello")}
                callback={() => router.push('/garden')}
            />
            <Text style={styles.subtitle}>Tableau de bord</Text>
            <SensorCard name='Capteur 1' measures={fakeMeasures[0]} />
            <SensorCard name='Capteur 2' measures={fakeMeasures[1]} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: "15%",
        gap: 16,
        backgroundColor: "#FFFDF0",
        paddingLeft: 16,
        paddingRight: 16,
    },
    subtitle: {
        fontSize: 18,
        textAlign: 'left',
        width: '100%'
    }
});
