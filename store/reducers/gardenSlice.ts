// store/reducers/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Vegetable } from '@/models/models';

export interface GardenState {
  vegetables: Vegetable[];
}

const initialState: GardenState = {
  vegetables: [
    {
      name: 'Basilic',
      description:
        "Herbe aromatique facile à cultiver, aime la chaleur et l'humidité.",
      specifications: [
        'Aime la chaleur',
        'Pousse rapide',
        'Aromatique puissante',
      ],
      sowing: ['mars', 'avril', 'mai'],
      plantation: ['mai', 'juin'],
      harvest: ['juin', 'juillet', 'août', 'septembre'],
      affinity: ['Tomate', 'Poivron', 'Aubergine'],
      bad_neighbors: ['Rue officinale'],
      images: [
        'https://sxcwavkyzcytbcdnhceq.supabase.co/storage/v1/object/public/garden//basilic.png',
      ],
    },
  ],
};

const gardenSlice = createSlice({
  name: 'garden',
  initialState,
  reducers: {
    addVegetable: (state, action: PayloadAction<Vegetable>) => {
      state.vegetables.push(action.payload);
    },
    removeVegetable: (state, action: PayloadAction<Vegetable>) => {
      state.vegetables = state.vegetables.filter(
        (vegetable) => vegetable.id !== action.payload.id
      );
    },
  },
});

export const { addVegetable, removeVegetable } = gardenSlice.actions;
export const gardenSliceReducer = gardenSlice.reducer;
