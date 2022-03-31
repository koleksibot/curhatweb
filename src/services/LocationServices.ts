import get from '@utils/axios/get';
import * as Config from '@utils/axios/axiosConfig';

export const getProvinces = () => get<IProvince[]>('api/provinces/', Config.withToken());

export const getDistricts = (provinceId: IDistrict['provinceId']) =>
  get<IDistrict[]>(`api/districts/${provinceId}`, Config.withToken());

export const getSubDistricts = (districtId: ISubDistrict['districtId']) =>
  get<ISubDistrict[]>(`api/sub_districts/${districtId}`, Config.withToken());
export const getVillages = (subDistrictId: IVillage['subDistrictId']) =>
  get<IVillage[]>(`api/villages/${subDistrictId}`, Config.withToken());
