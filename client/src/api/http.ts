// import type { AxiosError } from 'axios';
import axios from 'axios';
import { BASE_URL } from '../constans';

const $http = axios.create({
    baseURL: BASE_URL,
    timeout: 600,
    headers: {
        'Content-Type': 'application/json',
    },
});

$http.interceptors.request.use(
    (request) => {
        const token = localStorage.getItem('token');
        if (token) {
            request.headers.Authorization = `${token}`
        }
        return request
    },
    (error) => {
        return Promise.reject(error);
    }
)

$http.interceptors.response.use(
    (response) => {
        return response
    },
    (ctx) => { 
        const response = ctx.response

        if (response.status === 401 && window.location.pathname !== '/login'){
            alert(`Invalid token or token expired. Please re-login again`)
            localStorage.removeItem('token')
            window.location.href = '/login'
        }

        return response
    },
);

export { $http };
