import { createSlice } from "@reduxjs/toolkit";

const dataLocalSorage =
  window.localStorage.getItem("userData") !== null
    ? window.localStorage.getItem("userData")
    : null;

const initialState = {
  user: dataLocalSorage,
};

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    registered: (state, { payload }) => {
      (state.user = { ...payload }),
        (state.userData = { ...payload }),
        window.localStorage.setItem("userData", JSON.stringify(state.user)),
        window.localStorage.setItem("isAuth", JSON.stringify(state.userData));
    },
    logout: (state, { payload }) => {
      window.localStorage.delete("isAuth");
    },
  },
});

export const userDataSelector = (state) => state.userData;
export const { registered, login, logout } = userDataSlice.actions;
export default userDataSlice.reducer;
