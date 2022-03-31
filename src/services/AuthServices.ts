import post from '@utils/axios/post';
import * as Config from '@utils/axios/axiosConfig';

export const login = async (role: string, username: string, password: string) =>
  post(
    'auth/token',
    Config.bodyWithOauth({
      username: `${role}:${username}`,
      grant_type: 'password',
      password,
    }),
  );

export const logout = () => {};
