import { put, takeLeading } from 'redux-saga/effects'

import { ActionType } from '../types'
import { actionTypes } from './types'

import { enterSchoolCode, enterSchoolCodeSuccess, enterSchoolCodeFailure } from './actions'

function* enterSchoolCodeTask(action?: ActionType<typeof enterSchoolCode>) {
  const { sid } = action?.payload

  try {
    if (sid === '123') {
      yield put(enterSchoolCodeSuccess(true))
    } else {
      yield put(enterSchoolCodeSuccess(false))
    }
  } catch (error) {
    yield put(enterSchoolCodeFailure(error))
  }
}

export default [takeLeading(actionTypes.ENTER_SCHOOL_CODE, enterSchoolCodeTask)]
