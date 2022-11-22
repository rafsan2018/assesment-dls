import { createSlice } from '@reduxjs/toolkit';

const userReducer = createSlice({
  name: 'userReducer',
  initialState: {
    userInfo: JSON.parse(window.localStorage.getItem('userProfile')) || null,
  },

  reducers: {
    currentUser: (state, action) => {
      if (action.type === 'LOG_IN') {
        return (state.userInfo = action.payload);
      }

      if (action.type === 'LOG_OUT') {
        state.userInfo = null;
      }
    },
  },
});

export const { currentUser } = userReducer.actions;

export default userReducer.reducer;
