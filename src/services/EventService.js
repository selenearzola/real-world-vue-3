import axios from 'axios'

let apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/selenearzola/json-samples',
  withCredentials: false,
  timeout: 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getEvents() {
    return apiClient.get('/events')
  },
  getEvent(id) {
    return apiClient.get(`/events/${id}`)
  },
}
