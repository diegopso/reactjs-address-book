import axios from 'axios'

const baseURL = 'https://randomuser.me/api/'

const paginate = async (page) => {
  const results = 50
  const seed = '42'
  return axios.get(baseURL, {
    params: { results, seed, page }
  })
}

export { paginate }
