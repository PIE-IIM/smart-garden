import { configureStore } from '@reduxjs/toolkit';
import { userSliceReducer } from './reducers/userSlice';
import { vegetablesSliceReducer } from './reducers/vegetablesSlice';
import { gardenSliceReducer } from './reducers/gardenSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      userSliceReducer: userSliceReducer,
      gardenSliceRecucer: gardenSliceReducer,
      vegetablesSliceReducer: vegetablesSliceReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
