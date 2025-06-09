// lib/features/themeSlice.ts
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type ThemeMode = "light" | "dark" | "device";

interface ThemeState {
  mode: ThemeMode;
}

const initialState: ThemeState = {
  mode: "device", // default to system
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeMode>) => {
      state.mode = action.payload;
    },
    toggleTheme: (state) => {
      if (state.mode === "light") {
        state.mode = "dark";
      } else if (state.mode === "dark") {
        state.mode = "light";
      }
    },
    // Just update mode from payload, don’t access window here
    applyDeviceTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.mode = action.payload;
    },
  },
});

export const {setTheme, toggleTheme, applyDeviceTheme} = themeSlice.actions;
export default themeSlice.reducer;
