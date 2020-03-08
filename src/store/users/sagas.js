import { takeLatest, put, call, all } from 'redux-saga/effects'
import { fetchRequestSuccess, fetchRequestFailure } from './actions'
import {
  FETCH_REQUEST_START
} from './types'


function fetchData() {
  return fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(res => res.json())
      .then(json => json)
}

function* getUsers() {
  try {
    const response = yield call(fetchData)
    
    yield put(fetchRequestSuccess(response))
  } catch(error) {
    yield put(fetchRequestFailure(error))
  }
}

function* onFetchUsersStart(params) {
  yield takeLatest(FETCH_REQUEST_START, getUsers)
}

export default function* watchPostSaga() {
  yield all([
    call(onFetchUsersStart),
  ])
}