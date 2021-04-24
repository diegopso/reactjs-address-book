import { all, takeEvery } from 'redux-saga/effects'
import { ERROR } from './actions'
import { notification } from 'antd'

function * toastError ({ payload }) {
  notification.error({
    message: payload.message,
    description: payload.description
  })
}

export default function * toastSaga () {
  yield all([
    takeEvery(ERROR, toastError)
  ])
}
