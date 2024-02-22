import axios from "axios";

const api = axios.create({
  baseURL: 'https://api.rael'
})

export const useApi = () => ({
  validateToken: async (token: string) => {
    return {
      user: { id: 2, name: 'Rael', email: 'rael@gmail.com' },
    }
    const response = await api.post('/validate', { token })
    return response.data
  },
  signin: async (email: string, password: string) => {
    return {
      user: { id: 2, name: 'Rael', email: 'rael@gmail.com' },
      token: '12414',
    }
    const response = await api.post('/signin', { email, password })
    return response.data
  },
  logout: async () => {
    return {
      status: true
    }
    const response = await api.post('/logout')
    return response.data
  }
})