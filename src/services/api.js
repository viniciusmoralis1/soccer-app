import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.254.201.207:3333',
});

export default api;