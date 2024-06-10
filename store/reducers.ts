import { createSlice } from '@reduxjs/toolkit';

import { UserData } from '@/models/userData/types';

const initialState: Partial<UserData> = {};

const userDataReducer = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    login: (state, action) => {
      state = action.payload;
    },
    logout: (state) => {
      state = {};
    },
    updateUser: (state) => {
      state = {};
    },
  },
});

export const { login, logout } = userDataReducer.actions;

export default userDataReducer.reducer;
