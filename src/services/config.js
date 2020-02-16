import axios from 'axios'

export const http = axios.create({
    baseURL: 'https://localhost:44318/api/'
})