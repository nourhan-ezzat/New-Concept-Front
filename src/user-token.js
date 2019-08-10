import axios from 'axios';

const UserToken = token => {
    if(token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('userToken')}`;
    }
    else {
        delete axios.defaults.headers.common['Authorization'];
    }
}

export default UserToken;