import { all } from 'redux-saga/effects'
import paginationSaga from './pagination/sagas'
import settingsSaga from './settings/sagas'
import toastSaga from './toast/sagas'

export default function * rootSaga (getState) {
  yield all([
    paginationSaga(),
    toastSaga(),
    settingsSaga()
  ])
}
