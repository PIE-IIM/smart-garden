// store/reducers/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Vegetable } from '@/models/models';

export interface GardenState {
  vegetables: Vegetable[];
}

const initialState: GardenState = {
  vegetables: [],
};

const gardenSlice = createSlice({
  name: 'garden',
  initialState,
  reducers: {
    addVegetables: (state, action: PayloadAction<Vegetable[]>) => {
      state.vegetables = action.payload;
    },
    removeVegetable: (state, action: PayloadAction<Vegetable>) => {
      state.vegetables = state.vegetables.filter(
        (vegetable) => vegetable.id !== action.payload.id
      );
    },
  },
});

export const { addVegetables, removeVegetable } = gardenSlice.actions;
export const gardenSliceReducer = gardenSlice.reducer;
