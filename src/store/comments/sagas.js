import { takeLatest, put, call, all } from 'redux-saga/effects'
import { fetchRequestSuccess, fetchRequestFailure } from './actions'
import { setPostComments } from './../post/actions'
import {
  FETCH_REQUEST_START
} from './types'


function fetchData() {
  // const endPoint = (postId !== undefined) ? `comments/${postId}` : `posts`

  return fetch(`https://jsonplaceholder.typicode.com/comments`)
      .then(res => res.json())
      .then(json => json)
}

function* getComments() {
  try {
    const response = yield call(fetchData)
    
    yield put(fetchRequestSuccess(response))
    
    yield put(setPostComments(response))
  } catch(error) {
    yield put(fetchRequestFailure(error))
  }
}

function* onFetchCommentsStart() {
  yield takeLatest(FETCH_REQUEST_START, getComments)
}

export default function* watchCommentsSaga() {
  yield all([
    call(onFetchCommentsStart),
  ])
}