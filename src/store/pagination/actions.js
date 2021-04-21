import { paginate } from '../../adapters/RandomUser'

export const NEXT_PAGE = '@pagination/NEXT_PAGE'
export const NEXT_PAGE_SUCCESS = '@pagination/NEXT_PAGE_SUCCESS'

export async function loadNextPage (dispatch, getState) {
  const pagination = getState().pagination
  const response = await paginate(pagination.page + 1, pagination.usersPerPage)
  dispatch({ type: NEXT_PAGE, payload: response.data })
}
