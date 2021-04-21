import { NEXT_PAGE } from './actions'

const INITIAL_STATE = {
  page: 0,
  maxPages: 20,
  usersPerPage: 50,
  loading: false,
  items: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case NEXT_PAGE:
    return {
      ...state,
      page: state.page + 1,
      items: [...state.items, ...action.payload.results]
    }
  default:
    return state
  }
}
