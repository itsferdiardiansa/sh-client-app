import { combineReducers } from 'redux'

import postReducer from './post/reducer'
import commentsReducer from './comments/reducer'
import usersReducer from './users/reducer'

export default combineReducers({
  post: postReducer,
  comments: commentsReducer,
  users: usersReducer
})