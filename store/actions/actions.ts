import { AppDispatch } from '../store';
import { UserActions } from './userActions';
import { StorageActions } from './storageActions';

//Here we interact only with the store
export class Actions {
  public userActions: UserActions;
  public storageActions: StorageActions;

  constructor(private dispatch: AppDispatch) {
    this.userActions = new UserActions(dispatch);
    this.storageActions = new StorageActions();
  }
}
