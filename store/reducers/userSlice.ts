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

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
  },
});

export const { setLogin } = userSlice.actions;
export const userSliceReducer = userSlice.reducer;
