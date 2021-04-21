import { ENABLE_COUNTRY, DISABLE_COUNTRY } from './actions'

const INITIAL_STATE = ['CH', 'ES', 'FR', 'GB']

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ENABLE_COUNTRY:
    return state.concat([action.payload.code])
  case DISABLE_COUNTRY:
    return state.filter(code => code !== action.payload.code)
  default:
    return state
  }
}

export default reducer
