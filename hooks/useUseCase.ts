import { UserServices } from '@/services/user.services';
import { Actions } from '@/store/actions/actions';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { GatewayUseCases } from '@/useCases/gateway.useCases';
import { UserUseCases } from '@/useCases/user.useCases';
import { Http } from '@/utils';

const useUseCase = () => {
  const dispatch = useAppDispatch();
  const selector = useAppSelector((state) => state);
  const http = new Http();
  const actions = new Actions(dispatch, selector);

  const userServices = new UserServices(http);

  const userUseCases = new UserUseCases(actions, userServices);

  const gatewayUseCase = new GatewayUseCases(userUseCases);

  return { gatewayUseCase };
};

export default useUseCase;
