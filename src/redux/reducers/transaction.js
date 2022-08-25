import { createSlice } from "@reduxjs/toolkit"

const transactionSlice = createSlice({
  name: "transaction",
  initialState: [],
  reducers: {
    setTransaction: (state, { payload }) => {
      state = payload
      return state
    },
    updateTransaction: (state, { payload }) => {
      const index = state.findIndex((t) => t._id === payload._id)
      if (index !== -1) {
        state[index] = payload
      }
      return state
    },
  },
})

export const { setTransaction, updateTransaction } = transactionSlice.actions

export default transactionSlice.reducer
