export const ENABLE_COUNTRY = '@settings/ENABLE_COUNTRY'
export const DISABLE_COUNTRY = '@settings/DISABLE_COUNTRY'

export const enableCountry = (code) => {
  return {
    type: ENABLE_COUNTRY,
    payload: {
      code
    }
  }
}

export const disableCountry = (code) => {
  return {
    type: DISABLE_COUNTRY,
    payload: {
      code
    }
  }
}
