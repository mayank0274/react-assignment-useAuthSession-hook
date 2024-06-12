import { createSlice } from "@reduxjs/toolkit";

export interface IUser {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

const initialState: IUser = {
  token: "",
  user: {
    name: "",
    email: "",
  },
};

const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    setUser: (state, action) => {
      state.user = { email: action.payload?.email, name: action.payload?.name };
    },
    setToken: (state, action) => {
      state.token = action.payload.token;
    },
  },
});

export const { setUser, setToken } = userSlice.actions;

export default userSlice.reducer;
