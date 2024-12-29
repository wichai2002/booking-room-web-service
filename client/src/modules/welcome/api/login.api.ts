// interface
import { $http } from "../../../api/http"
import { ILogin } from "../types/authen"

export const LoginApi = () => {

    async function login(data: ILogin) {
        const response = await $http.post(`/api/v1/user/authen`, data);
        console.log(response.statusText);
        
        if (response.status == 201) {
            const token = response.data;
            localStorage.setItem('token', `Bearer ${token}`);
            return true
        }

        return response.data
    }

    function logout() {
        localStorage.removeItem('token')
        window.location.href = '/login'
    }

    return {login, logout}

}