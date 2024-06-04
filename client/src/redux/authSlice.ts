import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from './types';

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser(state, action: PayloadAction<User>) {
      state.isAuthenticated = true;
      state.user = action.payload;
      console.log('User logged in:', action.payload);
    },
    logoutUser(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
    setUserAuthStatus(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    }
  }
});

export const { loginUser, logoutUser, setUserAuthStatus } = authSlice.actions;
export default authSlice.reducer;