import { createSlice } from "@reduxjs/toolkit";
import { User } from "@/interface";
export interface InitialState {
  user: User | null;
}

const initialState: InitialState = {
  user: null,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = globalSlice.actions;

export default globalSlice.reducer;
