import { useEffect } from 'react';

const useAutheCheck = () => {
    function verifyToken(token: string) {
        console.log(token);
        return true
    }

    useEffect(() => {
        const getToken = localStorage.getItem('token');

        if (!getToken) {
            console.log("No authentication");
            window.location.href = '/login'
        } else {
            verifyToken(getToken)
        }

    });

}

export default useAutheCheck