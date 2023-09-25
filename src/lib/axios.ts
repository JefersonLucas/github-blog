import axios from 'axios'

export const api = axios.create({
	baseURL: 'https://api.github.com',
})

api.defaults.headers.common['Authorization'] = `Bearer ${
	import.meta.env.VITE_REACT_GITHUB_KEY
}`
