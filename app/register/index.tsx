// app/register/index.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { router } from 'expo-router';
import useUseCase from '@/hooks/useUseCase';
import { CreateUserRequest } from '@/models/models';
import { useAppSelector } from '@/store/hooks';

export default function RegisterScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [formError, setFormError] = useState<string | null>(null);

    const { gatewayUseCase } = useUseCase();

    // Sélecteurs pour accéder au state
    const loading = useAppSelector(state => state.userSliceReducer.loading);
    const error = useAppSelector(state => state.userSliceReducer.error);

    const validateForm = (): boolean => {
        if (!name || !email || !password || !confirmPassword) {
            setFormError('Tous les champs sont obligatoires');
            return false;
        }

        if (password !== confirmPassword) {
            setFormError('Les mots de passe ne correspondent pas');
            return false;
        }

        // Validation basique de l'email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setFormError('Format d\'email invalide');
            return false;
        }

        setFormError(null);
        return true;
    };

    const handleRegister = async () => {
        if (!validateForm()) return;

        const userData: CreateUserRequest = {
            name,
            email,
            password
        };

        console.log(userData);

        const success = await gatewayUseCase.userUseCases.createUser(userData);

        if (success) {
            // Redirection vers la page d'accueil ou de profil
            router.replace('/');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Créer un compte</Text>

            {(formError || error) && (
                <Text style={styles.errorText}>{formError || error}</Text>
            )}

            <TextInput
                style={styles.input}
                placeholder="Nom"
                value={name}
                onChangeText={setName}
            />

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder="Mot de passe"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <TextInput
                style={styles.input}
                placeholder="Confirmer le mot de passe"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
            />

            <TouchableOpacity
                style={styles.button}
                onPress={handleRegister}
                disabled={loading}
            >
                {loading ? (
                    <ActivityIndicator color="#fff" />
                ) : (
                    <Text style={styles.buttonText}>S'inscrire</Text>
                )}
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.linkButton}
                onPress={() => router.back()}
            >
                <Text style={styles.linkText}>Retour</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#4CAF50',
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    linkButton: {
        marginTop: 15,
        alignItems: 'center',
    },
    linkText: {
        color: '#4CAF50',
        fontSize: 16,
    },
    errorText: {
        color: 'red',
        marginBottom: 15,
        textAlign: 'center',
    }
});
