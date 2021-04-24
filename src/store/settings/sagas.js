import { all, put, takeLatest, select } from 'redux-saga/effects'
import { loadNextPage, resetPagination } from '../pagination/actions'
import { DISABLE_COUNTRY, ENABLE_COUNTRY } from './actions'

function * disableCountry ({ code }) {
  yield put(resetPagination())
  const state = yield select()
  state.settings.filter(country => country !== code)
  if (state.settings.length > 0) {
    yield put(loadNextPage(state.pagination, state.settings))
  }
}

function * enableCountry ({ code }) {
  yield put(resetPagination())
  const state = yield select()
  state.settings.concat([code])
  yield put(loadNextPage(state.pagination, state.settings))
}

export default function * settingsSaga () {
  yield all([
    takeLatest(ENABLE_COUNTRY, enableCountry),
    takeLatest(DISABLE_COUNTRY, disableCountry)
  ])
}
