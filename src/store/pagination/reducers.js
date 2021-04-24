import { NEXT_PAGE_SUCCESS, NEXT_PAGE_ERROR } from './actions'

const INITIAL_STATE = {
  page: 0,
  maxPages: 20,
  usersPerPage: 50,
  loading: false,
  error: false,
  items: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEXT_PAGE_SUCCESS:
      return {
        ...state,
        page: state.page + 1,
        error: false,
        items: [...state.items, ...action.payload.results]
      }
    case NEXT_PAGE_ERROR:
      return {
        ...state,
        error: true
      }
    default:
      return state
  }
}
