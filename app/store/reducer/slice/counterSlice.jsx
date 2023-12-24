import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      console.log("vo day ne");
      state.value += 1;
    },
    decrement: (state) => {
      console.log("vo day ne");
      state.value -= 1;
    },

    // loginSuccess: (state, action) => {
    //   state.user = action.payload;
    // },
    // logoutSuccess: (state, action) => {
    //   state.user = null;
    // },
  },
});

export const { increment, decrement } = counterSlice.actions;
export const selectCount = (state) => state.counter.value;
export default counterSlice.reducer;
// Actions
// const { loginSuccess, logoutSuccess } = slice.actions;
// export const login =
//   ({ username, password }) =>
//   async (dispatch) => {
//     try {
//       // const res = await api.post('/api/auth/login/', { username, password })
//       dispatch(loginSuccess({ username }));
//     } catch (e) {
//       return console.error(e.message);
//     }
//   };
// export const logout = () => async (dispatch) => {
//   try {
//     // const res = await api.post('/api/auth/logout/')
//     return dispatch(logoutSuccess());
//   } catch (e) {
//     return console.error(e.message);
//   }
// };
