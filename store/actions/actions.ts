import { AppDispatch } from '../store';
import { UserActions } from './userActions';
import { StorageActions } from './storageActions';
import { UserState } from '../reducers/userSlice';
import { VegetablesActions } from './vegetables.actions';
import { VegetablesState } from '../reducers/vegetablesSlice';

//Here we interact only with the store
export class Actions {
  public userActions: UserActions;
  public vegetablesActions: VegetablesActions;
  public storageActions: StorageActions;

  constructor(
    private dispatch: AppDispatch,
    private selector: {
      userSliceReducer: UserState;
      vegetablesSliceReducer: VegetablesState;
    }
  ) {
    this.userActions = new UserActions(dispatch, selector);
    this.storageActions = new StorageActions();
    this.vegetablesActions = new VegetablesActions(dispatch, selector);
  }
}
