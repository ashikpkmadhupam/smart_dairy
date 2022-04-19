import { configureStore } from '@reduxjs/toolkit'
import accountReducer from './Account'
import loginReducer from './LoginState'

export const store = configureStore({
  reducer: {
    account: accountReducer,
    login: loginReducer,
  },
})