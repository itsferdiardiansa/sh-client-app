import { takeLatest, put, call, all } from 'redux-saga/effects'
import { fetchRequestSuccess, fetchRequestFailure } from './actions'
import { fetchRequest as fetchComments } from '@store/comments/actions'
import {
  FETCH_REQUEST_START
} from './types'


function fetchData({payload: {postId}}) {
  const endPoint = (postId !== undefined) ? `posts/${postId}` : `posts`

  return fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
      .then(res => res.json())
      .then(json => json)
}

function* getPost(params) {
  try {
    const response = yield call(fetchData, params)
    
    yield put(fetchRequestSuccess(response))
  } catch(error) {
    yield put(fetchRequestFailure(error))
  }
}

function* onFetchPostStart(params) {
  yield takeLatest(FETCH_REQUEST_START, getPost)
}

export default function* watchPostSaga() {
  yield all([
    call(onFetchPostStart),
  ])
}