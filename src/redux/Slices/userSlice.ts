// lib/features/userSlice.ts
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type User = {
  id: string;
  role: string;
  email: string;
  image?: string;
  username: string;
  isVerified: boolean;
};

interface UserState {
  isLoggedIn: boolean;
  currentUser: User | null;
}

const initialState: UserState = {
  isLoggedIn: false,
  currentUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.isLoggedIn = true;
      state.currentUser = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.currentUser = null;
    },
  },
});

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;
