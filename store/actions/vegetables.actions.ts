import { Vegetable } from '@/models/models';
import { AppDispatch } from '../store';
import { setVegetables, VegetablesState } from '../reducers/vegetablesSlice';
import { UserState } from '../reducers/userSlice';
import { GardenState } from '../reducers/gardenSlice';

export class VegetablesActions {
  constructor(
    private dispatch: AppDispatch,
    private vegetablesState: VegetablesState
  ) {}

  public putVegetables(payload: Vegetable[]): void {
    this.dispatch(setVegetables(payload));
  }

  public getAllVegetables(): Vegetable[] {
    return this.vegetablesState.vegetables;
  }
}
