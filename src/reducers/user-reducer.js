import {CURRENT_USER } from '../actions/type';

const InitState = {
    isAuthenticated: false,
    user: {}
}

export default function(state = InitState, action) {
    switch(action.type) {
        case CURRENT_USER:
            return {
                ...state,
                isAuthenticated: (action.payload !== null),
                user: action.payload
            }
        default: 
            return state;
    }
}