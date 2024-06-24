import axios from "axios"

const API_BASE_URL = "http://localhost:8000/api"

export const registerUser = (userData) => {
  return axios.post(`${API_BASE_URL}/register/`, userData)
}

export const loginUser = (credentials) => {
  return axios.post(`${API_BASE_URL}/token/`, credentials)
}

export const refreshToken = (refresh) => {
  return axios.post(`${API_BASE_URL}/token/refresh/`, { refresh })
}
