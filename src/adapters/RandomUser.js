import axios from 'axios'

const baseURL = 'https://randomuser.me/api/'

const cache = { }
const freshness = 5 * 60 * 1000

const paginate = async (page, limit, countries, cacheNext = true) => {
  const seed = '42'
  const nat = countries.join(',')
  const cacheKey = page + nat + limit

  if (cacheNext) {
    setTimeout(() => {
      console.debug(Date.now() + ' Requesting page ' + (page + 1))
      paginate(page + 1, limit, countries, false) // cache next
    }, 500)
  }

  if (cacheKey in cache) {
    return new Promise(resolve => {
      console.debug(Date.now() + ' Loading prefetched page ' + page)
      resolve(cache[cacheKey])
    })
  }

  return axios.get(baseURL, {
    params: { results: limit, seed, page, nat }
  }).then(result => {
    cache[cacheKey] = result
    setTimeout(() => {
      delete cache[cacheKey]
    }, freshness)

    cacheNext && console.debug(Date.now() + ' Loading upon request, page ' + page)
    return Promise.resolve(cache[cacheKey])
  })

  // .then(result => new Promise(resolve => setTimeout(() => resolve(result), 60000))) // delay
  // .reject(new Error('fail'))
}

export const RandomUser = { paginate }
