import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  User: null,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.User = action.payload;
    },
  },
});

export const { addUser } = UserSlice.actions;
export default UserSlice.reducer;
