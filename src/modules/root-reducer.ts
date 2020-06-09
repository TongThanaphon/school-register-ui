import { combineReducers } from 'redux'

import LoginReducer from './login/reducers'
import { MODULE_NAME as LOGIN_MODULE } from './login/types'

export const rootReducer = combineReducers({
  [LOGIN_MODULE]: LoginReducer,
})
