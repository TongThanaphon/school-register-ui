import { actionTypes } from './types'

export interface LoginState {
  validate: boolean
}

const initialState: LoginState = {
  validate: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ENTER_SCHOOL_CODE_SUCCESS:
      return {
        validate: action.payload.validate,
      }

    default:
      return state
  }
}
