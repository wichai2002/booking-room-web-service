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


$http.interceptors.response.use(
    (response) => response,
    (ctx) => {
        if (ctx.response.status === 404) {
            console.log('404');
        }
    }
);


export { $http };
