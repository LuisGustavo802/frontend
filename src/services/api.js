import axios from 'axios';

const api = axios.create({
    baseURL: "https://omnistackweek-backend.herokuapp.com"
});

export default api;