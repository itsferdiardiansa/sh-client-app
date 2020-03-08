import {
  FETCH_REQUEST_START,
  FETCH_REQUEST_SUCCESS,
  FETCH_REQUEST_FAILURE,
  SET_POST_COMMENT
} from './types'

export const fetchRequest = params => ({
  type: FETCH_REQUEST_START,
  payload: params
})

export const fetchRequestSuccess = items => ({
  type: FETCH_REQUEST_SUCCESS,
  payload: items
}) 

export const fetchRequestFailure = error => ({
  type: FETCH_REQUEST_FAILURE,
  payload: error
})

export const setPostComments = comments => ({
  type: SET_POST_COMMENT,
  payload: comments
})