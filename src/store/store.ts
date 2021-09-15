import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './root-reducer'

const middleware = [thunk]

const store = createStore(rootReducer, applyMiddleware(...middleware))

export default store
