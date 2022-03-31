import { AxiosRequestConfig } from 'axios';
import { BASE_URL } from '@utils/config';
import camelize from 'camelize';
import axios from './axios';

const destroy = <T>(path: string, config: AxiosRequestConfig) => {
  const promise = new Promise<T>((resolve, reject) => {
    axios.delete<T>(`${BASE_URL}/${path}`, config).then(
      (result) => {
        resolve(camelize(result.data));
      },
      (err) => {
        reject(err);
      },
    );
  });

  return promise;
};

export default destroy;
