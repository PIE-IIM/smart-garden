import {
  CreateUserPayload,
  LoginUserPayload,
  UserService,
} from '@/services/user.service';
import { Actions } from '@/store/actions/actions';
import { Token } from '@/models/models';
import { Failure, Success } from '@/utils';

//Here we call the services and the actions from the store
export class UserUseCases {
  constructor(
    private actions: Actions,
    private userService: UserService
  ) {}

  async createUser(userData: CreateUserPayload): Promise<Success | Failure> {
    const response = await this.userService.createUser(userData);
    if (response.status === 'Failure') {
      return response.status;
    }
    const payload = response.payload as unknown as Token;
    this.actions.storageActions.putToken('authToken', payload.token);
    this.actions.userActions.setLoginAction(true);
    return response.status;
  }

  async login(userData: LoginUserPayload): Promise<Success | Failure> {
    const response = await this.userService.login(userData);
    if (response.status === 'Failure') {
      return response.status;
    }
    const payload = response.payload as unknown as Token;

    //check if the user's token already exists, if so, delete it
    const isTokenAlreadyExists =
      await this.actions.storageActions.getToken('authToken');
    if (isTokenAlreadyExists === null) {
      this.actions.storageActions.deleteToken('authToken');
    }
    await this.actions.storageActions.putToken('authToken', payload.token);
    this.actions.userActions.setLoginAction(true);
    return response.status;
  }

  async logout(): Promise<Success> {
    await this.actions.storageActions.deleteToken('authToken');
    this.actions.userActions.setLoginAction(false);

    return 'Success';
  }

  async userHasToken(): Promise<boolean> {
    const token = await this.actions.storageActions.getToken('authToken');
    if (token === null) {
      return false;
    }
    return true;
  }

  isLogin(): boolean {
    return this.actions.userActions.userIsLogin();
  }
}
