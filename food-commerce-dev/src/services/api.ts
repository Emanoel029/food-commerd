import axios from 'axios'

import { SnackData } from '../interfaces/SnackData'

console.log('API Base URL:', process.env.REACT_APP_API_BASE_URL)

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

export const getBurgers = () => api.get<SnackData[]>('/burgers')
export const getPizzas = () => api.get<SnackData[]>('/pizzas')
export const getDrinks = () => api.get<SnackData[]>('/drinks')
export const getSobremesas = () => api.get<SnackData[]>('/sobremesas')

export default api
