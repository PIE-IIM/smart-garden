import useUseCase from '@/hooks/useUseCase';
import { router } from 'expo-router';
import { useEffect } from 'react';

export default function Index() {

  const { gatewayUseCase } = useUseCase();

  const checkToken = async () => {
    const hasToken = await gatewayUseCase.userUseCases.isLogin;
    if (hasToken) {
      router.replace('/home');
    } else {
      router.replace('/login');
    }
  };

  useEffect(() => {
    checkToken();
  }, []);
}