import { all, call, put, takeLatest } from 'redux-saga/effects'
import { paginate } from '../../adapters/RandomUser'
import { toastError } from '../toast/actions'
import { NEXT_PAGE, NEXT_PAGE_SUCCESS, NEXT_PAGE_ERROR } from './actions'

function * loadNextPage ({ type, payload }) {
  let error = false
  try {
    const response = yield call(
      paginate,
      payload.pagination.page + 1,
      payload.pagination.usersPerPage,
      payload.settings
    )
    if (response.status === 200) {
      yield put({ type: NEXT_PAGE_SUCCESS, payload: response.data })
    } else {
      error = true
    }
  } catch (err) {
    error = true
  }

  if (error) {
    yield put(toastError({
      message: 'Oops!',
      description: 'Error trying to list more users.'
    }))
    yield put({ type: NEXT_PAGE_ERROR })
  }
}

export default function * paginationSaga () {
  yield all([takeLatest(NEXT_PAGE, loadNextPage)])
}
