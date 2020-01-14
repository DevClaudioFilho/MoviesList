import axios from 'axios';

const api = axios.create({
  baseURL: 'http://www.omdbapi.com/?apikey=5726cef8&',
});

export default api;