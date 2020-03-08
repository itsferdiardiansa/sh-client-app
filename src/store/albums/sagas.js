import { takeLatest, put, call, all } from 'redux-saga/effects'
import { fetchRequestSuccess, fetchRequestFailure } from './actions'
import {
  FETCH_REQUEST_START
} from './types'


function fetchData() {
  return fetch(`https://jsonplaceholder.typicode.com/albums`)
      .then(res => res.json())
      .then(json => json)
}

function* getAlbums() {
  try {
    const response = yield call(fetchData)
    
    yield put(fetchRequestSuccess(response))
  } catch(error) {
    yield put(fetchRequestFailure(error))
  }
}

function* onFetchAlbumsStart(params) {
  yield takeLatest(FETCH_REQUEST_START, getAlbums)
}

export default function* watchAlbumsStart() {
  yield all([
    call(onFetchAlbumsStart),
  ])
}