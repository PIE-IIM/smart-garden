// app/index.tsx (mise à jour)
import useUseCase from '@/hooks/useUseCase';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Index() {

  const { gatewayUseCase } = useUseCase();

  useEffect(() => {
    const checkToken = async () => {
      const hasToken = await gatewayUseCase.userUseCases.userHasToken();
      if (hasToken) {
        router.replace('/home');
      } else {
        router.replace('/login');
      }
    };

    checkToken();
  }, []);
  return (
    <View style={styles.container}>
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
});
