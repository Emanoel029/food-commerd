import axios from 'axios'

console.log('API Base URL:', process.env.REACT_APP_API_BASE_URL)

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

export const getBurgers = () => api.get('/burgers')
export const getPizzas = () => api.get('/pizzas')
export const getDrinks = () => api.get('/drinks')
export const getSobremesas = () => api.get('/sobremesas')

export default api
