import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers'

import sagas from './sagas'

const middleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(middleware))

middleware.run(sagas)

export default store
