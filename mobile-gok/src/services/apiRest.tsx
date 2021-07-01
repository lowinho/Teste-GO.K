import axios from 'axios';

export const apiRest = axios.create({
  baseURL: 'http://192.168.1.64:3333',
});


