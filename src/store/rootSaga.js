import { all } from 'redux-saga/effects'

import postSaga from './post/sagas'
import commentsSaga from './comments/sagas'

export default function* rootSaga() {
  yield all([
    postSaga(),
    commentsSaga()
  ])
}