export const NEXT_PAGE = '@pagination/NEXT_PAGE'
export const NEXT_PAGE_SUCCESS = '@pagination/NEXT_PAGE_SUCCESS'
export const NEXT_PAGE_ERROR = '@pagination/NEXT_PAGE_ERROR'

export const loadNextPage = (pagination, settings) => {
  return ({
    type: NEXT_PAGE,
    payload: { pagination, settings }
  })
}
