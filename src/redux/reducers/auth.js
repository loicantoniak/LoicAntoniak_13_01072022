import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    setCredentials: (state, { payload }) => {
      const { user, accessToken } = payload
      state.user = user
      state.token = accessToken
      return state
    },
    logout: (state) => {
      state.user = null
      state.token = null
      return state
    },
  },
})

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token

export const { setCredentials, logout } = authSlice.actions

export default authSlice.reducer
