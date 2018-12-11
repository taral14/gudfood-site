import axios from 'axios'
import store from '../store/index'
import { Message } from 'element-ui'

const http = axios.create({
    baseURL: process.env.API_URL,
});

http.interceptors.request.use(
    config => {
        const token = store.getters['auth/token']
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
);

http.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    Message({type: 'error', message: 'An error occurred during the request'})
    return Promise.reject(error);
});

export default http