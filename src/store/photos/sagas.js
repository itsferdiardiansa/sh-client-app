import { takeLatest, put, call, all } from 'redux-saga/effects'
import { fetchRequestSuccess, fetchRequestFailure } from './actions'
import {
  FETCH_REQUEST_START
} from './types'


function fetchData({ payload: { albumsId } }) {
  return fetch(`https://jsonplaceholder.typicode.com/albums/${albumsId}/photos`)
      .then(res => res.json())
      .then(json => json)
}

function* getPhotos(payload) {
  try {
    const response = yield call(fetchData, payload)
    
    yield put(fetchRequestSuccess(response))
  } catch(error) {
    yield put(fetchRequestFailure(error))
  }
}

function* onFetchPhotosStart() {
  yield takeLatest(FETCH_REQUEST_START, getPhotos)
}

export default function* watchPhotossStart() {
  yield all([
    call(onFetchPhotosStart),
  ])
}