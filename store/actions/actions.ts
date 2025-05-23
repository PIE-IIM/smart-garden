import { counterState, increment } from "../reducers/exempleSlice";
import { useAppDispatch } from "../hooks";
import { AppDispatch } from "../store";
import { UseSelector } from "react-redux";
import { UserActions } from "./userActions";    

//Here we interact only with the store
export class Actions {
    public userActions: UserActions;

    constructor(
        private dispatch: AppDispatch,
        private useAppSelector: UseSelector<{
            counterSliceReducer: counterState;
        }>
    ) {
        this.userActions = new UserActions(dispatch);
    }

    //Exemple of how add element in the store
    public incrementAction() {
        this.dispatch(increment({ value: 1 }));
    }

    //Exemple of how select an item
    public getNumber() {
        this.useAppSelector((state) => state.counterSliceReducer.value)
    }
}
