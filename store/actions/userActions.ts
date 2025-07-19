import { Vegetable } from '@/models/models';
import {
  addVegetables,
  GardenState,
  removeVegetable,
} from '../reducers/gardenSlice';
import { setLogin, UserState } from '../reducers/userSlice';
import { VegetablesState } from '../reducers/vegetablesSlice';
import { AppDispatch } from '../store';
import { VegetablesActions } from './vegetables.actions';

export class UserActions {
  constructor(
    private dispatch: AppDispatch,
    private userState: UserState,
    private gardenState: GardenState
  ) {}

  public get userIsLogin(): boolean {
    return this.userState.isLogin;
  }

  public get gardenVegetables(): Vegetable[] {
    return this.gardenState.vegetables;
  }

  public setLoginAction(response: boolean) {
    this.dispatch(setLogin(response));
  }

  public addGardenVegetables(vegetables: Vegetable[]) {
    return this.dispatch(addVegetables(vegetables));
  }

  public removeGardenVegetable(vegetable: Vegetable) {
    return this.dispatch(removeVegetable(vegetable));
  }
}
