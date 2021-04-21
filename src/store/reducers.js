import { combineReducers } from 'redux'
import settingsReducer from './settings/reducers'
import paginationReducer from './pagination/reducers'

export default combineReducers({
  settings: settingsReducer,
  pagination: paginationReducer
})
