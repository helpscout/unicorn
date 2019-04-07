import axios from 'axios'

const createApiClient = (options = {}) => {
  return axios.create(options)
}

export default createApiClient
