// store/actions/userActions.ts
import { setUser, setError, setLoading, updateUser, clearUser } from "../reducers/userSlice";
import { AppDispatch } from "../store";
import { User } from "@/models/models";

export class UserActions {
    constructor(
        private dispatch: AppDispatch
    ) {}

    public setLoadingAction(loading: boolean) {
        this.dispatch(setLoading(loading));
    }

    public setErrorAction(error: string | null) {
        this.dispatch(setError(error));
    }

    public setUserAction(user: User | null) {
        this.dispatch(setUser(user));
    }

    public updateUserAction(userData: Partial<User>) {
        this.dispatch(updateUser(userData));
    }

    public clearUserAction() {
        this.dispatch(clearUser());
    }
}
