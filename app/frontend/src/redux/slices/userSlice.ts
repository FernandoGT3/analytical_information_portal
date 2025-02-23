import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  token: string | null;
  username: string;
}

const initialState: UserState = {
  token: null,
  username: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.username = action.payload.username;
    },
    logout: (state) => {
      state.token = null;
      state.username = '';
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
