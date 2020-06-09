import { MODULE_NAME } from './types'
import { LoginState } from './reducers'

export const getRootLoginState = (state) => state[MODULE_NAME] as LoginState

export const getValidateSchoolCodeState = (state) => state.validate
