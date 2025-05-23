// store/actions/userActions.ts
import { addUser, setCurrentUser, setError, setLoading } from "../reducers/userSlice";
import { useAppDispatch } from "../hooks";
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

    public addUserAction(user: User) {
        this.dispatch(addUser(user));
    }

    public setCurrentUserAction(user: User | null) {
        this.dispatch(setCurrentUser(user));
    }
}
