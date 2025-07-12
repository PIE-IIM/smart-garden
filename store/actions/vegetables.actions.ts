import { Vegetable } from '@/models/models';
import { AppDispatch } from '../store';
import { setVegetables, VegetablesState } from '../reducers/vegetablesSlice';
import { UserState } from '../reducers/userSlice';

export class VegetablesActions {
  constructor(
    private dispatch: AppDispatch,
    private selector: {
      userSliceReducer: UserState;
      vegetablesSliceReducer: VegetablesState;
    }
  ) {}

  public putVegetables(payload: Vegetable[]): void {
    this.dispatch(setVegetables(payload));
  }

  public getAllVegetables(): Vegetable[] {
    return this.selector.vegetablesSliceReducer.vegetables;
  }
}
