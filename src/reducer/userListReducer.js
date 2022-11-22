import { createSlice } from '@reduxjs/toolkit';

const userListReducer = createSlice({
  name: 'userListReducer',
  initialState: { userList: null },

  reducers: {
    allUserList: (state, action) => {
      state.userList = action.payload;

      // if (action.type === 'FILTER_USER_LIST') {
      //   let findUser = userList.filter((userFilter) => {
      //     const regex = new RegExp(action.payload, 'ig');
      //     return (
      //       userFilter.first_name.match(regex) ||
      //       userFilter.last_name.match(regex)
      //     );
      //   });
      //   return (state.userList = findUser);
      // }
    },
    searchUser: (state, action) => {
      let findUser = state.userList.filter((userFilter) => {
        const regex = new RegExp(action.payload, 'ig');
        return (
          userFilter.first_name.match(regex) ||
          userFilter.last_name.match(regex)
        );
      });
      state.userList = findUser;
    },
  },
});

export const { allUserList, searchUser } = userListReducer.actions;

export default userListReducer.reducer;
