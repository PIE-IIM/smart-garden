// store/reducers/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Vegetable } from '@/models/models';
import { Failure } from '@jaslay/http';

export interface VegetablesState {
  vegetables: Vegetable[];
  status: Failure | null;
}

const initialState: VegetablesState = {
  vegetables: [],
  status: null,
};

const vegetablesSlice = createSlice({
  name: 'vegetables',
  initialState,
  reducers: {
    setVegetables: (state, action: PayloadAction<Vegetable[]>) => {
      state.vegetables = action.payload;
    },
    setError: (state, action: PayloadAction<Failure>) => {
      state.status = action.payload;
    },
  },
});

export const { setVegetables } = vegetablesSlice.actions;
export const vegetablesSliceReducer = vegetablesSlice.reducer;
