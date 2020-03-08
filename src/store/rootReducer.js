import { combineReducers } from 'redux'

import postReducer from './post/reducer'
import commentsReducer from './comments/reducer'

export default combineReducers({
  post: postReducer,
  comments: commentsReducer
})