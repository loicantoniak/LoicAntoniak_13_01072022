import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
  },
  reducers: {
    setCredentials: (state, { payload }) => {
      state.token = payload
      return state
    },
    logout: (state) => {
      state.token = null
      return state
    },
  },
})

export const { setCredentials, logout } = authSlice.actions

export default authSlice.reducer
