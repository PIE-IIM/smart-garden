import { AppDispatch } from '../store';
import { UserActions } from './userActions';
import { StorageActions } from './storageActions';
import { UserState } from '../reducers/userSlice';

//Here we interact only with the store
export class Actions {
  public userActions: UserActions;
  public storageActions: StorageActions;

  constructor(
    private dispatch: AppDispatch,
    private selector: {
      userSliceReducer: UserState;
    }
  ) {
    this.userActions = new UserActions(dispatch, selector);
    this.storageActions = new StorageActions();
  }
}
