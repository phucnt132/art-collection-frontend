import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    users: {
      allUsers: null,
      isFetching: false,
      error: false,
    },
    msg: "",
  },
  reducers: {
    getUserStart: (state) => {
      state.users.isFetching = true;
    },

    getUserSuccess: (state, action) => {
      state.users.allUsers = action.payload;
      state.users.isFetching = false;
    },

    getUserFail: (state) => {
      state.users.isFetching = false;
      state.users.error = true;
    },

    deleteUserStart: (state) => {
      state.users.isFetching = true;
      state.users.error = false;
    },
    deleteUserSuccess: (state, action) => {
      state.users.isFetching = false;
      state.msg = action.payload;
    },
    deleteUserFail: (state, action) => {
      state.users.isFetching = false;
      state.users.error = true;
      state.msg = action.payload;
    },
  },
});

export const {
  getUserStart,
  getUserSuccess,
  getUserFail,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFail,
} = userSlice.actions;

export default userSlice.reducer;