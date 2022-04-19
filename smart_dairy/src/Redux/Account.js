import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  account: null,
}

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    updateAccount: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateAccount } = accountSlice.actions

export default accountSlice.reducer