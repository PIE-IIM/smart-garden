import { counterState, increment } from "../reducers/exempleSlice";
import { useAppDispatch } from "../hooks";
import { AppDispatch } from "../store";
import { UseSelector } from "react-redux";

//Here we interact only with the store
export class Actions {

    constructor(
        private dispatch: AppDispatch,
        private useAppSelector: UseSelector<{
            counterSliceReducer: counterState;
        }>
    ) {}

    //Exemple of how add element in the store
    public incrementAction() {
        this.dispatch(increment({ value: 1 }));
    }

    //Exemple of how select an item
    public getNumber() {
        this.useAppSelector((state) => state.counterSliceReducer.value)
    }
}
