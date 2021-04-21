import axios from 'axios'

const baseURL = 'https://randomuser.me/api/'

const paginate = async (page, results) => {
  const seed = '42'
  return axios.get(baseURL, {
    params: { results, seed, page }
  })
  // .then(result => new Promise(resolve => setTimeout(() => resolve(result), 60000))) // delay
}

export { paginate }
