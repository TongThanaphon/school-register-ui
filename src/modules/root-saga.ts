import { all } from 'redux-saga/effects'

import LoginSagaModule from './login/sagas'

export function* rootSaga() {
  yield all([...LoginSagaModule])
}
