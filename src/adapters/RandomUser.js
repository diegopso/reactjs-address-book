import axios from 'axios'

const baseURL = 'https://randomuser.me/api/'

const paginate = async (page, results, countries) => {
  const seed = '42'
  const nat = countries.join(',')
  return axios.get(baseURL, {
    params: { results, seed, page, nat }
  })
  // .then(result => new Promise(resolve => setTimeout(() => resolve(result), 60000))) // delay
  // .reject(new Error('fail'))
}

export { paginate }
