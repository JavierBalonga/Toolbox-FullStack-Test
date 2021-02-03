import axios from 'axios'
const { get } = axios.create()

function errorHandler (err) {
  console.error(err)
  // eslint-disable-next-line no-undef
  alert(`Error:
    Status: ${err.response.status}
    Message: ${err.response.data.error}`)
}

export const iecho = (text) =>
  get(`http://localhost:3001/iecho?text=${text}`).catch(errorHandler)
