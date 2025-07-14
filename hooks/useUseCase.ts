import { GardenService } from '@/services/garden.service';
import { UserService } from '@/services/user.service';
import { Actions } from '@/store/actions/actions';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { VegetablesUseCases } from '@/useCases/vegetables.useCases';
import { GatewayUseCases } from '@/useCases/gateway.useCases';
import { UserUseCases } from '@/useCases/user.useCases';
import Constants from 'expo-constants';
import { QuickHttp } from '@jaslay/http';

const extra = Constants.expoConfig?.extra as {
  apiBaseUrl?: string;
  port?: string;
};

const useUseCase = () => {
  const quickHttp = new QuickHttp(
    `${extra?.apiBaseUrl ?? ''}${extra?.port ?? ''}`
  );

  const actions = new Actions(useAppDispatch(), {
    userState: useAppSelector((state) => state.userSliceReducer),
    gardenState: useAppSelector((state) => state.gardenSliceRecucer),
    vegetablesState: useAppSelector((state) => state.vegetablesSliceReducer),
  });

  const userService = new UserService(quickHttp);
  const gardenService = new GardenService(quickHttp);

  const userUseCases = new UserUseCases(actions, userService);
  const vegetablesUseCases = new VegetablesUseCases(actions, gardenService);

  const gatewayUseCase = new GatewayUseCases(userUseCases, vegetablesUseCases);

  return { gatewayUseCase };
};

export default useUseCase;
