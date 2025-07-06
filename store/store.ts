import { configureStore } from '@reduxjs/toolkit'
import { counterSliceReducer } from './reducers/exempleSlice'
import { userSliceReducer } from './reducers/userSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      counterSliceReducer: counterSliceReducer,
      userSliceReducer: userSliceReducer
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']