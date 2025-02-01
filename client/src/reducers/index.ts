import { combineReducers } from 'redux'
import authReducer from './auth/state'


export default combineReducers({
    auth: authReducer,
})