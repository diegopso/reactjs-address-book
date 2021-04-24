import { NEXT_PAGE_SUCCESS, NEXT_PAGE_ERROR, RESET_PAGINATION, FILTER_USERS } from './actions'

const INITIAL_STATE = {
  page: 0,
  maxPages: 20,
  usersPerPage: 50,
  empty: false,
  error: false,
  query: '',
  items: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_USERS:
      return {
        ...state,
        items: action.payload.items,
        query: action.payload.query
      }
    case RESET_PAGINATION:
      return {
        ...state,
        page: 0,
        items: [],
        query: ''
      }
    case NEXT_PAGE_SUCCESS:
      return {
        ...state,
        page: state.page + 1,
        error: false,
        empty: false,
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
