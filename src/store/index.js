import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

// Create saga middleware
const sagaMiddleware = createSagaMiddleware()

// List of middlewares
const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV === 'development')
  middlewares.push(logger);

// Create store
const configureStore = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
)

// Run saga
sagaMiddleware.run(rootSaga)

export default configureStore 