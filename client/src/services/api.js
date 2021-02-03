import axios from 'axios'
const { get } = axios.create({ baseURL: 'http://localhost:3001/' })

function errorHandler (err) {
  console.error(err)
  // eslint-disable-next-line no-undef
  alert(`Error:
    Status: ${err.response.status}
    Message: ${err.response.data.error}`)
}

export const iecho = (text) => get(`iecho?text=${text}`).catch(errorHandler)
