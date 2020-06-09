import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import { rootReducer } from './root-reducer'
import { rootSaga } from './root-saga'

export const makeStore = () => {
  const sageMiddleware = createSagaMiddleware()

  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sageMiddleware)))

  sageMiddleware.run(rootSaga)

  return { store }
}
