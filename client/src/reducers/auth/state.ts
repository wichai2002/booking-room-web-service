import {IUserPayload} from "../../types/interfaces/user.interface"
import { getMeApi } from "../../api/me"


const initialState: IUserPayload = {
    id: null,
    username: '',
    fullName: '',
    isStaff: false,
    isAdmin: false,
    staffCode: '',
    image: null
};


async function verifyToken() {
    const meApi = getMeApi();
    try{
        const token = localStorage.getItem('token')

        if (!token) {
            console.log("No authentication");
            window.location.href = '/login'
        }
        
        const payload = await meApi.getMe()
        return payload
    }
    catch (error) {
        resetAuth()
        return initialState
    }
}

function resetAuth() {
    localStorage.removeItem('token')
}


const authReducer = async (state: IUserPayload = initialState, action: any) =>{
    
    switch (action.type) {
        case 'VERIFY_TOKEN':
            return {
                ...state,
                ...await verifyToken()
            };
            
        case 'LOGOUT':
            resetAuth()
            return initialState

        default:
            return state;
    }
};

export default authReducer
