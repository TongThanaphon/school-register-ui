import { actionTypes } from './types'

export const enterSchoolCode = (sid: string) => ({
  type: actionTypes.ENTER_SCHOOL_CODE,
  payload: {
    sid,
  },
})

export const enterSchoolCodeSuccess = (validate: boolean) => ({
  type: actionTypes.ENTER_SCHOOL_CODE_SUCCESS,
  payload: {
    validate,
  },
})

export const enterSchoolCodeFailure = (error) => ({
  type: actionTypes.ENTER_SCHOOL_CODE_FAILURE,
  error,
})
