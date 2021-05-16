import { load, save } from '../../adapters/PersistenceEngine'
import { ENABLE_COUNTRY, DISABLE_COUNTRY } from './actions'

const persistenceKey = 'countries'
const INITIAL_STATE = load(persistenceKey, ['CH', 'ES', 'FR', 'GB'])

const reducer = (state = INITIAL_STATE, action) => {
  let newState = []

  switch (action.type) {
    case ENABLE_COUNTRY:
      newState = state.concat([action.payload.code])
      break
    case DISABLE_COUNTRY:
      newState = state.filter(code => code !== action.payload.code)
      break
    default:
      newState = state
      break
  }

  save(persistenceKey, newState)
  return newState
}

export default reducer
