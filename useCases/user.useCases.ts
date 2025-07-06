import { UserServices } from '@/services/user.services';
import { Actions } from '@/store/actions/actions';
import { CreateUserRequest, Token, User } from '@/models/models';
import { Failure, Success } from '@/utils';

//Here we call the services and the actions from the store
export class UserUseCases {
  constructor(
    private actions: Actions,
    private userServices: UserServices
  ) {}

  async createUser(userData: CreateUserRequest): Promise<Success | Failure> {
    this.actions.userActions.setLoadingAction(true);
    this.actions.userActions.setErrorAction(null);

    const response = await this.userServices.createUser(userData);

    if (response.status === 'Failure') {
      return response.status;
    }

    const payload = response.payload as unknown as Token;
    this.actions.storageActions.putToken('authToken', payload.token);

    // this.actions.userActions.addUserAction(newUser);
    // this.actions.userActions.setCurrentUserAction(newUser);
    return response.status;
  }

  async userIsConnected(): Promise<boolean> {
    const token = await this.actions.storageActions.getToken('authToken');
    if (token === null) {
      return false;
    }
    return true;
  }
}
