export const NEXT_PAGE = '@pagination/NEXT_PAGE'
export const NEXT_PAGE_SUCCESS = '@pagination/NEXT_PAGE_SUCCESS'
export const NEXT_PAGE_ERROR = '@pagination/NEXT_PAGE_ERROR'

export const loadNextPage = (pagination, settings) => {
  return ({
    type: NEXT_PAGE,
    payload: { pagination, settings }
  })
}

export const RESET_PAGINATION = '@pagination/RESET_PAGINATION'
export const resetPagination = () => ({ type: RESET_PAGINATION })

export const SEARCH = '@pagination/SEARCH'
export const FILTER_USERS = '@pagination/FILTER_USERS'
export const search = (query) => {
  return ({
    type: SEARCH,
    payload: { query }
  })
}
