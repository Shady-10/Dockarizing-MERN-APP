import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_URL

const api = axios.create({
    baseURL
})

export const insertMovie = payload => api.post(`http://localhost:5000/api/movie`, payload)
export const getAllMovies = () => api.get(`http://localhost:5000/api/movies`)
export const updateMovieById = (id, payload) => api.put(`http://localhost:5000/api/movie/${id}`, payload)
export const deleteMovieById = id => api.delete(`http://localhost:5000/api/movie/${id}`)
export const getMovieById = id => api.get(`http://localhost:5000/api/movie/${id}`)

const apis = {
    insertMovie,
    getAllMovies,
    updateMovieById,
    deleteMovieById,
    getMovieById,
}

export default apis