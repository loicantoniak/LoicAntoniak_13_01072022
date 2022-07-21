import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: null,
    email: null,
    firstName: null, 
    lastName: null,
  },
  reducers: {
    setUser: (state, { payload }) => {
      const { id, email, firstName, lastName } = payload
      state.id = id,
      state.email = email,
      state.firstName = firstName,
      state.lastName = lastName
      return state
    },
    logout: (state) => {
      state.id = null,
      state.email = null,
      state.firstName = null,
      state.lastName = null
      return state
    },
  },
})

export const getName = (state) => {
  return `${state.user.firstName} ${state.user.lastName}`
}

export const { setUser, logout } = userSlice.actions

export default userSlice.reducer
