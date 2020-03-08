import {
  FETCH_REQUEST_START,
  FETCH_REQUEST_SUCCESS,
  FETCH_REQUEST_FAILURE,
  SET_POST_COMMENT
} from './types'

const INITIAL_STATE = {
  isFetching: null,
  onError: {},
  response: {},
}

export const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_REQUEST_START:
      return {
        ...state,
        isFetching: true
      } 
    case FETCH_REQUEST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        response: action.payload
      }
    case FETCH_REQUEST_FAILURE:
      return {
        ...state,
        isFetching: false,
        onError: action.payload
      }
    default:
      return state
  }
}

export default postReducer