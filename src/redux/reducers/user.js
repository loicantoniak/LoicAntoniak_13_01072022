import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    firstName: "",
    lastName: "",
  },
  reducers: {
    setEmail: (state, { payload }) => {
      state = payload
      return state
    },
  },
})

export const { setEmail } = userSlice.actions

export default userSlice.reducer
