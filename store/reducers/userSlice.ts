// store/reducers/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/models/models';

export interface UserState {
  currentUser: User | null;
  isLogin: boolean;
}

const initialState: UserState = {
  currentUser: null,
  isLogin: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setLogin, setUser } = userSlice.actions;
export const userSliceReducer = userSlice.reducer;
