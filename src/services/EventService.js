import axios from 'axios'

let apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/selenearzola/json-sample',
  withCredentials: false,
  timeout: 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getEvents(perPage, page) {
    return apiClient.get(`/events?_limit=${perPage}&_page=${page}`)
  },
  getEvent(id) {
    return apiClient.get(`/events/${id}`)
  },
}
