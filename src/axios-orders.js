import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-16aae.firebaseio.com/'
});

export default instance;