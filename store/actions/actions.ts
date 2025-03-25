import { useDispatch } from "react-redux";
import { increment } from "../reducers/exempleSlice";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { useAppDispatch } from "../hooks";

export class Actions {
    dispatch = useAppDispatch();

    public incrementAction() {
        this.dispatch(increment({ value: 1 }));
    }
}
