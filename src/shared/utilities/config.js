import {store} from '../../redux/store';
import {BASE_URL} from '../exporter';
import axios from 'axios';

const HTTP_CLIENT = axios.create({
  baseURL: BASE_URL,
});

const setupAxios = () => {
  HTTP_CLIENT.interceptors.request.use(
    config => {
      const {userInfo} = store.getState().auth;
      if (userInfo?.token) {
        config.headers.Authorization = `Bearer ${userInfo?.token}`;
      }
      return config;
    },
    err => Promise.reject(err),
  );
};

const initialConfig = () => {
  setupAxios();
};

export {HTTP_CLIENT, setupAxios, initialConfig};
