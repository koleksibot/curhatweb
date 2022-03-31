import { AxiosRequestConfig } from 'axios';
import { CLIENT_ID, CLIENT_SECRET } from '@utils/config';
import store from '@redux/store';

export const withToken = (config?: AxiosRequestConfig) => {
  const session = store.getState().session.payload;

  return {
    ...config,
    headers: {
      Authorization: `${session.tokenType} ${session.accessToken}`,
    },
  };
};

export const bodyWithOauth = (body?: any) => ({
  ...body,
  client_id: CLIENT_ID,
  client_secret: CLIENT_SECRET,
});
