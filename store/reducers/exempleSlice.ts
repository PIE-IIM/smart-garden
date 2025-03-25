import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface counterState {
    value: number
}

const initialState: counterState = {
    value: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<{ value: number }>) => {
            const { value } = action.payload;
            state.value += value;
        },
        decrement: (state, action: PayloadAction<{ value: number }>) => {
            const { value } = action.payload;
            state.value -= value;
        },
    },
});

export const { increment, decrement } = counterSlice.actions;

export const counterSliceReducer = counterSlice.reducer;