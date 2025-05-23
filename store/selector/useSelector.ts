// store/selector/userSelector.ts
import { RootState } from "../store";

export const selectCurrentUser = (state: RootState) => state.userSliceReducer.currentUser;
export const selectUsers = (state: RootState) => state.userSliceReducer.users;
export const selectUserLoading = (state: RootState) => state.userSliceReducer.loading;
export const selectUserError = (state: RootState) => state.userSliceReducer.error;
