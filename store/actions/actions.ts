import { AppDispatch } from '../store';
import { UserActions } from './userActions';
import { StorageActions } from './storageActions';
import { UserState } from '../reducers/userSlice';
import { VegetablesActions } from './vegetables.actions';
import { VegetablesState } from '../reducers/vegetablesSlice';
import { GardenState } from '../reducers/gardenSlice';

//Here we interact only with the store
export class Actions {
  public userActions: UserActions;
  public vegetablesActions: VegetablesActions;
  public storageActions: StorageActions;

  constructor(
    private dispatch: AppDispatch,
    private selector: {
      userState: UserState;
      gardenState: GardenState;
      vegetablesState: VegetablesState;
    }
  ) {
    this.vegetablesActions = new VegetablesActions(
      dispatch,
      this.selector.vegetablesState
    );
    this.userActions = new UserActions(
      dispatch,
      this.selector.userState,
      this.selector.gardenState
    );
    this.storageActions = new StorageActions();
  }
}
