import { useEffect } from 'react';
import { getMeApi } from '../../api/me';


const useAutheCheck = () => {

    function resetAuth(){
        localStorage.removeItem('token')
    }

    async function verifyToken() {
        const meApi = getMeApi();
        try {
            await meApi.getMe()
        }catch (error) {
            resetAuth()
        }
    }

    useEffect(() => {
        const getToken = localStorage.getItem('token');

        if (!getToken) {
            console.log("No authentication");
            window.location.href = '/login'
        } else {
            verifyToken()
        }
    });
}

export default useAutheCheck