import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'loginReducer',
  initialState: {
    isLogin: false
  },
  reducers: {
    setLogin: (state, action) => {
      state.isLogin = action.payload
    }
  }
})

export const { setLogin } = loginSlice.actions

export default loginSlice.reducer