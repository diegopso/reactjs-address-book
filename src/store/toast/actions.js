export const ERROR = '@toast/ERROR'

export const toastError = (payload) => ({
  type: ERROR,
  payload: { ...payload }
})
