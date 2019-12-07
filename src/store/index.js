import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

const middlewares = []
if (process.env.NODE_ENV !== 'production') {
  const { logger } = require('redux-logger')
  middlewares.push(logger)
}

const middleware = applyMiddleware(thunk, ...middlewares)

export default createStore( rootReducer, middleware )