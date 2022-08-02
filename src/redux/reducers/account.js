import { createSlice } from "@reduxjs/toolkit"

const accountSlice = createSlice({
  name: "account",
  initialState: [],
  reducers: {
    setAccount: (state, { payload }) => {
      state = payload
      return state
    },
  },
})

export const { setAccount } = accountSlice.actions

export default accountSlice.reducer
