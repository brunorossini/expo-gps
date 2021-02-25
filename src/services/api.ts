import axios, { AxiosRequestConfig } from 'axios';
import * as firebaseService from './firebase';

const api = axios.create({
  baseURL: 'http://localhost:5001/home-care-154dc/us-central1/webApi',
});

// api.interceptors.request.use(async (config: AxiosRequestConfig) => {
//   const token = await firebaseService.getToken();
//   const setting = config;
//   if (token) setting.headers.Authorization = token;
//   return setting;
// });

export default api;
