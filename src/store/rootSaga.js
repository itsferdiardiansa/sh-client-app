import { all } from 'redux-saga/effects'

import postSaga from './post/sagas'

export default function* rootSaga() {
  yield all([
    postSaga()
  ])
}