// store/actions/userActions.ts
import { useAppSelector } from '../hooks';
import { setLogin, UserState } from '../reducers/userSlice';
import { AppDispatch } from '../store';

export class UserActions {
  constructor(
    private dispatch: AppDispatch,
    private selector: {
      userSliceReducer: UserState;
    }
  ) {}

  public setLoginAction(response: boolean) {
    this.dispatch(setLogin(response));
  }

  public userIsLogin(): boolean {
    return this.selector.userSliceReducer.isLogin;
  }
}
