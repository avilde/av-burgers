import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-av.firebaseio.com/'
});

export default instance;