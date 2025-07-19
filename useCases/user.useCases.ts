import {
  CreateUserPayload,
  LoginUserPayload,
  UserService,
} from '@/services/user.service';
import { Actions } from '@/store/actions/actions';
import { LoginInfos, User, Vegetable } from '@/models/models';
import { Failure, ResAction, Success } from '@jaslay/http';
import { GardenService } from '@/services/garden.service';

//Here we call the services and the actions from the store
export class UserUseCases {
  constructor(
    private actions: Actions,
    private userService: UserService,
    private gardenService: GardenService
  ) {}

  public get isLogin(): boolean {
    return this.actions.userActions.userIsLogin;
  }

  public get gardenVegetables(): Vegetable[] {
    return this.actions.userActions.gardenVegetables;
  }

  public get user(): User | void {
    return this.actions.userActions.user;
  }

  async createUser(userData: CreateUserPayload): Promise<Success | Failure> {
    const response = await this.userService.createUser(userData);
    if (response.status === 'Failure') {
      return response.status;
    }
    const payload = response.payload as unknown as LoginInfos;
    this.actions.storageActions.putToken('authToken', payload.token);
    this.actions.userActions.setLoginAction(true);
    return response.status;
  }

  async login(userData: LoginUserPayload): Promise<Success | Failure> {
    const response = await this.userService.login(userData);
    if (response.status === 'Failure') {
      return response.status;
    }
    const payload = response.payload as unknown as LoginInfos;

    //check if the user's token already exists, if so, delete it
    const isTokenAlreadyExists =
      await this.actions.storageActions.getToken('authToken');
    if (isTokenAlreadyExists === null) {
      this.actions.storageActions.deleteToken('authToken');
    }
    await this.actions.storageActions.putToken('authToken', payload.token);
    this.actions.userActions.setLoginAction(true);
    const userInfos: User = {
      name: payload.userName,
      email: payload.email,
    };
    this.actions.userActions.setUserAction(userInfos);
    return response.status;
  }

  async logout(): Promise<Success> {
    await this.actions.storageActions.deleteToken('authToken');
    this.actions.userActions.setLoginAction(false);
    return 'Success';
  }

  async userHasToken(): Promise<boolean> {
    const token = this.actions.storageActions.getToken('authToken');
    if (token === null) {
      return false;
    }
    return true;
  }

  public async loadGardenVegetables(): Promise<Success | Failure> {
    const response = await this.gardenService.getGardenVegetables();
    if (response.status === 'Failure') {
      return response.status;
    }
    const payload = response.payload as Vegetable[];
    this.actions.userActions.addGardenVegetables(payload);
    return response.status;
  }

  public async putVegetableToGarden(vegetableId: string) {
    const payload = {
      vegetableId: vegetableId,
    };
    const response = await this.gardenService.addVegetableToGarden(payload);
    if (response.status === 'Failure') {
      return response.status;
    }
    return response.status;
  }

  public async removeGardenVegetable(
    vegetableId: string
  ): Promise<'Success' | 'Failure'> {
    const response =
      await this.gardenService.removeVegetableToGarden(vegetableId);
    if (response.status === 'Failure') {
      return response.status;
    }
    return response.status;
  }
}
