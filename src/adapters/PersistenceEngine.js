const PREFIX = '@addressbook-'

const makeKey = (key) => PREFIX + key

export function save (key, data) {
  console.debug(Date.now() + ' Saving data to localStorage: ')
  console.debug(data)
  window.localStorage.setItem(makeKey(key), JSON.stringify(data))
}

export function load (key, defaultValue = null) {
  const data = window.localStorage.getItem(makeKey(key))
  let result = defaultValue

  if (data && !['{}', '[]'].includes(JSON.stringify(data))) {
    result = JSON.parse(data)
  }

  console.debug(Date.now() + ' Loading data from localStorage: ')
  console.debug(result)

  return result
}
