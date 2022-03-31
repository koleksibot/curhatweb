import { AxiosRequestConfig } from 'axios';
import { BASE_URL } from '@utils/config';
import camelize from 'camelize';
import axios from './axios';

const get = <T>(path: string, config: AxiosRequestConfig) => {
  const promise = new Promise<T>((resolve, reject) => {
    axios.get<T>(`${BASE_URL}/${path}`, config).then(
      (result) => {
        const camelizedData = camelize(result.data);
        if (Object.keys(camelizedData).length === 0) {
          resolve(result.data);
        }
        resolve(camelize(result.data));
      },
      (err) => {
        reject(err);
      },
    );
  });

  return promise;
};

export default get;
