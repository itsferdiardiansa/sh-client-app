import { combineReducers } from 'redux'

import postReducer from './post/reducer'
import commentsReducer from './comments/reducer'
import usersReducer from './users/reducer'
import albumsReducer from './albums/reducer'
import photosReducer from './photos/reducer'

export default combineReducers({
  post: postReducer,
  comments: commentsReducer,
  users: usersReducer, 
  albums: albumsReducer,
  photos: photosReducer
})