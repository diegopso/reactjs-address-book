import { paginate } from '../../adapters/RandomUser'

export const NEXT_PAGE = '@pagination/NEXT_PAGE'
export const NEXT_PAGE_SUCCESS = '@pagination/NEXT_PAGE_SUCCESS'

export const nextPage = (page) => {
  return {
    type: NEXT_PAGE,
    payload: {
      page
    }
  }
}

export async function loadNextPage (dispatch, getState) {
  const page = getState().pagination.page
  const response = await paginate(page)
  dispatch({ type: NEXT_PAGE, payload: response.data })
}
