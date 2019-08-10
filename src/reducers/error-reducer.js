import { GET_ERRORS } from '../actions/type';

const InitState = {};

export default function(state = InitState, action ) {
    switch(action.type) {
        case GET_ERRORS:
            return action.payload;
        default: 
            return state;
    }
}