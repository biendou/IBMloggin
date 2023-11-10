// authSlice.js
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  username: 'redux-toolkit',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.username = action.payload.username;
    },
  },
});

export const {login} = authSlice.actions;
export const selectAuth = state => state.auth;

export default authSlice.reducer;
