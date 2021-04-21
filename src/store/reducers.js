import { combineReducers } from 'redux'
import settingsReducer from './settings/reducers'

export default combineReducers({
  settings: settingsReducer
})
