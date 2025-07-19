import { GardenService } from '@/services/garden.service';
import { UserService } from '@/services/user.service';
import { Actions } from '@/store/actions/actions';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { VegetablesUseCases } from '@/useCases/vegetables.useCases';
import { GatewayUseCases } from '@/useCases/gateway.useCases';
import { UserUseCases } from '@/useCases/user.useCases';
import Constants from 'expo-constants';
import { QuickHttp } from '@jaslay/http';
import { StorageActions } from '@/store/actions/storageActions';
import { VegetablesService } from '@/services/vegetables.service';

const extra = Constants.expoConfig?.extra as {
  apiBaseUrl?: string;
  port?: string;
};

const useUseCase = () => {
  const storageActions = new StorageActions();

  const quickHttp = new QuickHttp(
    `${extra?.apiBaseUrl ?? ''}${extra?.port ?? ''}`,
    {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${storageActions.getToken('authToken')}`,
    }
  );
  const token = async () => {
    return await storageActions.getToken('authToken');
  };
  const actions = new Actions(useAppDispatch(), {
    userState: useAppSelector((state) => state.userSliceReducer),
    gardenState: useAppSelector((state) => state.gardenSliceRecucer),
    vegetablesState: useAppSelector((state) => state.vegetablesSliceReducer),
  });

  const userService = new UserService(quickHttp);
  const gardenService = new GardenService(quickHttp);
  const vegetableService = new VegetablesService(quickHttp);

  const userUseCases = new UserUseCases(actions, userService, gardenService);
  const vegetablesUseCases = new VegetablesUseCases(actions, vegetableService);

  const gatewayUseCase = new GatewayUseCases(userUseCases, vegetablesUseCases);

  return { gatewayUseCase };
};

export default useUseCase;
