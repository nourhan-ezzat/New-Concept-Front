import axios from 'axios';

import { GET_ERRORS, CURRENT_USER } from './type';
import UserToken from '../user-token';

const API_URL = 'http://localhost:3001';

export const Login = (email, password) => dispatch => {
    axios.post(`${API_URL}/login`, {email, password})
    .then(res => {
        localStorage.setItem('userToken', res.token);
        dispatch({
            type: CURRENT_USER,
        })
    })
    .catch(err => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    })
}

export const Logout = (history) => dispatch => {
    localStorage.removeItem('userToken');
    UserToken(false);
    dispatch({
        type: '',
        token: ''
    })
    history.push('/');
}