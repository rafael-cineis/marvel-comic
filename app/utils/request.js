import axios from 'axios'

const REQUEST_TIMEOUT = 30000
const PUBLIC_API_KEY = '29582c2c664ce2b7ca3c86533a40a0a1'

export default function request(url, options) {
  const newOptions = {
    url,
    timeout: REQUEST_TIMEOUT,
    ...options,
    params: {
      ...options.params,
      apikey: PUBLIC_API_KEY,
    },
  }

  return axios(newOptions).then(response => response.data)
}
