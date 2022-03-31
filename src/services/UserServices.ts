import { snakefy } from 'snakelize';
import get from '@utils/axios/get';
import post from '@utils/axios/post';
import * as Config from '@utils/axios/axiosConfig';
import UserGroup from '@constants/UserGroupEnum';

export interface IGetUsersParams {
  userGroupId?: UserGroup;
  villageId?: IVillage['id'];
  subDistrictId?: ISubDistrict['id'];
  districtId?: IDistrict['id'];
  page: number;
}

export const getUsers = (params: IGetUsersParams) => {
  const config = snakefy({ params });

  return get<PayloadResponse<IPagination<IUser>>>('api/users', Config.withToken(config));
};

interface IGetUserResponse {
  message: string;
  payload: IMoms;
}

export const getUser = (id: IUser['id']) =>
  get<IGetUserResponse>(`api/users/${id}`, Config.withToken());

export const getSelfUser = () => get<PayloadResponse<IUser>>('api/profile', Config.withToken());

export interface IUserRequest {
  userGroupId: IUserGroup['id'];
  phoneNumber: IUser['username'];
  pin: string;
  name: IUser['fullName'];
  pob: IConsultantProfile['pob'];
  dob: IConsultantProfile['dob'];
  villageId: IVillage['id'];
}

export const postUser = (request: IUserRequest) =>
  post<PayloadResponse<IConsultant>>('api/users', request, Config.withToken());

export const getUserDownload = (userGroup: UserGroup) =>
  get(`api/users/export?user_group_id=${userGroup}`, Config.withToken({ responseType: 'blob' }));

export const getUserActivitiesDownload = (id: IUser['id']) =>
  get(`api/users/${id}/activities/export`, Config.withToken({ responseType: 'blob' }));

export const getCalendar = (id: IUser['id']) =>
  get<PayloadResponse<ICalendar[]>>(`api/calender/${id}`, Config.withToken());
