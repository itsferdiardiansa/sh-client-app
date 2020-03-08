import { combineReducers } from 'redux'

import postReducer from './post/reducer'

export default combineReducers({
  post: postReducer,
  // detail: pokemonDetailReducer,
  // user: userReducer,
  // collections: collectionsReducer 
})