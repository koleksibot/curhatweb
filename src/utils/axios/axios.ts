/* eslint-disable no-console */
import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL, DEBUG_MODE } from '@utils/config';

const instance = axios.create({
  baseURL: BASE_URL,
});

const logger = (config: AxiosRequestConfig) => {
  console.table([
    ['method', config.method],
    ['base_url', config.baseURL],
    ['url', config.url],
    ['auth-headers', config.headers?.Authorization],
    ['body-data', !config.data],
  ]);

  const formData: FormData = config.data;
  if (formData) {
    console.log(JSON.stringify(Object.fromEntries(formData)));
    formData.forEach((value: any, key: string) => {
      console.log(key, value);
    });
  } else {
    console.log('no form-data');
  }
};

instance.defaults.headers.post['Content-Type'] = 'multipart/form-data';
instance.interceptors.request.use(
  (config) => {
    if (DEBUG_MODE) {
      logger(config);
    }
    return config;
  },
  (error) => Promise.reject(error),
);

instance.interceptors.response.use((response) => {
  if (DEBUG_MODE) {
    console.log(response);
  }
  return response;
});

export default instance;
