import { all } from 'redux-saga/effects'

import postSaga from './post/sagas'
import commentsSaga from './comments/sagas'
import usersSaga from './users/sagas'
import albumsSaga from './albums/sagas'
import photosSaga from './photos/sagas'

export default function* rootSaga() {
  yield all([
    postSaga(),
    commentsSaga(),
    usersSaga(),
    albumsSaga(),
    photosSaga()
  ])
}