import { NEXT_PAGE } from './actions'

const INITIAL_STATE = {
  page: 0,
  loading: false,
  items: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case NEXT_PAGE:
    state.page += 1
    return { ...state, items: [...state.items, ...action.payload.results] }
  default:
    return state
  }
}
