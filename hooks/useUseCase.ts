import { GardenService } from '@/services/garden.service';
import { UserService } from '@/services/user.service';
import { Actions } from '@/store/actions/actions';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { GardenUseCases } from '@/useCases/garden.useCases';
import { GatewayUseCases } from '@/useCases/gateway.useCases';
import { UserUseCases } from '@/useCases/user.useCases';
import { Http } from '@/utils';

const useUseCase = () => {
  const dispatch = useAppDispatch();
  const selector = useAppSelector((state) => state);
  const http = new Http();
  const actions = new Actions(dispatch, selector);

  const userService = new UserService(http);
  const gardenService = new GardenService(http);

  const userUseCases = new UserUseCases(actions, userService);
  const gardenUseCases = new GardenUseCases(actions, gardenService);

  const gatewayUseCase = new GatewayUseCases(userUseCases, gardenUseCases);

  return { gatewayUseCase };
};

export default useUseCase;
