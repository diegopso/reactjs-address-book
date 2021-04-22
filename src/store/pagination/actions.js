import { notification } from 'antd'
import { paginate } from '../../adapters/RandomUser'

export const NEXT_PAGE_ERROR = '@pagination/NEXT_PAGE'
export const NEXT_PAGE_SUCCESS = '@pagination/NEXT_PAGE_SUCCESS'

export async function loadNextPage (dispatch, getState) {
  const pagination = getState().pagination
  const settings = getState().settings
  let error = false
  try {
    const response = await paginate(pagination.page + 1, pagination.usersPerPage, settings)
    if (response.status === 200) {
      dispatch({ type: NEXT_PAGE_SUCCESS, payload: response.data })
    } else {
      error = true
    }
  } catch (_) {
    error = true
  }

  if (error) {
    notification.error({
      message: 'Oops!',
      description: 'Error trying to list more users.'
    })
  }
}
